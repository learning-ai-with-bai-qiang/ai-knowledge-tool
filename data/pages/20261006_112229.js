window.PAGE = {
  "title": "Python 数据类型转换",
  "summary": "数字与字符串互转规则",
  "category": "AI编程",
  "tags": [
    "Python",
    "类型转换",
    "int",
    "float",
    "str"
  ],
  "bg": "linear-gradient(135deg, #3C254D 0%, #4D341D 100%)",
  "elements": [
    {
      "type": "title",
      "content": "Python 数据类型转换",
      "style": "color:#ffffff;font-weight:700;"
    },
    {
      "type": "subtitle",
      "content": "数字和字符串能互转，但格式不对会报错。",
      "style": "color:#ddd3e6;",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>数字之间转换</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f3edf8;'><li>整数转浮点数：直接加上小数部分，例如 <code>float(6)</code> 得到 <code>6.0</code>。</li><li>浮点数转整数：会丢掉小数部分，例如 <code>int(3.9)</code> 得到 <code>3</code>。</li><li>这个丢失不是四舍五入，而是直接截断小数。</li></ul>",
      "style": "background:rgba(255,255,255,0.09);border:1px solid rgba(255,255,255,0.14);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>数字转字符串</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f3edf8;'><li>整数和浮点数都能用 <code>str()</code> 转成字符串。</li><li>例如 <code>str(666)</code> 得到 <code>'666'</code>。</li><li>例如 <code>str(3.14)</code> 得到 <code>'3.14'</code>。</li></ul>",
      "style": "background:rgba(255,214,102,0.11);border:1px solid rgba(255,214,102,0.28);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.4
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#ffffff;'>字符串转数字</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#f3edf8;'><li>字符串要由纯数字组成，才能转成 <code>int</code> 或 <code>float</code>。</li><li>纯整数样式：如 <code>'123'</code> 可转 <code>int('123')</code>，也可转 <code>float('123')</code>。</li><li>带小数点的纯数字：如 <code>'3.14'</code> 只能转 <code>float</code>，不能直接转 <code>int</code>。</li></ul>",
      "style": "background:rgba(126,231,135,0.11);border:1px solid rgba(126,231,135,0.28);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.5
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:19px;line-height:1.7;'><strong style='color:#ffd166;'>注意：</strong><span style='color:#ff8fa3;font-weight:700;'>字符串不是纯数字，或带小数点却硬转 int，会直接报错。</span><br><span style='color:#f3edf8;'>先确认内容格式，再决定用 int() 还是 float()。</span></div>",
      "style": "background:rgba(255,143,163,0.13);border:1px solid rgba(255,209,102,0.38);border-radius:16px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.1
    },
    {
      "type": "html",
      "content": "<p style='margin:0;color:#ddd3e6;'>相关：[[type() 语句是什么]]</p>",
      "style": ""
    }
  ]
}