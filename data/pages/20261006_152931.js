window.PAGE = {
  "title": "print 里的引号、逗号和计算",
  "summary": "引号是文本，逗号负责拼接输出",
  "category": "AI编程",
  "tags": [
    "Python",
    "print",
    "运算符",
    "字符串"
  ],
  "bg": "linear-gradient(135deg, #1e1e2e 0%, #4D341D 100%)",
  "elements": [
    {
      "type": "title",
      "content": "print 里的引号、逗号和计算",
      "style": "color:#ffffff;font-weight:700;"
    },
    {
      "type": "subtitle",
      "content": "带引号只原样打印，逗号把提示和结果拼一起。",
      "style": "color:#e8dcc8;",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>关键认知：引号让内容变纯文本</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f4ecdf;'><li><code>'1 + 1 ='</code> 或 <code>&quot;1 + 1 =&quot;</code> 是字符串。</li><li>电脑不会计算字符串里的算式，只会原封不动打印。</li><li>想让 Python 计算，算式就不要放进引号里。</li></ul>",
      "style": "background:rgba(255,214,102,0.11);border:1px solid rgba(255,214,102,0.28);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>逗号的作用：拼接输出</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f4ecdf;'><li><code>print(&quot;1 + 1 =&quot;, 1 + 1)</code> 里，逗号把两段内容交给 print。</li><li>第一段是文字提示，第二段是真正参与计算的表达式。</li><li>输出时会拼成一行，默认中间加空格。</li></ul>",
      "style": "background:rgba(126,231,135,0.11);border:1px solid rgba(126,231,135,0.30);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>运行逻辑一步一步看</h3><ol style='margin:0;padding-left:22px;line-height:1.8;color:#f4ecdf;'><li>先原样打印文字：<code>1 + 1 =</code>。</li><li>再计算后面的算式：<code>1 + 1</code> 得到 <code>2</code>。</li><li>最后用逗号拼接输出：<code>1 + 1 = 2</code>。</li></ol>",
      "style": "background:rgba(126,231,255,0.11);border:1px solid rgba(126,231,255,0.28);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:19px;line-height:1.7;'><strong style='color:#ffd166;'>注意：</strong><span style='color:#ff8fa3;font-weight:700;'>把算式写进引号，结果就不会被计算。</span><br><span style='color:#f4ecdf;'>判断方法很简单：想展示文字就加引号，想得到结果就别加引号。</span></div>",
      "style": "background:rgba(255,143,163,0.13);border:1px solid rgba(255,209,102,0.38);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<p style='margin:0;color:#e8dcc8;'>相关：[[Python 字面量与注释]]</p>",
      "style": "",
      "scale": 1.1
    }
  ]
}