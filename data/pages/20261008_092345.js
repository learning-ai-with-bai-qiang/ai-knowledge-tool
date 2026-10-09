window.PAGE = {
  "title": "中文文本别用 token_set_ratio",
  "summary": "中文匹配用 ratio 取最大",
  "category": "AI编程",
  "tags": [
    "fuzzywuzzy",
    "中文分词",
    "文本去重"
  ],
  "bg": "linear-gradient(135deg, #3C254D 0%, #4D341D 100%)",
  "elements": [
    {
      "type": "title",
      "content": "中文文本别用 token_set_ratio",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "空格分词算法不认中文",
      "style": ""
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9; color:#F5E9D8; font-size:15px;'><p style='font-weight:700; font-size:17px; margin:0 0 10px;'>问题根源</p><p style='margin:0 0 12px;'><b style='color:#FF6B6B;'>token_set_ratio</b> 靠 <b style='color:#FFD166;'>空格分词</b>给英文设计。中文没有空格，整段文字会被当成一个词，相似度自然算得特别低。</p><p style='font-weight:700; font-size:17px; margin:0 0 10px;'>改法</p><div style='background:rgba(255,255,255,0.08); padding:10px 12px; border-radius:8px; font-family:Consolas,monospace; font-size:13px; color:#FFD166;'>score = fuzz.token_set_ratio(user_text, target)</div><p style='margin:8px 0;'>&darr; 换成 &darr;</p><div style='background:rgba(255,255,255,0.08); padding:10px 12px; border-radius:8px; font-family:Consolas,monospace; font-size:13px; color:#7CFFCB;'>score = max(<br>&nbsp;&nbsp;fuzz.ratio(user_text, target),<br>&nbsp;&nbsp;fuzz.partial_ratio(user_text, target),<br>)</div></div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "char_cards",
      "content": {
        "left": {
          "emoji": "❌",
          "title": "token_set_ratio",
          "tags": [
            "空格分词",
            "英文专用"
          ],
          "desc": "中文无空格，整段当一个词，分数失真"
        },
        "right": {
          "emoji": "✅",
          "title": "ratio + partial_ratio",
          "tags": [
            "字符比对",
            "子串匹配"
          ],
          "desc": "按字对比，短话含在长文里也能高分"
        }
      },
      "style": "",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:22px; font-weight:800; color:#7CFFCB;'>为什么取最大</div><div style='font-size:18px; color:#FFD166; margin-top:8px; line-height:1.7;'><b style='color:#7CFFCB;'>fuzz.ratio</b> 按字符逐位比对，适合中文。<br><b style='color:#7CFFCB;'>partial_ratio</b> 做子串匹配，短句包含在长文里也算高分。<br>两个取 <b style='color:#FF6B6B;'>max</b>，保证不漏判。</div>",
      "style": "",
      "scale": 1.3
    }
  ]
}