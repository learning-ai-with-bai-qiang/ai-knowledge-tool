window.PAGE = {
  "title": "用状态机让机器人多轮对话不混乱",
  "summary": "划状态、定规则，对话才有记忆",
  "category": "AI编程",
  "tags": [
    "状态机",
    "聊天机器人",
    "多轮对话",
    "对话管理"
  ],
  "bg": "linear-gradient(135deg, #3C254D 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "用状态机让机器人多轮对话不混乱",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "划清工作状态，对话切换有章可循",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9;color:#F0ECF5;font-size:16px;\"><b style=\"color:#7BD5F5;\">什么是状态机？</b><br>给机器人划分若干<b style=\"color:#FFD166;\">工作状态</b>，再设定状态之间的<b style=\"color:#FFD166;\">切换规则</b>。机器人靠它记住“当前正在处理的任务”，多轮对话才能前后连贯，不会逻辑混乱。</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9;color:#F0ECF5;font-size:16px;\"><b style=\"color:#A9E5BB;\">两条铁律</b><br><br>1. <b>任意时刻，只处于其中一个状态</b>——不会既在“查订单”又在“改密码”<br>2. <b>满足触发条件，才切换到下一个状态</b>——条件不满足，就留在原地继续处理当前任务</div>",
      "style": "",
      "scale": 1.3
    },
    {
      "type": "dialog_scene",
      "colors": {
        "leftColor": "#4facfe",
        "rightColor": "#ff9a56"
      },
      "content": [
        {
          "side": "left",
          "name": "用户",
          "emoji": "🙋",
          "text": "我要订明天去上海的高铁（进入“订票”状态）"
        },
        {
          "side": "right",
          "name": "机器人",
          "emoji": "🤖",
          "text": "好的，明天出发，几位乘客？（留在订票状态，追问缺失信息）"
        },
        {
          "side": "left",
          "name": "用户",
          "emoji": "🙋",
          "text": "顺便问下怎么开发票？"
        },
        {
          "side": "right",
          "name": "机器人",
          "emoji": "🤖",
          "text": "先答完订票：几位乘客？（触发条件不满足，不乱切状态，但可记住新问题）"
        }
      ],
      "style": "",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:20px;line-height:1.9;color:#FFD166;font-weight:700;\">一句话结论：状态机 = 状态清单 + 切换规则。机器人永远只待在一个状态里，条件到了才换，多轮对话自然不跑偏。</div>",
      "style": "",
      "scale": 1.1
    }
  ]
}