window.PAGE = {
  "title": "PowerShell 极简上手 + 实操",
  "summary": "地址栏输入 powershell 秒开终端",
  "category": "电脑问题",
  "tags": [
    "PowerShell",
    "命令行",
    "Windows"
  ],
  "bg": "linear-gradient(135deg, #4D341D 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "PowerShell 极简上手 + 实操",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "Windows 自带终端，打开就能用，先会这三条指令",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9;color:#F7EFE6;font-size:16px;'><b style='color:#7BD5F5;'>最快打开方式</b><br>进入目标文件夹 → 点击顶部<b>地址栏</b> → 输入 <span style='color:#FFD166;font-family:monospace;'>powershell</span> 回车，终端就开在<b style='color:#A9E5BB;'>当前文件夹路径</b>，省去手动 cd 的麻烦。</div>",
      "style": "",
      "scale": 1.5
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9;color:#F7EFE6;font-size:16px;'><b style='color:#7BD5F5;'>三条基础指令（都是原生命令的别名，好记）</b><br><br>· <span style='color:#FFD166;font-family:monospace;'>pwd</span> → 查看当前所在目录（Get-Location）<br>· <span style='color:#FFD166;font-family:monospace;'>dir</span> → 列出当前文件夹全部文件和子文件夹（Get-ChildItem）<br>· <span style='color:#FFD166;font-family:monospace;'>cd \"路径\"</span> → 切换工作目录（Set-Location）</div>",
      "style": "",
      "scale": 1.7
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:20px;line-height:1.9;color:#FF6B6B;font-weight:700;'>避坑：跨盘符时 cd 不会自动切盘！直接 cd \"C:\\Users\" 人还在原来的盘。必须先输入盘符（如 C:）回车，再 cd 进目标目录。</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<div style='line-height:1.9;color:#F7EFE6;font-size:16px;'><b style='color:#A9E5BB;'>实操演练（跟着做一遍就熟了）</b><br><br>1️⃣ D 盘新建 <span style='font-family:monospace;color:#FFD166;'>testcode</span> → 地址栏输入 powershell 启动，当前路径应为 <span style='font-family:monospace;color:#FFD166;'>D:\\testcode</span><br>2️⃣ 输入 <span style='font-family:monospace;color:#FFD166;'>pwd</span> 回车，确认输出路径正确<br>3️⃣ 输入 <span style='font-family:monospace;color:#FFD166;'>dir</span> 回车，查看目录内容<br>4️⃣ 新建子文件夹 <span style='font-family:monospace;color:#FFD166;'>demo</span> → <span style='font-family:monospace;color:#FFD166;'>cd \"demo\"</span> → 再 pwd，路径变成 <span style='font-family:monospace;color:#FFD166;'>D:\\testcode\\demo</span>（同盘切换，没问题）<br>5️⃣ 跨盘切换：先 <span style='font-family:monospace;color:#FFD166;'>C:</span> 回车切盘符，再 <span style='font-family:monospace;color:#FFD166;'>cd \"C:\\Users\"</span>，最后 pwd 确认位置</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "dialog_scene",
      "content": [
        {
          "side": "left",
          "name": "小白",
          "emoji": "🙋",
          "text": "我在 D 盘，直接 cd \"C:\\Users\" 怎么没反应？pwd 一看还在 D 盘……"
        },
        {
          "side": "right",
          "name": "老手",
          "emoji": "🧑‍💻",
          "text": "cd 只管目录不管盘符。先输 C: 回车把盘切过去，再 cd 进目录，顺序不能反。"
        }
      ],
      "style": "",
      "scale": 1.1
    },
    {
      "type": "wrapper",
      "content": "<div style='font-size:20px;line-height:1.9;color:#FFD166;font-weight:700;'>记住一句话：同盘直接 cd，跨盘先输盘符。终端打开用地址栏，定位一步到位。</div>",
      "style": "",
      "scale": 1.2
    }
  ]
}