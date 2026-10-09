window.PAGE = {
  "title": "exFAT 文件系统有什么限制",
  "summary": "兼容性好，但单个文件不能超 4GB",
  "category": "电脑问题",
  "tags": [
    "exFAT",
    "U盘",
    "文件系统",
    "备份失败"
  ],
  "bg": "linear-gradient(135deg, #1e1e2e 0%, #3C254D 100%)",
  "elements": [
    {
      "type": "title",
      "content": "exFAT 文件系统有什么限制",
      "style": "color:#ffffff;font-weight:700;"
    },
    {
      "type": "subtitle",
      "content": "适合 U 盘和移动硬盘跨设备使用，但不适合放大文件。",
      "style": "color:#c8c8d6;"
    },
    {
      "type": "html",
      "content": "<h3>它的特点</h3><ul><li>常见于 U 盘、移动硬盘、存储卡。</li><li>Windows 和 macOS 兼容性较好，适合来回拷贝文件。</li><li>没有传统 FAT32 那样更严格的分区容量限制，日常跨系统使用更省心。</li></ul>",
      "style": "background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:18px;line-height:1.8;color:#e8e8f0;backdrop-filter:blur(10px);"
    },
    {
      "type": "html",
      "content": "<h3>关键限制</h3><ul><li>不支持保存大于 4GB 的单个文件。</li><li>系统备份、虚拟机镜像、大型安装包、高清视频素材可能超过这个大小。</li><li>写入这类大文件时，可能直接失败，或提示空间不足、文件过大。</li></ul>",
      "style": "background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:18px;line-height:1.8;color:#e8e8f0;backdrop-filter:blur(10px);"
    },
    {
      "type": "wrapper",
      "content": "<strong style='color:#ffd166'>注意：</strong><span style='color:#ff8fa3'>做系统备份或生成大镜像前，不要把目标盘格式化成 exFAT。</span><span style='color:#e8e8f0'> 否则备份可能写到一半失败，白白浪费时间。</span>",
      "style": "background:rgba(255,143,163,0.12);border:1px solid rgba(255,209,102,0.35);border-radius:16px;padding:16px;backdrop-filter:blur(10px);line-height:1.7;"
    },
    {
      "type": "html",
      "content": "<p style='margin:0;color:#c8c8d6;'>相关：[[移动硬盘该选 NTFS 还是 exFAT]]</p>",
      "style": ""
    }
  ]
}