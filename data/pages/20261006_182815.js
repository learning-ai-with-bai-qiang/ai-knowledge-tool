window.PAGE = {
  "title": "低配电脑本地轻量NLP模型",
  "summary": "零付费纯本地，中文分类与微调",
  "category": "AI编程",
  "tags": [
    "本地NLP",
    "轻量模型",
    "中文文本分类"
  ],
  "bg": "linear-gradient(135deg, #4D341D 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "低配电脑本地轻量NLP模型",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "零付费纯本地，中文分类与微调",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9; color:#F5E9D8; font-size:15px;\"><p style=\"font-weight:700; font-size:17px; margin:0 0 10px;\">适合低配的两条主线</p><ul style=\"padding-left:20px; margin:0;\"><li><b style=\"color:#5ee7df;\">FastText</b>：线性文本分类工具，C++核心、CPU可跑，支持词/字n-gram；中文建议按词或按字训练，做工单、评论、标签分类最省资源。</li><li style=\"margin-top:6px;\"><b style=\"color:#ff8c42;\">uer/roberta-tiny-chinese</b>：轻量中文BERT类模型，参数量小，可做填空、句向量、情感/意图微调；比标准BERT省内存，低配CPU能推理。</li></ul><p style=\"margin:10px 0 0;\">两者都<b style=\"color:#FFD166;\">零付费、纯本地</b>，不调云API；分类选FastText，深一点语义/微调选Tiny RoBERTa。</p></div>",
      "style": "",
      "scale": 1.4
    },
    {
      "type": "char_cards",
      "colors": {
        "leftColor": "#5ee7df",
        "rightColor": "#ff8c42"
      },
      "content": {
        "left": {
          "emoji": "⚡",
          "title": "FastText",
          "tags": [
            "CPU极速",
            "中文分类"
          ],
          "desc": "线性n-gram分类，训练推理都快；错别字多可用字级n-gram，低配首选打标/分类"
        },
        "right": {
          "emoji": "🧠",
          "title": "roberta-tiny-chinese",
          "tags": [
            "轻量BERT",
            "可微调"
          ],
          "desc": "Tiny规格Transformer，懂上下文与句义；有标注可微调情感/意图，CPU能跑但比FastText重"
        }
      },
      "style": ""
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9; color:#F5E9D8; font-size:15px;\"><p style=\"font-weight:700; font-size:17px; margin:0 0 10px;\">极简落地</p><ul style=\"padding-left:20px; margin:0;\"><li>FastText：准备<b style=\"color:#FFD166;\">__label__类别 文本</b>格式语料，supervised训练，quantize压缩模型后本地load预测。</li><li style=\"margin-top:6px;\">Tiny RoBERTa：用transformers加载uer/roberta-tiny-chinese，pipeline做fill-mask或抽取句向量；有标签再接分类头微调。</li><li style=\"margin-top:6px;\">原则：能线性不Transformer，能Tiny不Base，纯CPU控制batch与序列长度。</li></ul></div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:22px; font-weight:800; color:#FF6B6B;\">低配避坑点</div><div style=\"font-size:18px; color:#FFD166; margin-top:8px; line-height:1.7;\">第一次从HuggingFace拉<b style=\"color:#5ee7df;\">roberta-tiny</b>需要网络，可提前缓存离线；<br>FastText中文直接按词跑依赖分词质量，噪声大改<b style=\"color:#5ee7df;\">字符级n-gram</b>；<br>长文本、强上下文再上Tiny BERT，别用大模型Base占满内存。</div>",
      "style": "",
      "scale": 1.2
    }
  ]
}