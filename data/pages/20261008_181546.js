window.PAGE = {
  "title": "动态把项目根目录加入 sys.path",
  "summary": "三层向上，根治跨文件夹导入失败",
  "category": "AI编程",
  "tags": [
    "Python",
    "sys.path",
    "import",
    "路径"
  ],
  "bg": "linear-gradient(135deg, #4D341D 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "动态把项目根目录加入 sys.path",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "几行代码，让跨文件夹 import 再也不报错",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9;color:#F7EFE6;font-size:16px;\"><b style=\"color:#7BD5F5;\">核心代码</b><br><span style=\"font-family:monospace;color:#A9E5BB;\">import sys, os<br>sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))</span><br><br>作用：把<b style=\"color:#FFD166;\">当前文件往上三级的文件夹</b>加入 Python 搜索路径，且放在<b style=\"color:#FFD166;\">最优先查找</b>的位置。</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9;color:#F7EFE6;font-size:16px;\"><b style=\"color:#7BD5F5;\">逐层拆解</b><br><br>1. <span style=\"font-family:monospace;color:#FFD166;\">__file__</span> → 当前 .py 脚本文件本身<br>2. <span style=\"font-family:monospace;color:#FFD166;\">os.path.abspath(__file__)</span> → 脚本的<b>完整绝对路径</b><br>3. <span style=\"font-family:monospace;color:#FFD166;\">os.path.dirname()</span> → 取上级文件夹；<b>连续写 3 次 = 向上回溯 3 层</b><br>4. <span style=\"font-family:monospace;color:#FFD166;\">sys.path.insert(0, 路径)</span> → 插到搜索列表<b>第 0 位（最高优先级）</b>，import 时最先在这里找</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FF6B6B;font-weight:700;\">避坑：不要直接照抄层数！写几层 dirname，取决于脚本离项目根目录有几层——层数不对会加到错误文件夹，导入照样报错。</div>",
      "style": "",
      "scale": 1.1
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9;color:#F7EFE6;font-size:16px;\"><b style=\"color:#A9E5BB;\">用途</b><br>多文件项目里解决<b style=\"color:#FFD166;\">跨文件夹 import 失败</b>。不写死绝对路径，代码拷到别的电脑、换存放位置，依然能正常导入上层模块。<br><br><b style=\"color:#A9E5BB;\">补充</b>：Windows / Linux / macOS 都兼容，os.path 会自动处理斜杠差异。</div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "char_cards",
      "colors": {
        "leftColor": "#ff9a56",
        "rightColor": "#38ef7d"
      },
      "content": {
        "left": {
          "emoji": "🚀",
          "title": "insert(0)",
          "tags": [
            "最高优先级",
            "最先查找"
          ],
          "desc": "插到搜索列表最前面，自己的目录最先被找到；代价是有同名模块覆盖风险。"
        },
        "right": {
          "emoji": "🐢",
          "title": "append()",
          "tags": [
            "最低优先级",
            "追加末尾"
          ],
          "desc": "追加到搜索列表末尾，不抢标准库和同名的先机；不需要最高优先级时用它更稳。"
        }
      },
      "style": "",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FFD166;font-weight:700;\">一句话结论：本地开发调试用 sys.path.insert 动态加根目录没问题；打包发布时改用 setup.py 或相对导入，别大量依赖这种写法。</div>",
      "style": "",
      "scale": 1.3
    }
  ]
}