# knowledge_tool.spec
import sys
from pathlib import Path
from PyInstaller.utils.hooks import collect_all

project_root = Path(SPECPATH)

# 收集必要的库资源
datas = []
binaries = []
hiddenimports = []

# 知识库工具实际用到的库
for pkg in ['webview', 'pyperclip', 'pyttsx3']:
    try:
        d, b, h = collect_all(pkg)
        datas += d
        binaries += b
        hiddenimports += h
    except Exception as e:
        print(f"[spec] 跳过 {pkg}: {e}")

# 手动加上项目资源（整个 assets 文件夹打包进 _MEIPASS）
datas += [
    ('assets', 'assets'),
]

# 手动补齐 pywebview 和 pyttsx3 的关键 hiddenimports，防止打包后运行时闪退
hiddenimports += [
    'clr',
    'comtypes',
    'webview.platforms.edgechromium',
    'pyttsx3.drivers',
    'pyttsx3.drivers.sapi5',
]

a = Analysis(
    ['app.py'],
    pathex=[str(project_root)],
    binaries=binaries,
    datas=datas,
    hiddenimports=hiddenimports,
    hookspath=[],
    runtime_hooks=[],
    excludes=['tkinter', 'numpy', 'torch', 'kokoro'], # 排除废品依赖，防止打包误抓
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data)

exe = EXE(
    pyz,
    
    a.scripts,
    [],
    exclude_binaries=True,
    name='AI知识库工具',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
    console=False,          # 发布版不显示黑框终端
    icon='knowledge_tool.ico', # 指定图标
)

coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=False,
    name='AI知识库工具',
)