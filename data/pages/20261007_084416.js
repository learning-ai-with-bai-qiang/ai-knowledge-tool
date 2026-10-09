window.PAGE = {
  "title": "Python 运算符速查",
  "summary": "加减乘除取模幂，一次讲清",
  "category": "AI编程",
  "tags": [
    "Python",
    "运算符",
    "基础语法"
  ],
  "bg": "linear-gradient(135deg, #1e1e2e 0%, #2a2a40 100%)",
  "elements": [
    {
      "type": "title",
      "content": "Python 运算符",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "subtitle",
      "content": "7 个核心运算符，一篇讲透用法和坑",
      "style": "",
      "scale": 1.1
    },
    {
      "type": "html",
      "content": "<h3 style='color:#fff;font-weight:bold;margin-bottom:12px;'>基本四则运算</h3><ul style='color:#d0d0e0;line-height:1.9;font-size:15px;padding-left:20px;'><li><b style='color:#7eb8ff;'>+</b> 加号 — 求和，如 <code style='color:#a8e6a1;'>3 + 2</code> 得 5</li><li><b style='color:#7eb8ff;'>-</b> 减号 — 求差，如 <code style='color:#a8e6a1;'>5 - 2</code> 得 3</li><li><b style='color:#7eb8ff;'>*</b> 星号 — 求积，如 <code style='color:#a8e6a1;'>3 * 4</code> 得 12</li></ul>",
      "style": "",
      "scale": 1.5
    },
    {
      "type": "char_cards",
      "content": {
        "left": {
          "emoji": "🔢",
          "title": "/ 真除法",
          "tags": [
            "结果永远 float"
          ],
          "desc": "不管能不能整除，结果都带小数点。10 / 2 得 5.0，不是 5"
        },
        "right": {
          "emoji": "📉",
          "title": "// 地板除",
          "tags": [
            "取商的整数部分"
          ],
          "desc": "10 // 3 得 3。注意负数会向下取整，-10 // 3 得 -4，不是 -3"
        }
      }
    },
    {
      "type": "html",
      "content": "<h3 style='color:#fff;font-weight:bold;margin-bottom:12px;'>取模与幂运算</h3><ul style='color:#d0d0e0;line-height:1.9;font-size:15px;padding-left:20px;'><li><b style='color:#7eb8ff;'>%</b> 百分号 — 取模求余数，<code style='color:#a8e6a1;'>10 % 3</code> 得 1，<code style='color:#a8e6a1;'>10 % 5</code> 得 0</li><li><b style='color:#7eb8ff;'>**</b> 双星号 — 幂运算，<code style='color:#a8e6a1;'>2 ** 3</code> 得 8，<code style='color:#a8e6a1;'>3 ** 2</code> 得 9</li></ul>",
      "style": "",
      "scale": 1.5
    },
    {
      "type": "wrapper",
      "content": "<p style='color:#ffb347;font-size:18px;font-weight:bold;line-height:1.8;margin:0;'>⚠️ 地板除 // 遇到负数时会向下取整（往更小的方向），不是简单砍掉小数部分。<br><span style='color:#ffd699;font-size:16px;'>-10 // 3 的结果是 -4，而不是 -3</span></p>",
      "style": "",
      "scale": 1.3
    }
  ]
}