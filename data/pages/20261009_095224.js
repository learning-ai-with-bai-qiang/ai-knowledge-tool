window.PAGE = {
  "title": "Python 动态路径获取",
  "summary": "获取脚本真实路径，稳定定位文件",
  "category": "AI编程",
  "tags": [
    "Python",
    "路径处理",
    "os.path"
  ],
  "bg": "linear-gradient(135deg, #1e1e2e 0%, #023D22 100%)",
  "elements": [
    {
      "type": "title",
      "content": "Python 动态路径获取",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "获取脚本真实路径，稳定定位文件",
      "style": "",
      "scale": 1.1
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9; color:#E8F0EA; font-size:15px;\"><p style=\"font-weight:700; font-size:17px; margin:0 0 10px;\">核心用法</p><p style=\"margin:0;\"><b style=\"color:#7CFFCB;\">os.path.abspath(__file__)</b> 获取当前脚本的绝对真实路径，基于该路径拼接文件地址，无论从项目根目录或是脚本目录运行，都能稳定定位目标文件。</p><p style=\"font-weight:700; font-size:17px; margin:12px 0 10px;\">示例</p><div style=\"background:rgba(255,255,255,0.08); padding:10px 12px; border-radius:8px; font-family:Consolas,monospace; font-size:13px; color:#FFD166;\">import os<br># 脚本绝对路径<br>print(os.path.abspath(__file__))<br><br># 脚本所在文件夹<br>print(os.path.dirname(__file__))</div></div>",
      "style": "",
      "scale": 1.5
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:22px; font-weight:800; color:#FF6B6B;\">注意</div><div style=\"font-size:19px; color:#FFD166; margin-top:8px; line-height:1.7;\">拿到的是<b style=\"color:#7CFFCB;\">脚本本身路径</b>，不是项目根目录；一般搭配 <b style=\"color:#7CFFCB;\">os.path.dirname(__file__)</b> 拿到脚本所在文件夹，再向上检索项目根目录。</div>",
      "style": "",
      "scale": 1.3
    }
  ]
}