window.PAGE = {
  "title": "对比卡片配色总一样的 Bug",
  "summary": "style 重复导致配色丢失",
  "category": "AI编程",
  "tags": [
    "AI知识库",
    "char_cards",
    "JSON",
    "配色"
  ],
  "bg": "linear-gradient(135deg, #3D023B 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "对比卡片配色总一样的 Bug",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "不是 AI 偷懒，是配色字段被覆盖后丢了",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9;color:#F7EAF6;font-size:16px;'><b style='color:#7BD5F5;'>现象</b><br>AI 知识库工具生成的 <span style='font-family:monospace;color:#FFD166;'>char_cards</span> 对比卡片，本该<b style='color:#FFD166;'>每次随机选一对颜色</b>，实际渲染出来却总是同一套配色。<br><br><b style='color:#7BD5F5;'>分析原因</b><br>生成的配置里 <span style='font-family:monospace;color:#FFD166;'>style</span> 字段写了<b style='color:#FF6B6B;'>两次</b>：第一个存配色对象（leftColor / rightColor），第二个是通用字段的空字符串 <span style='font-family:monospace;color:#FFD166;'>\"style\": \"\"</span>。JSON 同名键<b>后写覆盖先写</b>，配色对象被空串吃掉，引擎读不到颜色，只好走 fallback——表现出来的就是配色固定不变。</div>",
      "style": "",
      "scale": 1.4
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:20px;line-height:1.9;color:#FF6B6B;font-weight:700;'>根子：字段名撞车。通用 style（CSS 字符串）和 char_cards 专属配色都叫 style，写进同一个对象必有一个被覆盖。</div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9;color:#F7EAF6;font-size:16px;'><b style='color:#A9E5BB;'>解决办法（两步）</b><br><br><b>1. 改字段名（核心）：</b>char_cards 的配色从 <span style='font-family:monospace;color:#FFD166;'>style</span> 改名为 <span style='font-family:monospace;color:#FFD166;'>colors</span>。<br>· 引擎读取：<span style='font-family:monospace;color:#7BD5F5;'>const style = el.style || {}</span> → 改成 <span style='font-family:monospace;color:#7BD5F5;'>const colors = el.colors || {}</span>，内部取值跟着改<br>· 通用 style 仍是字符串，管字体字号，互不影响<br><br><b>2. 提示词同步改：</b>字段说明里把配色写成 <span style='font-family:monospace;color:#FFD166;'>colors</span>，并强调“leftColor / rightColor 由 AI 根据主题<b style='color:#FFD166;'>每次随机选一对</b>，不要总用一样的”。<br><br>正确输出长这样：<span style='font-family:monospace;color:#7BD5F5;'>{ \"type\": \"char_cards\", \"colors\": { \"leftColor\": \"#36d1dc\", \"rightColor\": \"#f6d365\" }, \"content\": {...}, \"style\": \"\" }</span></div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "dialog_scene",
      "content": [
        {
          "side": "left",
          "name": "用户",
          "emoji": "🙋",
          "text": "对比卡片颜色怎么每次都一样？我明明提示了要随机换配色。"
        },
        {
          "side": "right",
          "name": "排查后",
          "emoji": "🧑‍💻",
          "text": "配色对象被后面那个空 style 覆盖了，引擎根本没收到颜色。字段改名为 colors，再让提示词要求每次随机选色。"
        }
      ],
      "style": "",
      "scale": 1.3
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:20px;line-height:1.9;color:#FFD166;font-weight:700;'>一句话结论：JSON 同名键后者覆盖前者，配色和空 style 撞名必被吃掉。改名 colors + 提示词要求随机选色，两个问题一起解决。</div>",
      "style": "",
      "scale": 1.3
    }
  ]
}