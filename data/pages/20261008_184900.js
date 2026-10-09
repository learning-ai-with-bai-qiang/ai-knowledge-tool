window.PAGE = {
  "title": "C++ 中文路径兼容性避坑",
  "summary": "路径只用英文数字下划线",
  "category": "AI编程",
  "tags": [
    "C++",
    "中文路径",
    "编码兼容"
  ],
  "bg": "linear-gradient(135deg, #023D22 0%, #1e1e2e 100%)",
  "elements": [
    {
      "type": "title",
      "content": "C++ 中文路径 / 中文文件夹兼容性",
      "style": ""
    },
    {
      "type": "subtitle",
      "content": "路径只用英文数字下划线",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9; color:#EAF7F0; font-size:15px;\"><p style=\"font-weight:700; font-size:17px; margin:0 0 10px;\">核心结论</p><p style=\"margin:0;\">老旧 C++ 编译器默认不兼容中文文件夹、中文路径，容易<b style=\"color:#FF6B6B;\">找不到文件、程序闪退、卡死</b>。新版编译器修改编码后勉强适配，但稳定性较差。</p><p style=\"font-weight:700; font-size:17px; margin:12px 0 10px;\">开发规范建议</p><p style=\"margin:0;\">路径、文件夹名称<b style=\"color:#7CFFCB;\">仅使用英文、数字、下划线</b>。</p></div>",
      "style": "",
      "scale": 1.4
    },
    {
      "type": "wrapper",
      "content": "<div style=\"font-size:23px; font-weight:800; color:#FF6B6B;\">避坑点</div><div style=\"font-size:20px; color:#FFD166; margin-top:8px; line-height:1.8;\">1. 根源：Windows 旧版编译器默认 <b style=\"color:#7CFFCB;\">GBK</b> 编码，fstream 读取 utf-8 中文路径会编码错乱。<br>2. 新版 MSVC 可用 <b style=\"color:#7CFFCB;\">/utf-8</b> 编译选项开启支持，但跨平台、跨环境依然容易出问题。<br>3. 问题本质是<b style=\"color:#FF6B6B;\">操作系统编码、编译器、标准库</b>三者匹配问题，规避最省事。<br>4. 打包分发给别人，对方电脑区域编码不一样，中文路径大概率翻车。</div>",
      "style": "",
      "scale": 1.2
    },
    {
      "type": "html",
      "content": "<div style=\"line-height:1.9; color:#EAF7F0; font-size:15px;\"><p style=\"font-weight:700; font-size:17px; margin:0;\">一句话总结</p><p style=\"margin:6px 0 0;\"><b style=\"color:#7CFFCB;\">能不用中文路径就坚决不用</b>，属于开发避坑最佳实践。</p></div>",
      "style": "",
      "scale": 2.5
    }
  ]
}