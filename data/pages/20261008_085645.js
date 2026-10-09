window.PAGE = {
  "title": "Fuse.js 不适合做文本查重",
  "summary": "Fuse.js是搜索框，rapidfuzz是查重系统",
  "category": "AI编程",
  "tags": [
    "Fuse.js",
    "rapidfuzz",
    "文本相似度",
    "查重"
  ],
  "bg": "linear-gradient(135deg, #4D341D 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "Fuse.js 不适合做文本查重",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "Fuse.js是搜索框，rapidfuzz是查重系统",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9; color:#F5E9D8; font-size:15px;'><p style='font-weight:700; font-size:17px; margin:0 0 10px;'>为什么 Fuse.js 干不了查重</p><ul style='padding-left:20px; margin:0;'><li><b style='color:#FF6B6B;'>读不到草稿</b>：用户在文案区写了一大段还没入库，Fuse.js 只能读 data/knowledge.js 和页面已有内容，看不见刚写的草稿。</li><li style='margin-top:6px;'><b style='color:#FF6B6B;'>不适合长文本比相似度</b>：它擅长关键词搜索（搜“虚拟”出结果），拿两段几百字的文章比相似度，算得很不准。</li></ul><p style='margin:12px 0 0; font-weight:700; font-size:17px;'>rapidfuzz 的 token_set_ratio 专做两段文本相似度</p><p style='margin:0;'>词序不同、重复词多都能算准，正是查重需要的。</p></div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:22px; font-weight:800; color:#FF6B6B;'>核心结论</div><div style='font-size:19px; color:#FFD166; margin-top:8px; line-height:1.7;'>查重本质是拿草稿去跟库里比，<b style='color:#7CFFCB;'>Fuse.js 干不了</b>。别硬套，换 rapidfuzz。</div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "char_cards",
      "style": "",
      "content": {
        "left": {
          "emoji": "🔍",
          "title": "Fuse.js",
          "tags": [
            "关键词搜索",
            "不适合长文本"
          ],
          "desc": "像百度搜索框，输入关键词给结果，不能算两段长文的相似度"
        },
        "right": {
          "emoji": "📋",
          "title": "rapidfuzz",
          "tags": [
            "文本相似度",
            "查重专用"
          ],
          "desc": "像论文查重系统，交一篇稿子告诉你跟已有文章有多像"
        }
      },
      "scale": 1.2
    }
  ]
}