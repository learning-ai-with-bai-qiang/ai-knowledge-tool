window.KNOWLEDGE = [
  {
    "id": "20261006_094613",
    "title": "__pycache__ 文件夹是干嘛的",
    "summary": "Python 缓存目录，删了会自动重建",
    "category": "AI编程",
    "tags": [
      "Python",
      "__pycache__",
      "缓存"
    ],
    "file": "pages/20261006_094613.js",
    "created": "2026-10-06",
    "pinned": true,
    "body": "__pycache__ 文件夹是干嘛的 Python 自动生成的缓存目录，用来加快下次运行。 它存什么 保存 .py 文件提前翻译好的字节码，常见是 .pyc 。 下次运行时，如果源码没变，就不用重新翻译，启动和导入会更快。 源码变了，Python 会重新生成对应缓存。 能不能删 可以删：删除 __pycache__ 不影响 .py 源码。 删了之后：下次运行会重新翻译，可能短暂变慢。 之后运行：Python 发现需要时会自动重建它。 注意： 不要把它当成源码维护，也不要手工改里面的 .pyc 文件；它只适合作为运行期缓存存在。 相关：[[Python 字节码与 .pyc 文件]]"
  },
  {
    "id": "20261006_101031",
    "title": "exFAT 文件系统有什么限制",
    "summary": "兼容性好，但单个文件不能超 4GB",
    "category": "电脑问题",
    "tags": [
      "exFAT",
      "U盘",
      "文件系统",
      "备份失败"
    ],
    "file": "pages/20261006_101031.js",
    "created": "2026-10-06",
    "pinned": true,
    "body": "exFAT 文件系统有什么限制 适合 U 盘和移动硬盘跨设备使用，但不适合放大文件。 它的特点 常见于 U 盘、移动硬盘、存储卡。 Windows 和 macOS 兼容性较好，适合来回拷贝文件。 没有传统 FAT32 那样更严格的分区容量限制，日常跨系统使用更省心。 关键限制 不支持保存大于 4GB 的单个文件。 系统备份、虚拟机镜像、大型安装包、高清视频素材可能超过这个大小。 写入这类大文件时，可能直接失败，或提示空间不足、文件过大。 注意： 做系统备份或生成大镜像前，不要把目标盘格式化成 exFAT。 否则备份可能写到一半失败，白白浪费时间。 相关：[[移动硬盘该选 NTFS 还是 exFAT]]",
    "favorite": false
  },
  {
    "id": "20261006_103922",
    "title": "if 条件判断语句",
    "summary": "三种分支结构的使用场景",
    "category": "AI编程",
    "tags": [
      "条件语句",
      "Python",
      "分支结构"
    ],
    "file": "pages/20261006_103922.js",
    "created": "2026-10-06",
    "pinned": true,
    "body": "if 条件判断语句 三种分支结构的使用场景 单独 if 只判断单一条件，符合就执行，不符合就啥也不做。 if else 固定两种情况：满足条件就做一件事，不满足就做另一件，二选一。 if + elif + else 处理很多种情况，挨个条件匹配，对上哪个执行哪个，最后兜底处理剩下全部情况。 选择哪种结构，取决于你需要处理多少种情况。单条件用 if，二选一用 if else，多条件用 if elif else。 相关：[[Python 基础语法]]"
  },
  {
    "id": "20261006_104912",
    "title": "Python 字面量与注释",
    "summary": "先认识固定数据，再学会写注释",
    "category": "AI编程",
    "tags": [
      "Python",
      "字面量",
      "注释",
      "基础语法"
    ],
    "file": "pages/20261006_104912.js",
    "created": "2026-10-06",
    "pinned": true,
    "body": "Python 字面量与注释 字面量是写死的固定数据，注释是给人看的说明。 什么是字面量 字面量就是代码里直接书写的固定数据。 例如数字 666 ，字符串 &quot;Hello&quot; 。 它可以赋值给变量，也可以直接在表达式中使用。 常见字面量类型 整数：如 10 、 -3 。 浮点数：如 3.14 、 -0.5 。 布尔值：只有 True 和 False 。 字符串：如 &quot;Hello&quot; 、 'Python' 。 列表：如 [1, 2, 3] 。 元组：如 (1, 2, 3) 。 单行注释 使用井号 # 开头。 # 后面的内容会被解释器忽略。 常用于解释一行代码的作用。 多行注释 用三对单引号 ''' 或三对双引号 &quot;&quot;&quot; 包裹内容。 适合写长段说明、函数介绍、临时记录。 注意：三引号本质也是字符串，单独放在那里时才常被当注释使用。 注意： 输入 # 必须切到英文输入法。 中文井号或全角符号可能让语法直接报错。 相关：[[Python 变量与赋值]]"
  },
  {
    "id": "20261006_110737",
    "title": "type() 语句是什么",
    "summary": "查看变量当前数据类型",
    "category": "AI编程",
    "tags": [
      "Python",
      "type()",
      "数据类型",
      "动态类型"
    ],
    "file": "pages/20261006_110737.js",
    "created": "2026-10-06",
    "pinned": false,
    "body": "type() 语句是什么 把变量当盒子看，type() 看的是盒子里现在的数据。 它怎么用 type() 用来查看一个值当前是什么类型。 可以传变量： type(x) 。 也可以直接传数据： type(666) 、 type(&quot;Hello&quot;) 。 为什么会变 变量像盒子，盒子里装什么， type() 就看到什么。 x = 666 时， type(x) 是 int 。 改成 x = &quot;Hello&quot; 后， type(x) 就变成 str 。 注意： type() 看的是当前值，不是给变量定终身。 Python 变量可重新赋值，类型结果会跟着当前数据变。 相关：[[Python 变量与赋值]]"
  },
  {
    "id": "20261006_112229",
    "title": "Python 数据类型转换",
    "summary": "数字与字符串互转规则",
    "category": "AI编程",
    "tags": [
      "Python",
      "类型转换",
      "int",
      "float",
      "str"
    ],
    "file": "pages/20261006_112229.js",
    "created": "2026-10-06",
    "pinned": false,
    "body": "Python 数据类型转换 数字和字符串能互转，但格式不对会报错。 数字之间转换 整数转浮点数：直接加上小数部分，例如 float(6) 得到 6.0 。 浮点数转整数：会丢掉小数部分，例如 int(3.9) 得到 3 。 这个丢失不是四舍五入，而是直接截断小数。 数字转字符串 整数和浮点数都能用 str() 转成字符串。 例如 str(666) 得到 '666' 。 例如 str(3.14) 得到 '3.14' 。 字符串转数字 字符串要由纯数字组成，才能转成 int 或 float 。 纯整数样式：如 '123' 可转 int('123') ，也可转 float('123') 。 带小数点的纯数字：如 '3.14' 只能转 float ，不能直接转 int 。 注意： 字符串不是纯数字，或带小数点却硬转 int，会直接报错。 先确认内容格式，再决定用 int() 还是 float()。 相关：[[type() 语句是什么]]"
  },
  {
    "id": "20261006_152353",
    "title": "网页和界面快速缩放快捷键",
    "summary": "Win 加减号快速放大缩小",
    "category": "电脑问题",
    "tags": [
      "Windows",
      "快捷键",
      "屏幕缩放",
      "网页"
    ],
    "file": "pages/20261006_152353.js",
    "created": "2026-10-06",
    "pinned": true,
    "body": "网页和界面快速缩放快捷键 在支持的窗口里，用 Win 加减号临时缩放。 什么时候有用 网页字太小：想临时放大看清楚。 TXT 文本界面：部分编辑器或查看器可跟随缩放。 部分软件屏幕界面：支持系统缩放快捷键的窗口里可用。 按键方法 放大：按 Win + + 。 缩小：按 Win + - 。 退出缩放视图：一般按 Esc 。 注意： 它不是所有软件都生效。 若某个窗口没反应，去该软件设置里找缩放；想改整体大小，应调显示器缩放。 相关：[[Windows 显示器缩放设置]]"
  },
  {
    "id": "20261006_152931",
    "title": "print 里的引号、逗号和计算",
    "summary": "引号是文本，逗号负责拼接输出",
    "category": "AI编程",
    "tags": [
      "Python",
      "print",
      "运算符",
      "字符串"
    ],
    "file": "pages/20261006_152931.js",
    "created": "2026-10-06",
    "body": "print 里的引号、逗号和计算 带引号只原样打印，逗号把提示和结果拼一起。 关键认知：引号让内容变纯文本 '1 + 1 =' 或 &quot;1 + 1 =&quot; 是字符串。 电脑不会计算字符串里的算式，只会原封不动打印。 想让 Python 计算，算式就不要放进引号里。 逗号的作用：拼接输出 print(&quot;1 + 1 =&quot;, 1 + 1) 里，逗号把两段内容交给 print。 第一段是文字提示，第二段是真正参与计算的表达式。 输出时会拼成一行，默认中间加空格。 运行逻辑一步一步看 先原样打印文字： 1 + 1 = 。 再计算后面的算式： 1 + 1 得到 2 。 最后用逗号拼接输出： 1 + 1 = 2 。 注意： 把算式写进引号，结果就不会被计算。 判断方法很简单：想展示文字就加引号，想得到结果就别加引号。 相关：[[Python 字面量与注释]]"
  },
  {
    "id": "20261006_160025",
    "title": "Python 标识符命名规则",
    "summary": "起名只能用字母数字下划线",
    "category": "AI编程",
    "tags": [
      "Python",
      "标识符",
      "命名规范",
      "保留字"
    ],
    "file": "pages/20261006_160025.js",
    "created": "2026-10-06",
    "pinned": false,
    "body": "Python 标识符命名规则 给变量、函数、文件起名的基本规范。 什么是标识符 标识符就是给变量、函数、文件等起的名字。 Python 通过这个名字来找到并使用对应的对象。 起一个好名字，代码更容易读懂和维护。 命名规则 只能使用字母（a-z, A-Z）、数字（0-9）和下划线（_）。 不能以数字开头，例如 2name 是非法的。 不能使用系统保留字，例如 if 、 for 、 class 、 def 等。 注意： 保留字被占用会导致语法报错。 建议用有意义的英文单词，避免拼音或纯数字，方便自己和他人阅读。 相关：[[Python 变量与赋值]]"
  },
  {
    "id": "20261006_162222",
    "title": "VSCode 双击文件互相覆盖解决",
    "summary": "关掉预览模式，小屋不再挤门",
    "category": "电脑问题",
    "tags": [
      "VSCode",
      "预览模式",
      "标签页",
      "编辑器设置"
    ],
    "file": "pages/20261006_162222.js",
    "created": "2026-10-06",
    "pinned": true,
    "body": "🏠 VSCode 标签页小屋 每个文件都有自己的小房间，不再互相挤占。 🌲 小屋里的怪事 打开一个文件，再双击新文件。 新客人没有自己的房间，反而把旧客人挤出小屋。 原因：「预览模式」让标签页共用一个临时小窝。 🔑 修复咒语三步走 按 Ctrl + , 打开设置大门。 搜索「预览」，找到 Workbench &gt; Editor: Enable Preview 。 取消勾选「启用预览模式」。 从此双击文件，每位客人都拥有固定独立小房间。 ✨ 小屋提示： 关闭后单击也会直接固定打开。 若只想留住某一间，双击标签页标题即可钉住它。"
  },
  {
    "id": "20261006_181928",
    "title": "什么是轻量 NLP 模型",
    "summary": "低配置设备上的迷你语言模型",
    "category": "AI编程",
    "tags": [
      "NLP",
      "轻量模型",
      "本地部署",
      "意图识别"
    ],
    "file": "pages/20261006_181928.js",
    "created": "2026-10-06",
    "body": "💎 什么是轻量 NLP 模型 专为低配置设备设计的迷你自然语言处理模型。 🔷 它是什么 体积小巧，专为低配置设备设计。 纯本地部署，数据不用上传云端。 无需联网，断网环境也能工作。 资源占用低，普通电脑或嵌入式设备就能跑。 ❇️ 能做什么 意图识别：判断用户这句话想干什么。 文本分类：把句子归到预设的类别里。 对话相关功能：关键词匹配、槽位提取、简单问答路由等。 ✨ 宝石提示： 轻量是拿能力换速度。 它擅长意图识别和文本分类，但不要指望它做开放式长文理解或复杂推理；高难度任务还是交给大模型。"
  },
  {
    "id": "20261007_084416",
    "title": "Python 运算符速查",
    "summary": "加减乘除取模幂，一次讲清",
    "category": "AI编程",
    "tags": [
      "Python",
      "运算符",
      "基础语法"
    ],
    "file": "pages/20261007_084416.js",
    "created": "2026-10-07",
    "pinned": true,
    "body": "Python 运算符 7 个核心运算符，一篇讲透用法和坑 基本四则运算 + 加号 — 求和，如 3 + 2 得 5 - 减号 — 求差，如 5 - 2 得 3 * 星号 — 求积，如 3 * 4 得 12 / 真除法 不管能不能整除，结果都带小数点。10 / 2 得 5.0，不是 5 结果永远 float // 地板除 10 // 3 得 3。注意负数会向下取整，-10 // 3 得 -4，不是 -3 取商的整数部分 取模与幂运算 % 百分号 — 取模求余数， 10 % 3 得 1， 10 % 5 得 0 ** 双星号 — 幂运算， 2 ** 3 得 8， 3 ** 2 得 9 ⚠️ 地板除 // 遇到负数时会向下取整（往更小的方向），不是简单砍掉小数部分。 -10 // 3 的结果是 -4，而不是 -3"
  },
  {
    "id": "20261007_090309",
    "title": "VSCode 中文标点转英文",
    "summary": "查找替换批量改标点",
    "category": "电脑问题",
    "tags": [
      "VSCode",
      "查找替换",
      "效率技巧"
    ],
    "file": "pages/20261007_090309.js",
    "created": "2026-10-07",
    "body": "VSCode 中文标点一键批量转换 Ctrl+H 查找替换，一次搞定一类标点 操作步骤 按 Ctrl + H 打开查找替换面板 查找框填 中文标点 （如 ，），替换框填 英文标点 （如 ,） 关闭正则匹配 按钮，大小写选项不用管 按 Ctrl + Alt + Enter 替换全部，整篇一次性替换 ⚠️ 一次只能处理一类标点 多种标点要分多次操作，每次替换一种符号 进阶：一次替换多种标点 开启 正则表达式 ，查找框写字符集： ([，。：；\"\"'']) 再单独写替换规则即可。 ⚠️ 正则写法新手容易出错 简单需求优先一组一组替换，更稳妥",
    "pinned": true
  },
  {
    "id": "20261007_102905",
    "title": "一键调整鼠标指针外观",
    "summary": "Win+U 直达，颜色大小一次搞定",
    "category": "电脑问题",
    "tags": [
      "Windows",
      "鼠标指针",
      "效率快捷键"
    ],
    "file": "pages/20261007_102905.js",
    "created": "2026-10-07",
    "body": "一键调整鼠标指针外观 Win+U 直达，颜色大小一次搞定 操作步骤 按 Win + U 打开「辅助功能」面板 左侧点击 鼠标指针 选项 颜色：选预设色，或用调色板自定义任意颜色 大小：拖动滑块，自由放大或缩小指针 颜色与尺寸同页完成，不用分两个入口。 别绕远路 旧版控制面板要进多层菜单，且颜色、大小分两处设置。认准 Win+U，一步到位。"
  },
  {
    "id": "20261007_113247",
    "title": "汽车站买票英语对话",
    "summary": "单程、往返、行李怎么说",
    "category": "英语学习",
    "tags": [
      "情景对话",
      "出行",
      "可数与不可数"
    ],
    "file": "pages/20261007_113247.js",
    "created": "2026-10-07",
    "body": "汽车站买票英语对话 单程、往返、行李怎么说 售票员 Where are you going? 你 I need a one-way ticket to Miami. 售票员 When would you like to leave? 你 As soon as possible. Can I take this bus? 售票员 That's 45 dollars. Do you have any luggage? 你 Yes, one piece of luggage. 售票员 Here is your ticket. The bus leaves at Gate 3. 你 Thank you. 逐句对照 Where are you going? 你要去哪里？——售票员开场常用句 I need a one-way ticket to Miami. 我要一张去迈阿密的单程票 When would you like to leave? 你想什么时候出发？比 When do you… 更客气 As soon as possible. 越快越好 Can I take this bus? 我可以坐这一班吗？ That's 45 dollars. 一共 45 美元 The bus leaves at Gate 3. 大巴在 3 号检票口发车 one-way one-way ticket 单程票，只去不回 单程 形容词 round-trip round-trip ticket 往返票，去程+回程 往返 形容词 luggage 不可数 行李 luggage 是不可数名词，不能说 a luggage。 要说 one piece of luggage （一件行李）、two pieces of luggage（两件）。"
  },
  {
    "id": "20261007_155324",
    "title": "Python批量卸载防卡死",
    "summary": "别逐个卸，一次勾选多项",
    "category": "电脑问题",
    "tags": [
      "Windows",
      "Python卸载",
      "批量操作"
    ],
    "file": "pages/20261007_155324.js",
    "created": "2026-10-07",
    "body": "Python批量卸载防卡死 别逐个卸，一次勾选多项 操作路径 打开 Windows 设置 → 应用 → 已安装的应用 搜索 Python ，列出所有相关组件 一次性 勾选至少两项 Python 相关组件 点击卸载，批量处理，等进度走完再操作下一步 核心思路：用系统级批量卸载代替单点逐个卸载。 坑点提醒 短时间连续 逐个卸载 Python 组件，卸载界面极易卡死！ 务必 一次勾选 ≥2 项 批量卸载，别手快一个点一个。"
  },
  {
    "id": "20261007_160015",
    "title": "Win10 停更后装火绒",
    "summary": "安全补丁没了，用火绒补上",
    "category": "电脑问题",
    "tags": [
      "Win10",
      "火绒",
      "安全防护"
    ],
    "file": "pages/20261007_160015.js",
    "created": "2026-10-07",
    "body": "Win10 安全补丁替代方案 系统停更缺补丁，装个火绒来兜底 背景 Win10 已停止主流支持， 官方安全补丁不再更新 ，系统漏洞暴露风险增加。 解决办法 下载安装 火绒安全 （官网下载，免费无广告） 开启 病毒查杀 和 主动防御 定期更新火绒的 病毒库 ，保持最新 ⚠️ 火绒只是弥补，不是万能 重要数据还是要自己备份，别全靠安全软件"
  },
  {
    "id": "20261007_185536",
    "title": "input 存草稿还是定时器存",
    "summary": "看页面跳不跳，选对存法",
    "category": "AI编程",
    "tags": [
      "input事件",
      "setInterval",
      "整页跳转",
      "中文输入法"
    ],
    "file": "pages/20261007_185536.js",
    "created": "2026-10-07",
    "body": "草稿该用 input 还是定时器存？ 关键看页面会不会整页跳转 MG 工具： input 事件，打一个字存一次 document.getElementById(&quot;script-input&quot;).addEventListener(&quot;input&quot;, (e) =&gt; { window.pywebview.api.save_script(shotId, e.target.value); }); 为什么没问题？因为 MG 工具不会整页跳走 ：切分镜只是刷新右侧文案区，点预览是弹新窗口，主窗口不动。文案框内容一直「活着」，只有真正修改时才需要存。 知识库工具： setInterval 每秒存一次 location.href = &quot;knowledge_engine.html?id=xxx&quot;; 它是 整页跳转 ：老页面被销毁，新页面重新加载。而中文输入法在「正在打拼音但还没上屏」那一段， input 会带着空值触发一次 ，直接把之前的草稿冲掉。改成 setInterval 每秒存一次 ，就绕开了这个坑。 MG 工具 页面不销毁，敲一下存一次，实时且精准 input 事件 不跳转 知识库工具 页面会销毁，每秒定时存，避开输入法空值 setInterval 整页跳 别照抄 两个写法 都对 ，只是场景不同。 先问一句「这个页面会整页跳转吗」，再决定用 input 还是 setInterval 。"
  },
  {
    "id": "20261008_092345",
    "title": "中文文本别用 token_set_ratio",
    "summary": "中文匹配用 ratio 取最大",
    "category": "AI知识库工具",
    "tags": [
      "fuzzywuzzy",
      "中文分词",
      "文本去重"
    ],
    "file": "pages/20261008_092345.js",
    "created": "2026-10-08",
    "body": "中文文本别用 token_set_ratio 空格分词算法不认中文 问题根源 token_set_ratio 靠 空格分词 给英文设计。中文没有空格，整段文字会被当成一个词，相似度自然算得特别低。 改法 score = fuzz.token_set_ratio(user_text, target) &darr; 换成 &darr; score = max( fuzz.ratio(user_text, target), fuzz.partial_ratio(user_text, target), ) token_set_ratio 中文无空格，整段当一个词，分数失真 空格分词 英文专用 ratio + partial_ratio 按字对比，短话含在长文里也能高分 字符比对 子串匹配 为什么取最大 fuzz.ratio 按字符逐位比对，适合中文。 partial_ratio 做子串匹配，短句包含在长文里也算高分。 两个取 max ，保证不漏判。",
    "pinned": true,
    "favorite": true
  },
  {
    "id": "20261008_105855",
    "title": "PowerShell 极简上手 + 实操",
    "summary": "地址栏输入 powershell 秒开终端",
    "category": "电脑问题",
    "tags": [
      "PowerShell",
      "命令行",
      "Windows"
    ],
    "file": "pages/20261008_105855.js",
    "created": "2026-10-08",
    "body": "PowerShell 极简上手 + 实操 Windows 自带终端，打开就能用，先会这三条指令 最快打开方式 进入目标文件夹 → 点击顶部 地址栏 → 输入 powershell 回车，终端就开在 当前文件夹路径 ，省去手动 cd 的麻烦。 三条基础指令（都是原生命令的别名，好记） · pwd → 查看当前所在目录（Get-Location） · dir → 列出当前文件夹全部文件和子文件夹（Get-ChildItem） · cd \"路径\" → 切换工作目录（Set-Location） 避坑：跨盘符时 cd 不会自动切盘！直接 cd \"C:\\Users\" 人还在原来的盘。必须先输入盘符（如 C:）回车，再 cd 进目标目录。 实操演练（跟着做一遍就熟了） 1️⃣ D 盘新建 testcode → 地址栏输入 powershell 启动，当前路径应为 D:\\testcode 2️⃣ 输入 pwd 回车，确认输出路径正确 3️⃣ 输入 dir 回车，查看目录内容 4️⃣ 新建子文件夹 demo → cd \"demo\" → 再 pwd，路径变成 D:\\testcode\\demo （同盘切换，没问题） 5️⃣ 跨盘切换：先 C: 回车切盘符，再 cd \"C:\\Users\" ，最后 pwd 确认位置 小白 我在 D 盘，直接 cd \"C:\\Users\" 怎么没反应？pwd 一看还在 D 盘…… 老手 cd 只管目录不管盘符。先输 C: 回车把盘切过去，再 cd 进目录，顺序不能反。 记住一句话：同盘直接 cd，跨盘先输盘符。终端打开用地址栏，定位一步到位。"
  },
  {
    "id": "20261008_110636",
    "title": "桌面系统图标消失恢复方法",
    "summary": "个性化设置三步找回系统图标",
    "category": "电脑问题",
    "tags": [
      "桌面图标",
      "Windows设置",
      "恢复图标"
    ],
    "file": "pages/20261008_110636.js",
    "created": "2026-10-08",
    "body": "桌面系统图标消失恢复方法 个性化设置三步找回系统图标 恢复步骤 桌面空白处右键，选择 个性化 点击左侧 主题 ，打开 桌面图标设置 勾选 此电脑、网络、回收站 等需要恢复的图标 依次点击 应用 、 确定 完成恢复 快捷方式： 按 Win + I 打开系统设置，按 个性化 → 主题 → 桌面图标设置 路径操作。 避坑提示 图标隐藏≠文件丢失 ，电脑文件与数据不会丢。 此方法可恢复各类 Windows 自带桌面图标。 但桌面 全部图标消失 时，需排查隐藏图标或平板模式，本方法不适用。"
  },
  {
    "id": "20261008_085645",
    "title": "Fuse.js 不适合做文本查重",
    "summary": "Fuse.js是搜索框，rapidfuzz是查重系统",
    "category": "AI知识库工具",
    "tags": [
      "Fuse.js",
      "rapidfuzz",
      "文本相似度",
      "查重"
    ],
    "file": "pages/20261008_085645.js",
    "created": "2026-10-08",
    "body": "Fuse.js 不适合做文本查重 Fuse.js是搜索框，rapidfuzz是查重系统 为什么 Fuse.js 干不了查重 读不到草稿 ：用户在文案区写了一大段还没入库，Fuse.js 只能读 data/knowledge.js 和页面已有内容，看不见刚写的草稿。 不适合长文本比相似度 ：它擅长关键词搜索（搜“虚拟”出结果），拿两段几百字的文章比相似度，算得很不准。 rapidfuzz 的 token_set_ratio 专做两段文本相似度 词序不同、重复词多都能算准，正是查重需要的。 核心结论 查重本质是拿草稿去跟库里比， Fuse.js 干不了 。别硬套，换 rapidfuzz。 Fuse.js 像百度搜索框，输入关键词给结果，不能算两段长文的相似度 关键词搜索 不适合长文本 rapidfuzz 像论文查重系统，交一篇稿子告诉你跟已有文章有多像 文本相似度 查重专用",
    "favorite": true
  },
  {
    "id": "20261006_182815",
    "title": "低配电脑本地轻量NLP模型",
    "summary": "零付费纯本地，中文分类与微调",
    "category": "AI编程",
    "tags": [
      "本地NLP",
      "轻量模型",
      "中文文本分类"
    ],
    "file": "pages/20261006_182815.js",
    "created": "2026-10-08",
    "body": "低配电脑本地轻量NLP模型 零付费纯本地，中文分类与微调 适合低配的两条主线 FastText ：线性文本分类工具，C++核心、CPU可跑，支持词/字n-gram；中文建议按词或按字训练，做工单、评论、标签分类最省资源。 uer/roberta-tiny-chinese ：轻量中文BERT类模型，参数量小，可做填空、句向量、情感/意图微调；比标准BERT省内存，低配CPU能推理。 两者都 零付费、纯本地 ，不调云API；分类选FastText，深一点语义/微调选Tiny RoBERTa。 FastText 线性n-gram分类，训练推理都快；错别字多可用字级n-gram，低配首选打标/分类 CPU极速 中文分类 roberta-tiny-chinese Tiny规格Transformer，懂上下文与句义；有标注可微调情感/意图，CPU能跑但比FastText重 轻量BERT 可微调 极简落地 FastText：准备 __label__类别 文本 格式语料，supervised训练，quantize压缩模型后本地load预测。 Tiny RoBERTa：用transformers加载uer/roberta-tiny-chinese，pipeline做fill-mask或抽取句向量；有标签再接分类头微调。 原则：能线性不Transformer，能Tiny不Base，纯CPU控制batch与序列长度。 低配避坑 首次从HuggingFace拉 roberta-tiny 需要网络，可提前缓存离线； FastText中文直接按词跑依赖分词质量，噪声大改 字符级n-gram ； 长文本、强上下文再上Tiny BERT，别用大模型Base占满内存。"
  },
  {
    "id": "20261008_120706",
    "title": "对比卡片配色总一样的 Bug",
    "summary": "style 重复导致配色丢失",
    "category": "AI知识库工具",
    "tags": [
      "AI知识库",
      "char_cards",
      "JSON",
      "配色"
    ],
    "file": "pages/20261008_120706.js",
    "created": "2026-10-08",
    "body": "对比卡片配色总一样的 Bug 不是 AI 偷懒，是配色字段被覆盖后丢了 现象 AI 知识库工具生成的 char_cards 对比卡片，本该 每次随机选一对颜色 ，实际渲染出来却总是同一套配色。 分析原因 生成的配置里 style 字段写了 两次 ：第一个存配色对象（leftColor / rightColor），第二个是通用字段的空字符串 \"style\": \"\" 。JSON 同名键 后写覆盖先写 ，配色对象被空串吃掉，引擎读不到颜色，只好走 fallback——表现出来的就是配色固定不变。 根子：字段名撞车。通用 style（CSS 字符串）和 char_cards 专属配色都叫 style，写进同一个对象必有一个被覆盖。 解决办法（两步） 1. 改字段名（核心）： char_cards 的配色从 style 改名为 colors 。 · 引擎读取： const style = el.style || {} → 改成 const colors = el.colors || {} ，内部取值跟着改 · 通用 style 仍是字符串，管字体字号，互不影响 2. 提示词同步改： 字段说明里把配色写成 colors ，并强调“leftColor / rightColor 由 AI 根据主题 每次随机选一对 ，不要总用一样的”。 正确输出长这样： { \"type\": \"char_cards\", \"colors\": { \"leftColor\": \"#36d1dc\", \"rightColor\": \"#f6d365\" }, \"content\": {...}, \"style\": \"\" } 用户 对比卡片颜色怎么每次都一样？我明明提示了要随机换配色。 排查后 配色对象被后面那个空 style 覆盖了，引擎根本没收到颜色。字段改名为 colors，再让提示词要求每次随机选色。 一句话结论：JSON 同名键后者覆盖前者，配色和空 style 撞名必被吃掉。改名 colors + 提示词要求随机选色，两个问题一起解决。",
    "pinned": false
  },
  {
    "id": "20261008_144515",
    "title": "景点购票英语对话",
    "summary": "售票处实用英语对话",
    "category": "英语学习",
    "tags": [
      "景点购票",
      "英语对话",
      "实用英语"
    ],
    "file": "pages/20261008_144515.js",
    "created": "2026-10-08",
    "body": "景点购票英语对话 售票处实用英语对话 Staff Can I help you? You Yes, I'd like two tickets for this attraction. Staff Two adult tickets. That's 32 dollars total. You Is there any discount for visitors? Staff Sorry, no discount today. Would you need an audio guide? You Yes please. What are the opening hours? Staff We open at 9 a.m. and close at 6 p.m. You Got it. Where can I buy souvenirs inside? Staff It's on your left after you go through the gate. You Thank you very much. Staff Enjoy your visit! 重点表达 I'd like two tickets for this attraction. 我想要两张这个景点的门票。（比I want更礼貌） Is there any discount for visitors? 游客有折扣吗？ What are the opening hours? 开放时间是几点？ Where can I buy souvenirs inside? 里面哪里可以买纪念品？ It's on your left after you go through the gate. 进大门之后就在你的左手边。 实用提醒 购票时多用 I'd like... 或 Could I have... 等礼貌句型。 询问折扣、开放时间、设施位置是常见需求，提前记熟关键句。"
  },
  {
    "id": "20261008_144948",
    "title": "情景对话：租车",
    "summary": "从选车到签字全流程",
    "category": "英语学习",
    "tags": [
      "口语",
      "租车",
      "对话",
      "场景英语"
    ],
    "file": "pages/20261008_144948.js",
    "created": "2026-10-08",
    "body": "情景对话：租车 租三天车的完整流程，从问价到签字 Clerk Good afternoon. May I help you? You I'd like to rent a car for three days. Clerk What kind of car would you like? You A compact car, please. Clerk Do you have your driver's license with you? You Yes, here it is. Clerk Would you like full-coverage insurance? You No, thank you. How much is it per day? Clerk 45 dollars a day. Deposit is 200 dollars. You OK. I'll take it. Clerk All right. Sign here, please. You Got it. Thank you. 核心词汇 · rental /ˈrentl/ n. 租赁 · rent /rent/ v. 租用 · compact car 紧凑型小车 · driver's license 驾照 · full-coverage insurance 全险 · deposit /dɪˈpɒzɪt/ n. 押金 可以直接套用的句子 · I'd like to rent a car for + 时长 .（我想租车，租……） · How much is it per day ?（一天多少钱？） · I'll take it. （我就要这辆了。） · Sign here, please. （请在这里签字。） 开口公式：May I help you? → I'd like to… → How much…? → I'll take it. 按这个顺序走，租车对话就稳了。"
  },
  {
    "id": "20261007_091053",
    "title": "情景对话：快餐店点餐",
    "summary": "点套餐、配小食一次搞定",
    "category": "英语学习",
    "tags": [
      "口语",
      "点餐",
      "对话",
      "场景英语"
    ],
    "file": "pages/20261007_091053.js",
    "created": "2026-10-08",
    "body": "情景对话：快餐店点餐 从点套餐到加小料的完整流程 Waiter Welcome! What would you like to order? You I'd like a beef burger combo, medium size. Waiter Would you like fries or onion rings? You Fries, please. And a bottle of coke. Waiter Do you need extra ketchup? You Yes, two packets, thanks. Waiter Got it, please wait a moment. 核心词汇 · beef burger combo 牛肉汉堡套餐 · medium size 中份 · fries 薯条 / onion rings 洋葱圈 · ketchup 番茄酱 · packet （酱料的）一小包 · a bottle of coke 一瓶可乐 可以直接套用的句子 · I'd like a … combo, medium size. （我要一份……套餐，中份。） · Would you like A or B? （您要 A 还是 B？）→ 回答： A, please. · And a bottle of coke. （再来一瓶可乐。） · Yes, two packets, thanks. （要两包，谢谢。） 开口公式：What would you like to order? → I'd like… → A or B? → A, please. 会这三步，快餐店点餐不用慌。"
  },
  {
    "id": "20261008_150759",
    "title": "药店买药英语对话",
    "summary": "肚子疼买药实用对话",
    "category": "英语学习",
    "tags": [
      "药店买药",
      "英语对话",
      "医疗词汇"
    ],
    "file": "pages/20261008_150759.js",
    "created": "2026-10-08",
    "body": "药店买药英语对话 肚子疼买药实用对话 Clerk Can I help you? You I have a bad stomachache. Do you have any medicine for it? Clerk When did it start? You It began last night. Clerk Take one pill after each meal. You Are there any side effects? Clerk It might make you a little dizzy. Drink plenty of water. You Got it. How much does it cost? Clerk 12 dollars. You Here you are. Thank you. Clerk You're welcome. Hope you feel better. 重点词汇与表达 stomachache /ˈstʌməkeɪk/ n. 肚子疼、胃痛 pill /pɪl/ n. 药丸 side effect 副作用 dizzy /ˈdɪzi/ adj. 头晕的 I have a bad stomachache. 我肚子疼得厉害。 Take one pill after each meal. 每顿饭后吃一粒。 Are there any side effects? 有没有副作用？ 买药沟通要点 说明症状： I have a... 说清楚哪里不舒服。 告知时长： It began... 什么时候开始的。 询问副作用： Are there any side effects? 确保安全。"
  },
  {
    "id": "20261008_181546",
    "title": "动态把项目根目录加入 sys.path",
    "summary": "三层向上，根治跨文件夹导入失败",
    "category": "AI编程",
    "tags": [
      "Python",
      "sys.path",
      "import",
      "路径"
    ],
    "file": "pages/20261008_181546.js",
    "created": "2026-10-08",
    "body": "动态把项目根目录加入 sys.path 几行代码，让跨文件夹 import 再也不报错 核心代码 import sys, os sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))) 作用：把 当前文件往上三级的文件夹 加入 Python 搜索路径，且放在 最优先查找 的位置。 逐层拆解 1. __file__ → 当前 .py 脚本文件本身 2. os.path.abspath(__file__) → 脚本的 完整绝对路径 3. os.path.dirname() → 取上级文件夹； 连续写 3 次 = 向上回溯 3 层 4. sys.path.insert(0, 路径) → 插到搜索列表 第 0 位（最高优先级） ，import 时最先在这里找 避坑：不要直接照抄层数！写几层 dirname，取决于脚本离项目根目录有几层——层数不对会加到错误文件夹，导入照样报错。 用途 多文件项目里解决 跨文件夹 import 失败 。不写死绝对路径，代码拷到别的电脑、换存放位置，依然能正常导入上层模块。 补充 ：Windows / Linux / macOS 都兼容，os.path 会自动处理斜杠差异。 insert(0) 插到搜索列表最前面，自己的目录最先被找到；代价是有同名模块覆盖风险。 最高优先级 最先查找 append() 追加到搜索列表末尾，不抢标准库和同名的先机；不需要最高优先级时用它更稳。 最低优先级 追加末尾 一句话结论：本地开发调试用 sys.path.insert 动态加根目录没问题；打包发布时改用 setup.py 或相对导入，别大量依赖这种写法。"
  },
  {
    "id": "20261008_182959",
    "title": "FastText 训练 vs 大模型训练",
    "summary": "几秒 CPU 训练，只为意图分类",
    "category": "AI编程",
    "tags": [
      "FastText",
      "意图识别",
      "聊天机器人",
      "文本分类"
    ],
    "file": "pages/20261008_182959.js",
    "created": "2026-10-08",
    "body": "FastText 训练 vs 大模型训练 不追通用智能，只学你专属的分类规则 大模型训练 喂海量语料、烧高端显卡、训练很长时间，目标是学会通用知识，什么都能聊一点。 海量数据 高端显卡 长时间 FastText 训练 只需要少量对话数据，CPU 上几秒训完，只学你自己的专属意图分类规则。 少量数据 CPU 几秒 轻量 FastText 能给聊天机器人解决什么问题？ · 替代硬编码关键词匹配 ：不用一条一条写“用户说 XX 就回复 YY” · 自动识别用户意图 ：句子换个说法也能归到对的类别 · 减少规则维护成本 ：新意图只需补几条样本重新训练 · 低配置电脑也能跑 ：不占显卡，普通 CPU 足够 一句话结论：大模型是“什么都知道”的通用选手，FastText 是“只认你业务”的轻量裁判——意图分类这件事，小而快反而更好用。",
    "favorite": true
  },
  {
    "id": "20261008_183406",
    "title": "用状态机让机器人多轮对话不混乱",
    "summary": "划状态、定规则，对话才有记忆",
    "category": "AI编程",
    "tags": [
      "状态机",
      "聊天机器人",
      "多轮对话",
      "对话管理"
    ],
    "file": "pages/20261008_183406.js",
    "created": "2026-10-08",
    "body": "用状态机让机器人多轮对话不混乱 划清工作状态，对话切换有章可循 什么是状态机？ 给机器人划分若干 工作状态 ，再设定状态之间的 切换规则 。机器人靠它记住“当前正在处理的任务”，多轮对话才能前后连贯，不会逻辑混乱。 两条铁律 1. 任意时刻，只处于其中一个状态 ——不会既在“查订单”又在“改密码” 2. 满足触发条件，才切换到下一个状态 ——条件不满足，就留在原地继续处理当前任务 用户 我要订明天去上海的高铁（进入“订票”状态） 机器人 好的，明天出发，几位乘客？（留在订票状态，追问缺失信息） 用户 顺便问下怎么开发票？ 机器人 先答完订票：几位乘客？（触发条件不满足，不乱切状态，但可记住新问题） 一句话结论：状态机 = 状态清单 + 切换规则。机器人永远只待在一个状态里，条件到了才换，多轮对话自然不跑偏。"
  },
  {
    "id": "20261008_183914",
    "title": "Ctrl+C 中断 Python 程序",
    "summary": "一键发送键盘中断，优雅停程序",
    "category": "AI编程",
    "tags": [
      "Python",
      "终端",
      "KeyboardInterrupt",
      "调试"
    ],
    "file": "pages/20261008_183914.js",
    "created": "2026-10-08",
    "body": "Ctrl+C 中断 Python 程序 终端里按一下，手动停止正在跑的程序 在终端运行 Python 时，按 Ctrl + C 会发送 KeyboardInterrupt 键盘中断信号。 聊天机器人这类 长循环程序 ，不用关窗口，按这个快捷键就能停下来。 避坑：1. 代码写了 try except KeyboardInterrupt 捕获异常时，程序不会直接退出，会先执行收尾逻辑；2. 程序正卡在底层 C 扩展、休眠、IO 阻塞时，可能不立刻响应；3. CMD / PowerShell / Linux / Mac 终端都支持，但 IDE 内置控制台里部分场景不一定生效。 Ctrl+C 程序有机会收到 KeyboardInterrupt，能执行收尾逻辑（关文件、存进度）再退出，死得体面。 发中断信号 可捕获 任务管理器结束进程 进程直接被干掉，任何清理代码都不会执行——文件没关、数据没存，只能认栽。 强制杀死 无清理机会 一句话结论：想停程序先按 Ctrl+C（可捕获、能收尾）；实在没反应再动用任务管理器强杀。"
  },
  {
    "id": "20261008_184900",
    "title": "C++ 中文路径兼容性避坑",
    "summary": "路径只用英文数字下划线",
    "category": "AI编程",
    "tags": [
      "C++",
      "中文路径",
      "编码兼容"
    ],
    "file": "pages/20261008_184900.js",
    "created": "2026-10-08",
    "body": "C++ 中文路径 / 中文文件夹兼容性 路径只用英文数字下划线 核心结论 老旧 C++ 编译器默认不兼容中文文件夹、中文路径，容易 找不到文件、程序闪退、卡死 。新版编译器修改编码后勉强适配，但稳定性较差。 开发规范建议 路径、文件夹名称 仅使用英文、数字、下划线 。 避坑点 1. 根源：Windows 旧版编译器默认 GBK 编码，fstream 读取 utf-8 中文路径会编码错乱。 2. 新版 MSVC 可用 /utf-8 编译选项开启支持，但跨平台、跨环境依然容易出问题。 3. 问题本质是 操作系统编码、编译器、标准库 三者匹配问题，规避最省事。 4. 打包分发给别人，对方电脑区域编码不一样，中文路径大概率翻车。 一句话总结 能不用中文路径就坚决不用 ，属于开发避坑最佳实践。"
  },
  {
    "id": "20261008_185236",
    "title": "蜜雪冰城商业案例逻辑",
    "summary": "低价不是目的，循环才是护城河",
    "category": "逻辑课",
    "tags": [
      "商业模式",
      "护城河",
      "个人IP",
      "长期主义"
    ],
    "file": "pages/20261008_185236.js",
    "created": "2026-10-08",
    "body": "蜜雪冰城商业案例逻辑 放弃单品暴利，用循环赢下规模 核心商业模式 放弃单品暴利，主打 极致低价、薄利多销、高频复购、规模取胜 。不靠一杯赚翻，靠无数人反复买。 商业闭环：一个正向无限循环 低价引流 → 海量销量 → 供应链强势议价 → 成本持续压低 → 支撑长期低价 → 再回到起点 每一圈都让对手更难追上，这就是 护城河 。 蜜雪冰城 低价引流量，量大的议价权压成本，成本再支撑低价——商业闭环越滚越大。 低价 供应链 个人 IP 独家小众内容吸来精准粉丝，粉丝带来更多独家素材，素材抬高内容壁垒——同行无法复制的个人闭环。 独家内容 粉丝沉淀 底层启示：顶级结果不靠短期猛冲，靠微小稳定持续输出——先稳住日更、日学，再循序渐进放大规模。"
  },
  {
    "id": "20261008_185532",
    "title": "自媒体内容三层信任逻辑",
    "summary": "先愿意看，再相信你，最后挺你",
    "category": "逻辑课",
    "tags": [
      "自媒体",
      "信任",
      "内容逻辑",
      "涨粉"
    ],
    "file": "pages/20261008_185532.js",
    "created": "2026-10-08",
    "body": "自媒体内容三层信任逻辑 真实打底，专业立信，情绪促传播 第一层：立住真实 消除距离感，降低观众抵触——让人觉得你不是在拍硬广告， 愿意看下去 。 第二层：输出专业 展示认知与技术功底，证明你懂行、不是空谈忽悠， 建立信任 。 第三层：给到情绪 / 立场 站在用户一边，达成情感共鸣，促使观众 主动传播、付费支持 。 避坑：顺序不能颠倒——先堆专业、缺真实感，会像硬推销；只讲情绪、没有专业支撑，又显得空洞。三层也不必塞进同一条内容，可在系列作品里逐步搭建。 一句话总结：先让人愿意看 → 再让人相信你 → 最后观众愿意挺你。"
  },
  {
    "id": "20261009_095004",
    "title": "Prompt 工程",
    "summary": "给AI清晰指令，精准输出",
    "category": "AI编程",
    "tags": [
      "Prompt工程",
      "AI指令",
      "内容生成"
    ],
    "file": "pages/20261009_095004.js",
    "created": "2026-10-09",
    "body": "Prompt 工程 给AI清晰指令，精准输出 核心定义 Prompt 工程是 给 AI 编写清晰、精准指令 的技术。不能模糊随意提问，要明确指定输出的 结构、格式、风格 等约束细节，引导 AI 按照预期精准输出内容。 应用场景 PPT 制作 内容生成 各类需要定格式的 AI 任务 注意 Prompt 工程 不只是简单写一句话指令 ，它还包含 指令调试、示例、输出校验 ，是一整套提示词设计方案。"
  },
  {
    "id": "20261009_095224",
    "title": "Python 动态路径获取",
    "summary": "获取脚本真实路径，稳定定位文件",
    "category": "AI编程",
    "tags": [
      "Python",
      "路径处理",
      "os.path"
    ],
    "file": "pages/20261009_095224.js",
    "created": "2026-10-09",
    "body": "Python 动态路径获取 获取脚本真实路径，稳定定位文件 核心用法 os.path.abspath(__file__) 获取当前脚本的绝对真实路径，基于该路径拼接文件地址，无论从项目根目录或是脚本目录运行，都能稳定定位目标文件。 示例 import os # 脚本绝对路径 print(os.path.abspath(__file__)) # 脚本所在文件夹 print(os.path.dirname(__file__)) 注意 拿到的是 脚本本身路径 ，不是项目根目录；一般搭配 os.path.dirname(__file__) 拿到脚本所在文件夹，再向上检索项目根目录。"
  },
  {
    "id": "20261009_121034",
    "title": "pywebview 开启调试控制台",
    "summary": "一个 debug=True，前端报错全看见",
    "category": "AI知识库工具",
    "tags": [
      "pywebview",
      "调试",
      "前端",
      "开发工具"
    ],
    "file": "pages/20261009_121034.js",
    "created": "2026-10-09",
    "body": "pywebview 开启调试控制台 AI 知识库工具 app.py 的前端调试技巧 在 AI 知识库工具的 app.py 里，给 webview.start() 传入 debug=True ，就能开启前端调试控制台。 开启后，软件窗口内 右键 →【检查】 ，即可调出开发者工具：查 JS 报错、看 console.log 打印信息，HTML / CSS / JavaScript 前端代码调试都靠它。 注意 1：仅开发阶段使用！打包发布成品时务必移除 debug=True，关闭调试面板，防止用户随意查看前端源码。 注意 2：开启 debug=True 会恢复浏览器原生右键菜单。自定义右键菜单的代码里必须写 e.preventDefault() 拦截原生右键，避免两个菜单同时弹出冲突。 一句话结论：开发开 debug=True 方便调试，发布删 debug=True 保护源码——自定义右键记得 preventDefault。",
    "pinned": true
  }
]
