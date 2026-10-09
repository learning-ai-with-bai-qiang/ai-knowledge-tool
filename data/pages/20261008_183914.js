window.PAGE = {
  "title": "Ctrl+C 中断 Python 程序",
  "summary": "一键发送键盘中断，优雅停程序",
  "category": "AI编程",
  "tags": [
    "Python",
    "终端",
    "KeyboardInterrupt",
    "调试"
  ],
  "bg": "linear-gradient(135deg, #023D22 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "Ctrl+C 中断 Python 程序",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "终端里按一下，手动停止正在跑的程序",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9;color:#EAF6EF;font-size:16px;\">在终端运行 Python 时，按 <b style=\"color:#FFD166;\">Ctrl + C</b> 会发送 <span style=\"font-family:monospace;color:#7BD5F5;\">KeyboardInterrupt</span> 键盘中断信号。<br><br>聊天机器人这类<b style=\"color:#A9E5BB;\">长循环程序</b>，不用关窗口，按这个快捷键就能停下来。</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FF6B6B;font-weight:700;\">避坑：1. 代码写了 try except KeyboardInterrupt 捕获异常时，程序不会直接退出，会先执行收尾逻辑；2. 程序正卡在底层 C 扩展、休眠、IO 阻塞时，可能不立刻响应；3. CMD / PowerShell / Linux / Mac 终端都支持，但 IDE 内置控制台里部分场景不一定生效。</div>",
      "style": "",
      "scale": 1.1
    },
    {
      "type": "char_cards",
      "colors": {
        "leftColor": "#f6d365",
        "rightColor": "#ff6b9d"
      },
      "content": {
        "left": {
          "emoji": "✋",
          "title": "Ctrl+C",
          "tags": [
            "发中断信号",
            "可捕获"
          ],
          "desc": "程序有机会收到 KeyboardInterrupt，能执行收尾逻辑（关文件、存进度）再退出，死得体面。"
        },
        "right": {
          "emoji": "💀",
          "title": "任务管理器结束进程",
          "tags": [
            "强制杀死",
            "无清理机会"
          ],
          "desc": "进程直接被干掉，任何清理代码都不会执行——文件没关、数据没存，只能认栽。"
        }
      },
      "style": "",
      "scale": 1.1
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FFD166;font-weight:700;\">一句话结论：想停程序先按 Ctrl+C（可捕获、能收尾）；实在没反应再动用任务管理器强杀。</div>",
      "style": "",
      "scale": 1.2
    }
  ]
}