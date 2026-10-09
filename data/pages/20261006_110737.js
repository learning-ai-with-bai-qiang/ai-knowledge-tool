window.PAGE = {
  "title": "type() 语句是什么",
  "summary": "查看变量当前数据类型",
  "category": "AI编程",
  "tags": [
    "Python",
    "type()",
    "数据类型",
    "动态类型"
  ],
  "bg": "linear-gradient(135deg, #3D023B 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "type() 语句是什么",
      "style": "color:#FFD700;font-weight:800;text-shadow:0 0 10px rgba(255,215,0,0.25);"
    },
    {
      "type": "subtitle",
      "content": "把变量当盒子看，type() 看的是盒子里现在的数据。",
      "style": "color:#d8cfe6;",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>它怎么用</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f2ecf7;'><li><code>type()</code> 用来查看一个值当前是什么类型。</li><li>可以传变量：<code>type(x)</code>。</li><li>也可以直接传数据：<code>type(666)</code>、<code>type(&quot;Hello&quot;)</code>。</li></ul>",
      "style": "background:rgba(135,206,250,0.13);border:1px solid rgba(135,206,250,0.36);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>为什么会变</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f2ecf7;'><li>变量像盒子，盒子里装什么，<code>type()</code> 就看到什么。</li><li><code>x = 666</code> 时，<code>type(x)</code> 是 <code>int</code>。</li><li>改成 <code>x = &quot;Hello&quot;</code> 后，<code>type(x)</code> 就变成 <code>str</code>。</li></ul>",
      "style": "background:rgba(124,252,0,0.12);border:1px solid rgba(124,252,0,0.32);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:19px;line-height:1.7;'><strong style='color:#ffd166;'>注意：</strong><span style='color:#ff8fa3;font-weight:700;'>type() 看的是当前值，不是给变量定终身。</span><br><span style='color:#f2ecf7;'>Python 变量可重新赋值，类型结果会跟着当前数据变。</span></div>",
      "style": "background:rgba(255,209,102,0.13);border:1px solid rgba(255,209,102,0.38);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<p style='margin:0;color:#d8cfe6;'>相关：[[Python 变量与赋值]]</p>",
      "style": ""
    }
  ]
}