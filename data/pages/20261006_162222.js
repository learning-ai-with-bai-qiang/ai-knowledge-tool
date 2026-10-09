window.PAGE = {
  "title": "VSCode 双击文件互相覆盖解决",
  "summary": "关掉预览模式，小屋不再挤门",
  "category": "电脑问题",
  "tags": [
    "VSCode",
    "预览模式",
    "标签页",
    "编辑器设置"
  ],
  "bg": "linear-gradient(135deg, #8B5A2B 0%, #C17C5B 55%, #E8B07D 100%)",
  "elements": [
    {
      "type": "title",
      "content": "🏠 VSCode 标签页小屋",
      "style": "color:#FFF3E0;font-weight:800;text-shadow:0 2px 8px rgba(90,50,20,0.45);"
    },
    {
      "type": "subtitle",
      "content": "每个文件都有自己的小房间，不再互相挤占。",
      "style": "color:#FFE8CC;",
      "scale": 1.4
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#5D4037;'>🌲 小屋里的怪事</h3><ul style='margin:0;padding-left:20px;line-height:1.8;color:#6D4C41;'><li>打开一个文件，再双击新文件。</li><li>新客人没有自己的房间，反而把旧客人挤出小屋。</li><li>原因：「预览模式」让标签页共用一个临时小窝。</li></ul>",
      "style": "background:rgba(255,244,230,0.78);border:1px solid rgba(255,255,255,0.65);border-radius:20px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.4
    },
    {
      "type": "html",
      "content": "<h3 style='margin:0 0 10px;color:#5D4037;'>🔑 修复咒语三步走</h3><ol style='margin:0;padding-left:22px;line-height:1.8;color:#6D4C41;'><li>按 <code>Ctrl</code> + <code>,</code> 打开设置大门。</li><li>搜索「预览」，找到 <code>Workbench &gt; Editor: Enable Preview</code>。</li><li>取消勾选「启用预览模式」。</li><li>从此双击文件，每位客人都拥有固定独立小房间。</li></ol>",
      "style": "background:rgba(255,244,230,0.78);border:1px solid rgba(255,255,255,0.65);border-radius:20px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.4
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:19px;line-height:1.7;'><strong style='color:#D84315;'>✨ 小屋提示：</strong><span style='color:#E65100;font-weight:800;'>关闭后单击也会直接固定打开。</span><br><span style='color:#6D4C41;'>若只想留住某一间，双击标签页标题即可钉住它。</span></div>",
      "style": "background:rgba(255,236,179,0.85);border:2px solid rgba(216,67,21,0.35);border-radius:20px;padding:18px;backdrop-filter:blur(10px);",
      "scale": 1.3
    }
  ]
}