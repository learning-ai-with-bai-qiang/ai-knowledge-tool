import webview
import json
from datetime import datetime
from pathlib import Path

BASE_DIR = Path(__file__).parent
ASSETS_DIR = BASE_DIR / "assets"
DATA_DIR = BASE_DIR / "data"
PAGES_DIR = DATA_DIR / "pages"
SOURCES_DIR = DATA_DIR / "sources"
KNOWLEDGE_JS = DATA_DIR / "knowledge.js"
PROMPT_MD = ASSETS_DIR / "generate_prompt.md"
INDEX_HTML = ASSETS_DIR / "index.html"


def get_clipboard_text():
    import pyperclip
    try:
        return pyperclip.paste()
    except Exception:
        return ""


def clean_config_text(text):
    """清洗剪贴板：剥掉代码块标记，只留 window.PAGE = {...}"""
    text = text.replace("\r\n", "\n").replace("\r", "\n").strip()

    start = text.find("window.PAGE")
    if start == -1:
        return ""
    text = text[start:]

    brace_start = text.find("{")
    if brace_start == -1:
        return ""

    depth = 0
    in_str = False
    escape = False
    quote_char = ""
    end = -1
    for i in range(brace_start, len(text)):
        c = text[i]
        if escape:
            escape = False
            continue
        if c == "\\":
            escape = True
            continue
        if in_str:
            if c == quote_char:
                in_str = False
            continue
        if c == '"' or c == "'":
            in_str = True
            quote_char = c
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                end = i
                break

    if end == -1:
        return ""
    return text[brace_start:end + 1]


def load_knowledge_list():
    if not KNOWLEDGE_JS.exists():
        return []
    content = KNOWLEDGE_JS.read_text(encoding="utf-8")
    start = content.find("[")
    end = content.rfind("]")
    if start == -1 or end == -1:
        return []
    try:
        return json.loads(content[start:end + 1])
    except Exception:
        return []


def save_knowledge_list(items):
    content = "window.KNOWLEDGE = " + json.dumps(items, ensure_ascii=False, indent=2) + "\n"
    KNOWLEDGE_JS.write_text(content, encoding="utf-8")

def extract_body(page_data):
    """从 page_data 里抽出纯文本正文（给搜索用）"""
    import re
    parts = []

    def strip_html(s):
        if not s:
            return ""
        s = re.sub(r"<[^>]+>", " ", s)
        s = s.replace("&nbsp;", " ")
        s = re.sub(r"\s+", " ", s)
        return s.strip()

    for el in page_data.get("elements", []):
        t = el.get("type")
        c = el.get("content")

        if t in ("title", "subtitle", "emoji"):
            parts.append(str(c or ""))
        elif t in ("html", "wrapper"):
            parts.append(strip_html(str(c or "")))
        elif t == "char_cards" and isinstance(c, dict):
            for side in ("left", "right"):
                d = c.get(side) or {}
                parts.append(str(d.get("title", "")))
                parts.append(str(d.get("desc", "")))
                for tag in (d.get("tags") or []):
                    parts.append(str(tag))
        elif t == "dialog_scene" and isinstance(c, list):
            for item in c:
                parts.append(str(item.get("name", "")))
                parts.append(str(item.get("text", "")))

    return " ".join(p for p in parts if p)    


class Api:
    # ============ 保存知识点页面 ============
    def save_page(self, page_id, page_data):
        if not page_id:
            return {"ok": False, "msg": "缺少页面 id"}
        target = PAGES_DIR / f"{page_id}.js"
        if not target.exists():
            return {"ok": False, "msg": "文件不存在：" + str(target)}
        try:
            content = "window.PAGE = " + json.dumps(page_data, ensure_ascii=False, indent=2)
            target.write_text(content, encoding="utf-8")
            return {"ok": True}
        except Exception as e:
            return {"ok": False, "msg": str(e)}

    # ============ 拼接提示词 ============
    def build_prompt(self, user_text):
        if not user_text or not user_text.strip():
            return {"ok": False, "msg": "文案为空"}
        if not PROMPT_MD.exists():
            return {"ok": False, "msg": "找不到提示词模板"}
        prompt_template = PROMPT_MD.read_text(encoding="utf-8").strip()

        # 动态注入当前分类列表
        items = load_knowledge_list()
        cats = []
        for it in items:
            c = (it.get("category") or "").strip()
            if c and c not in cats:
                cats.append(c)
        cats_str = "、".join(cats) if cats else "（还没有任何分类）"
        prompt_template = prompt_template.replace("{{CATEGORIES}}", cats_str)

        full = prompt_template + "\n" + user_text.strip()
        return {"ok": True, "prompt": full}

    # ============ 导入配置 ============
    def import_config(self, user_text="", edit_id=None):
        # 1. 读剪贴板
        raw = get_clipboard_text()
        if not raw or not raw.strip():
            return {"ok": False, "msg": "剪贴板为空，请先复制 AI 返回的配置"}

        # 2. 清洗
        cleaned = clean_config_text(raw)
        if not cleaned:
            return {"ok": False, "msg": "剪贴板里没读到配置内容（应该以 window.PAGE 开头）"}

        # 3. 解析
        try:
            page_data = json.loads(cleaned)
        except Exception as e:
            return {"ok": False, "msg": "配置格式错误：" + str(e)}

        # 4. 决定 id
        if edit_id:
            page_id = edit_id
        else:
            page_id = datetime.now().strftime("%Y%m%d_%H%M%S")

        # 5. 存 config
        PAGES_DIR.mkdir(parents=True, exist_ok=True)
        target = PAGES_DIR / f"{page_id}.js"
        content = "window.PAGE = " + json.dumps(page_data, ensure_ascii=False, indent=2)
        target.write_text(content, encoding="utf-8")

        # 6. 存原始文案
        SOURCES_DIR.mkdir(parents=True, exist_ok=True)
        if user_text:
            (SOURCES_DIR / f"{page_id}.txt").write_text(user_text, encoding="utf-8")

        # 7. 更新索引
        items = load_knowledge_list()
        # 编辑模式：先删旧的同 id 记录
        items = [it for it in items if it.get("id") != page_id]
        items.append({
            "id": page_id,
            "title": page_data.get("title", "未命名"),
            "summary": page_data.get("summary", ""),
            "category": page_data.get("category", "未分类"),
            "tags": page_data.get("tags", []),
            "file": f"pages/{page_id}.js",
            "created": datetime.now().strftime("%Y-%m-%d"),
            "body": extract_body(page_data),
        })
        save_knowledge_list(items)

        return {"ok": True, "id": page_id}

    # ============ 读原始文案 ============
    def get_source(self, page_id):
        if not page_id:
            return {"ok": False, "msg": "缺少页面 id"}
        f = SOURCES_DIR / f"{page_id}.txt"
        if f.exists():
            return {"ok": True, "text": f.read_text(encoding="utf-8")}
        return {"ok": True, "text": ""}

    def read_clipboard(self):
        """读剪贴板（给右键菜单粘贴用）"""
        return get_clipboard_text()
    #读取剪贴板的文本内容
    def get_clipboard_text():
        import pyperclip
        try:
            return pyperclip.paste()
        except Exception:
            return ""

    # ============ 草稿 ============
    def save_draft(self, text):
        draft_file = DATA_DIR / "draft.txt"
        draft_file.write_text(text or "", encoding="utf-8")
        return {"ok": True}

    def load_draft(self):
        draft_file = DATA_DIR / "draft.txt"
        if draft_file.exists():
            return {"ok": True, "text": draft_file.read_text(encoding="utf-8")}
        return {"ok": True, "text": ""}

    def clear_draft(self):
        draft_file = DATA_DIR / "draft.txt"
        draft_file.write_text("", encoding="utf-8")
        return {"ok": True}

    # ============ 删除知识点 ============
    def delete_page(self, page_id):
        if not page_id:
            return {"ok": False, "msg": "缺少页面 id"}
        try:
            # 删 config
            (PAGES_DIR / f"{page_id}.js").unlink(missing_ok=True)
            # 删原文案
            (SOURCES_DIR / f"{page_id}.txt").unlink(missing_ok=True)
            # 删索引记录
            items = load_knowledge_list()
            items = [it for it in items if it.get("id") != page_id]
            save_knowledge_list(items)
            return {"ok": True}
        except Exception as e:
            return {"ok": False, "msg": str(e)}

    def toggle_pin(self, page_id):
        """切换置顶。每分类最多 4 个置顶。"""
        items = load_knowledge_list()
        target = None
        for it in items:
            if it.get("id") == page_id:
                target = it
                break
        if not target:
            return {"ok": False, "msg": "找不到该知识点"}

        # 已置顶 → 取消
        if target.get("pinned"):
            target["pinned"] = False
            save_knowledge_list(items)
            return {"ok": True, "pinned": False}

        # 统计同分类已置顶数量
        cat = target.get("category", "")
        pinned_in_cat = sum(1 for it in items
                            if it.get("pinned") and it.get("category") == cat)
        if pinned_in_cat >= 4:
            return {"ok": False, "msg": "「" + cat + "」分类最多置顶 4 个"}

        target["pinned"] = True
        save_knowledge_list(items)
        return {"ok": True, "pinned": True}

        # ============ 收藏 ============
    def toggle_favorite(self, page_id):
        """切换收藏状态"""
        items = load_knowledge_list()
        target = None
        for it in items:
            if it.get("id") == page_id:
                target = it
                break
        if not target:
            return {"ok": False, "msg": "找不到该知识点"}

        target["favorite"] = not target.get("favorite", False)
        save_knowledge_list(items)
        return {"ok": True, "favorite": target["favorite"]}

        # ============ 重命名分类 ============
    def rename_category(self, old_name, new_name):
        new_name = (new_name or "").strip()
        if not old_name or not new_name:
            return {"ok": False, "msg": "名字不能为空"}
        if old_name == new_name:
            return {"ok": True, "count": 0}
        items = load_knowledge_list()
        count = 0
        for it in items:
            if it.get("category") == old_name:
                it["category"] = new_name
                count += 1
        save_knowledge_list(items)
        return {"ok": True, "count": count}

        # ============ 删除分类（连带该分类下所有知识点）============
    def delete_category(self, cat_name):
        if not cat_name:
            return {"ok": False, "msg": "缺少分类名"}
        items = load_knowledge_list()
        to_delete = [it for it in items if it.get("category") == cat_name]
        for it in to_delete:
            pid = it.get("id")
            if pid:
                (PAGES_DIR / f"{pid}.js").unlink(missing_ok=True)
                (SOURCES_DIR / f"{pid}.txt").unlink(missing_ok=True)
        remain = [it for it in items if it.get("category") != cat_name]
        save_knowledge_list(remain)
        return {"ok": True, "count": len(to_delete)}
        # ============ 移动知识点到别的分类 ============
    def move_page(self, page_id, new_category):
        new_category = (new_category or "").strip()
        if not page_id or not new_category:
            return {"ok": False, "msg": "参数不完整"}
        items = load_knowledge_list()
        hit = False
        for it in items:
            if it.get("id") == page_id:
                it["category"] = new_category
                hit = True
                break
        if not hit:
            return {"ok": False, "msg": "找不到该知识点"}
        save_knowledge_list(items)
        return {"ok": True}

        # ============ 查重 ============
    def check_duplicate(self, user_text):
        """拿用户写的文案，跟库里每条比相似度，返回最相似的那条（≥70%才返回）"""
        if not user_text or not user_text.strip():
            return {"ok": True, "match": None}

        try:
            from rapidfuzz import fuzz
        except ImportError:
            return {"ok": True, "match": None}

        items = load_knowledge_list()
        if not items:
            return {"ok": True, "match": None}

        best = None
        best_score = 0
        for it in items:
            parts = [
                it.get("title", ""),
                it.get("summary", ""),
                " ".join(it.get("tags", []) or []),
                it.get("body", ""),
            ]
            # 把原始文案也加进来比
            pid = it.get("id")
            if pid:
                src = SOURCES_DIR / f"{pid}.txt"
                if src.exists():
                    parts.append(src.read_text(encoding="utf-8"))

            target = " ".join(parts)
            score = max(
                fuzz.ratio(user_text, target),
                fuzz.partial_ratio(user_text, target),
            )
            if score > best_score:
                best_score = score
                best = it

        if best and best_score >= 70:
            return {
                "ok": True,
                "match": {
                    "id": best.get("id"),
                    "title": best.get("title"),
                    "summary": best.get("summary", ""),
                    "tags": best.get("tags", []),
                    "category": best.get("category", ""),
                    "score": round(best_score, 1),
                }
            }
        return {"ok": True, "match": None}

        # ============ TTS 朗读 ============
    def tts_page(self, page_id):
        """把知识点正文转成语音（带缓存）"""
        if not page_id:
            return {"ok": False, "msg": "缺少 id"}

        audio_dir = DATA_DIR / "audio"
        audio_dir.mkdir(parents=True, exist_ok=True)
        audio_file = audio_dir / f"{page_id}.mp3"

        # 缓存命中
        if audio_file.exists():
            return {"ok": True, "path": str(audio_file), "cached": True}

        # 读 config，抽正文
        f = PAGES_DIR / f"{page_id}.js"
        if not f.exists():
            return {"ok": False, "msg": "找不到知识点"}
        content = f.read_text(encoding="utf-8")
        s = content.find("{")
        e = content.rfind("}")
        try:
            page_data = json.loads(content[s:e + 1])
        except Exception as ex:
            return {"ok": False, "msg": "解析失败：" + str(ex)}

        text = extract_body(page_data)
        if not text:
            return {"ok": False, "msg": "正文为空"}

        # 生成 mp3
        try:
            import asyncio
            import edge_tts

            async def _gen():
                tts = edge_tts.Communicate(text, "zh-CN-XiaoxiaoNeural")
                await tts.save(str(audio_file))

            asyncio.run(_gen())
        except Exception as ex:
            return {"ok": False, "msg": "生成失败：" + str(ex)}

        return {"ok": True, "path": str(audio_file), "cached": False}


def main():
    api = Api()
    webview.create_window(
        title="知识库工具",
        url=f"file:///{INDEX_HTML.as_posix()}",
        width=1280,
        height=800,
        resizable=True,
        maximized=True,
        js_api=api,
    )
    webview.start()


if __name__ == "__main__":
    main()