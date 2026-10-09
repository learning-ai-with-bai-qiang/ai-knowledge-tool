window.PAGE = {
  "title": "pywebview 开启调试控制台",
  "summary": "一个 debug=True，前端报错全看见",
  "category": "AI知识库工具",
  "tags": [
    "pywebview",
    "调试",
    "前端",
    "开发工具"
  ],
  "bg": "linear-gradient(135deg, #3C254D 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "pywebview 开启调试控制台",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "AI 知识库工具 app.py 的前端调试技巧",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<div style=\"line-height: 1.9;\"><span style=\"color: rgb(240, 236, 245); font-size: 16px;\">在 AI 知识库工具的 app.py 里，给 <span style=\"font-family:monospace;color:#FFD166;\">webview.start()</span> 传入 <span style=\"font-family:monospace;color:#A9E5BB;\">debug=True</span>，就能开启前端调试控制台。代码具体位置在</span></div><div style=\"line-height:1.9;color:#F0ECF5;font-size:16px;\"><span style=\"background-color: rgb(0, 0, 0); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre; color: rgb(197, 134, 192);\">  if</span><span style=\"background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre;\"> </span><span style=\"background-color: rgb(0, 0, 0); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre; color: rgb(156, 220, 254);\">__name__</span><span style=\"background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre;\"> </span><span style=\"background-color: rgb(0, 0, 0); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre; color: rgb(212, 212, 212);\">==</span><span style=\"background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre;\"> </span><span style=\"background-color: rgb(0, 0, 0); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre; color: rgb(206, 145, 120);\">\"__main__\"</span><span style=\"background-color: rgb(0, 0, 0); color: rgb(255, 255, 255); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; white-space: pre;\">:</span><div style=\"color: rgb(255, 255, 255); background-color: rgb(0, 0, 0); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 18px; line-height: 22px; white-space: pre;\"><div>&nbsp; &nbsp; <span style=\"color: #dcdcaa;\">main</span>()</div><div>的上面一点</div></div><br>开启后，软件窗口内<b style=\"color:#7BD5F5;\">右键 →【检查】</b>，即可调出开发者工具：查 JS 报错、看 <span style=\"font-family:monospace;color:#FFD166;\">console.log</span> 打印信息，HTML / CSS / JavaScript 前端代码调试都靠它。</div>",
      "style": "",
      "scale": 1.4
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FF6B6B;font-weight:700;\">注意 1：仅开发阶段使用！打包发布成品时务必移除 debug=True，关闭调试面板，防止用户随意查看前端源码。</div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FF9A56;font-weight:700;\">注意 2：开启 debug=True 会恢复浏览器原生右键菜单。自定义右键菜单的代码里必须写 e.preventDefault() 拦截原生右键，避免两个菜单同时弹出冲突。</div>",
      "style": "",
      "scale": 1.1
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FFD166;font-weight:700;\">一句话结论：开发开 debug=True 方便调试，发布删 debug=True 保护源码——自定义右键记得 preventDefault。</div>",
      "style": "",
      "scale": 1.3
    }
  ]
}