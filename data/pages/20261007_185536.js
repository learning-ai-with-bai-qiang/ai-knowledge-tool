window.PAGE = {
  "title": "input 存草稿还是定时器存",
  "summary": "看页面跳不跳，选对存法",
  "category": "AI编程",
  "tags": [
    "input事件",
    "setInterval",
    "整页跳转",
    "中文输入法"
  ],
  "bg": "linear-gradient(135deg, #3D023B 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "草稿该用 input 还是定时器存？",
      "style": "",
      "scale": 1
    },
    {
      "type": "subtitle",
      "content": "关键看页面会不会整页跳转",
      "style": "",
      "scale": 1.6
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9; color:#F6E9FA; font-size:15px;'><p style='font-weight:700; font-size:17px; margin:0 0 10px;'>MG 工具：<b style='color:#7CFFCB;'>input 事件，打一个字存一次</b></p><div style='background:rgba(255,255,255,0.08); padding:10px 12px; border-radius:8px; font-family:Consolas,monospace; font-size:13px; color:#FFD166;'>document.getElementById(&quot;script-input&quot;).addEventListener(&quot;input&quot;, (e) =&gt; {<br>&nbsp;&nbsp;window.pywebview.api.save_script(shotId, e.target.value);<br>});</div><p style='margin:8px 0 0;'>为什么没问题？因为 <b style='color:#FFD166;'>MG 工具不会整页跳走</b>：切分镜只是刷新右侧文案区，点预览是弹新窗口，主窗口不动。文案框内容一直「活着」，只有真正修改时才需要存。</p></div>",
      "style": "",
      "scale": 1.6
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9; color:#F6E9FA; font-size:15px;'><p style='font-weight:700; font-size:17px; margin:0 0 10px;'>知识库工具：<b style='color:#7CFFCB;'>setInterval 每秒存一次</b></p><div style='background:rgba(255,255,255,0.08); padding:10px 12px; border-radius:8px; font-family:Consolas,monospace; font-size:13px; color:#FFD166;'>location.href = &quot;knowledge_engine.html?id=xxx&quot;;</div><p style='margin:8px 0 0;'>它是 <b style='color:#FF6B6B;'>整页跳转</b>：老页面被销毁，新页面重新加载。而中文输入法在「正在打拼音但还没上屏」那一段，<b style='color:#FFD166;'>input 会带着空值触发一次</b>，直接把之前的草稿冲掉。改成 <b style='color:#7CFFCB;'>setInterval 每秒存一次</b>，就绕开了这个坑。</p></div>",
      "style": "",
      "scale": 1.4
    },
    {
      "type": "char_cards",
      "content": {
        "left": {
          "emoji": "⌨️",
          "title": "MG 工具",
          "tags": [
            "input 事件",
            "不跳转"
          ],
          "desc": "页面不销毁，敲一下存一次，实时且精准"
        },
        "right": {
          "emoji": "⏱️",
          "title": "知识库工具",
          "tags": [
            "setInterval",
            "整页跳"
          ],
          "desc": "页面会销毁，每秒定时存，避开输入法空值"
        }
      },
      "style": "",
      "scale": 1.1
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:22px; font-weight:800; color:#FF6B6B;'>别照抄</div><div style='font-size:19px; color:#FFD166; margin-top:8px; line-height:1.7;'>两个写法<b>都对</b>，只是场景不同。<br>先问一句「这个页面会整页跳转吗」，再决定用 <span style='color:#7CFFCB;'>input</span> 还是 <span style='color:#7CFFCB;'>setInterval</span>。</div>",
      "style": "",
      "scale": 1.2
    }
  ]
}