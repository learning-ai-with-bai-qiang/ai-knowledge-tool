window.PAGE = {
  "title": "__pycache__ 文件夹是干嘛的",
  "summary": "Python 缓存目录，删了会自动重建",
  "category": "AI编程",
  "tags": [
    "Python",
    "__pycache__",
    "缓存"
  ],
  "bg": "linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "__pycache__ 文件夹是干嘛的",
      "style": "color:#ffffff;font-weight:700;"
    },
    {
      "type": "subtitle",
      "content": "Python 自动生成的缓存目录，用来加快下次运行。",
      "style": "color:#c8c8d6;",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<h3 style=\"margin:0 0 10px;color:#ffffff;\">它存什么</h3><ul style=\"margin:0;padding-left:20px;line-height:1.8;color:#e8e8f0;\"><li>保存 <code style=\"color:#9ecbff;\">.py</code> 文件提前翻译好的字节码，常见是 <code style=\"color:#9ecbff;\">.pyc</code>。</li><li>下次运行时，如果源码没变，就不用重新翻译，启动和导入会更快。</li><li>源码变了，Python 会重新生成对应缓存。</li></ul>",
      "style": "background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<h3 style=\"margin:0 0 10px;color:#ffffff;\">能不能删</h3><ul style=\"margin:0;padding-left:20px;line-height:1.8;color:#e8e8f0;\"><li>可以删：删除 <code style=\"color:#9ecbff;\">__pycache__</code> 不影响 <code style=\"color:#9ecbff;\">.py</code> 源码。</li><li>删了之后：下次运行会重新翻译，可能短暂变慢。</li><li>之后运行：Python 发现需要时会自动重建它。</li></ul>",
      "style": "background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "wrapper",
      "content": "<strong style=\"color:#ffffff;\">注意：</strong><span style=\"color:#e8e8f0;\">不要把它当成源码维护，也不要手工改里面的 </span><code style=\"color:#9ecbff;\">.pyc</code><span style=\"color:#e8e8f0;\"> 文件；它只适合作为运行期缓存存在。</span>",
      "style": "background:rgba(255,190,120,0.12);border:1px solid rgba(255,190,120,0.28);border-radius:16px;padding:16px;backdrop-filter:blur(10px);",
      "scale": 1.5
    },
    {
      "type": "html",
      "content": "<p style=\"margin:0;color:#c8c8d6;\">相关：[[Python 字节码与 .pyc 文件]]</p>",
      "style": "",
      "scale": 1.1
    }
  ]
}