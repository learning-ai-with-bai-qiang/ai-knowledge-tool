# build.py —— 一键打包（打包 + 杀进程）
# 用法：python build.py
import subprocess
import shutil
import sys
import time
from pathlib import Path

ROOT = Path(__file__).parent
DIST = ROOT / "dist" / "AI知识库工具"
INTERNAL = DIST / "_internal"
EXE_NAME = "AI知识库工具.exe"


def kill_running_exe():
    """打包前，先杀掉正在运行的 exe"""
    print(f"[build] 检查是否有正在运行的 {EXE_NAME}...")
    result = subprocess.run(
        ["taskkill", "/F", "/IM", EXE_NAME],
        capture_output=True,
        text=True,
    )
    if result.returncode == 0:
        print(f"[build] 已关闭正在运行的 {EXE_NAME}")
        time.sleep(1)
    else:
        print(f"[build] 没有正在运行的 {EXE_NAME}")


def main():
    # 0. 先杀进程
    kill_running_exe()

    # 1. 调 PyInstaller 打包
    print("=" * 60)
    print("[build] 开始打包...")
    print("=" * 60)
    result = subprocess.run(
        [sys.executable, "-m", "PyInstaller", "knowledge_tool.spec", "--clean", "--noconfirm"],
        cwd=str(ROOT),
    )
    if result.returncode != 0:
        print("\n[build] ❌ 打包失败")
        sys.exit(1)

    # 2. 把 assets 从 _internal 挪到 EXE 同级
    print("\n" + "=" * 60)
    print("[build] 整理打包结果...")
    print("=" * 60)

    src = INTERNAL / "assets"
    dst = DIST / "assets"
    if src.exists():
        if dst.exists():
            shutil.rmtree(dst)
        shutil.move(str(src), str(dst))
        print("[build] ✅ assets 已挪到 EXE 同级")
    else:
        print(f"[build] ⚠️ 没找到 {src}，跳过")

    # 3. 检查打包结果
    print("\n" + "=" * 60)
    print("[build] 检查打包结果...")
    print("=" * 60)

    if DIST.exists():
        print(f"[build] ✅ 打包产物已生成：{DIST}")
    else:
        print(f"[build] ⚠️ 没找到产物目录：{DIST}")
    
    print("\n" + "=" * 60)
    print(f"[build] 🎉 打包完成！")
    print(f"[build] 请去 {DIST} 双击 {EXE_NAME} 测试")
    print("=" * 60)


if __name__ == "__main__":
    main()