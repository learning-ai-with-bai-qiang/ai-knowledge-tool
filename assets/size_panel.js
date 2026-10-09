    // ============ 注入样式 ============
    function injectStyles() {
        const style = document.createElement("style");
        style.textContent = `
            #sizePanel {
                position: fixed; right: 20px; bottom: 90px; z-index: 200;
                background: rgba(0,0,0,0.15); backdrop-filter: blur(1px);
                border-radius: 14px; padding: 18px 16px 16px;
                min-width: 220px; max-width: 260px;
                max-height: 70vh; overflow-y: auto;
                box-shadow: 0 8px 40px rgba(0,0,0,0.5);
                border: 1px solid rgba(255,255,255,0.08);
                transition: transform 0.3s ease, opacity 0.3s ease;
                opacity: 0; transform: translateX(30px); pointer-events: none;
                font-family: 'Microsoft YaHei', sans-serif; user-select: none;
            }
            #sizePanel.open { opacity: 1; transform: translateX(0); pointer-events: auto; }

            #sizePanel .panel-title {
                color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 600;
                letter-spacing: 1px; margin-bottom: 12px; text-align: center;
                border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;
            }
            #sizePanel .panel-title { cursor: move; }
            #sizePanel .el-list {
                display: flex; flex-direction: column; gap: 6px;
                margin-bottom: 12px; max-height: 300px; overflow-y: auto; padding-right: 4px;
            }
            #sizePanel .el-item {
                display: flex; align-items: center; justify-content: space-between;
                padding: 6px 10px; border-radius: 8px; cursor: pointer;
                color: rgba(255,255,255,0.5); font-size: 13px; border: 1px solid transparent;
            }
            #sizePanel .el-item:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.8); }
            #sizePanel .el-item.active { background: rgba(255,215,0,0.12); border-color: rgba(255,215,0,0.2); color: #ffd93d; }
            #sizePanel .el-item .el-name { font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100px; }
            #sizePanel .el-item .el-size { font-size: 11px; background: rgba(255,255,255,0.06); padding: 0 8px; border-radius: 4px; color: rgba(255,255,255,0.3); }
            #sizePanel .el-item.active .el-size { color: #ffd93d; }

            #sizePanel .control-area {
                background: rgba(255,255,255,0.04); border-radius: 10px;
                padding: 12px 10px 10px; border: 1px solid rgba(255,255,255,0.04);
            }
            #sizePanel .control-area .slider-label {
                display: flex; justify-content: space-between;
                color: rgba(255,255,255,0.5); font-size: 12px; margin-bottom: 6px;
            }
            #sizePanel .control-area .slider-label .val { color: #ffd93d; font-weight: 600; min-width: 36px; text-align: right; }
            #sizePanel input[type="range"] {
                -webkit-appearance: none; appearance: none;
                width: 100%; height: 4px; border-radius: 4px;
                background: rgba(255,255,255,0.12); outline: none; margin: 6px 0 2px;
            }
            #sizePanel input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none; appearance: none;
                width: 16px; height: 16px; border-radius: 50%;
                background: #ffd93d; cursor: pointer;
                border: 2px solid rgba(0,0,0,0.2);
            }
            #sizePanel .no-selection { color: rgba(255,255,255,0.2); font-size: 12px; text-align: center; padding: 8px 0; }

            #panelToggle, #saveBtn {
                position: fixed; bottom: 24px; z-index: 150;
                background: rgba(255,215,0,0.15); backdrop-filter: blur(8px);
                border: 1px solid rgba(255,215,0,0.2); color: #ffd93d;
                padding: 10px 16px; border-radius: 40px;
                font-size: 13px; font-weight: 600; cursor: pointer;
                font-family: 'Microsoft YaHei', sans-serif;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                width: 120px; text-align: center; box-sizing: border-box;
            }
            #panelToggle { right: 20px; }
            #saveBtn {
                right: 160px;
                background: rgba(64,158,255,0.2);
                border-color: rgba(64,158,255,0.3);
                color: #66b1ff;
            }
            #panelToggle:hover, #saveBtn:hover { transform: scale(1.04); }
            #panelToggle.active { background: rgba(255,215,0,0.08); color: rgba(255,215,0,0.4); }
        `;
        document.head.appendChild(style);
    }


    // size_panel.js —— 调控面板（调大小 + 编辑文字）
// 依赖：knowledge_engine.html 暴露的 window.KB

(function () {
    let allElements = [];
    let selectedElId = null;
    let panelOpen = false;

    // 编辑状态
    let editingNode = null;
    let editingHandler = null;
    let editingEl = null;

    // ============ 等 KB 就绪 ============
    window.addEventListener("kb-ready", init);

    function init() {
        injectStyles();
        allElements = window.KB.elements || [];
        injectUI();
    }



    // ============ 往页面上插 UI ============
    function injectUI() {
        // 调控按钮
        const panelToggle = document.createElement("button");
        panelToggle.id = "panelToggle";
        panelToggle.textContent = "🎛️ 调控面板";
        document.body.appendChild(panelToggle);

        // 保存按钮
        const saveBtn = document.createElement("button");
        saveBtn.id = "saveBtn";
        saveBtn.textContent = "💾 保存修改";
        document.body.appendChild(saveBtn);

        // 面板
        const sizePanel = document.createElement("div");
        sizePanel.id = "sizePanel";
        sizePanel.innerHTML = `
            <div class="panel-title">🎯 尺寸调控 · 点击元素选中</div>
            <div class="el-list" id="elList"></div>
            <div class="control-area" id="controlArea">
                <div class="no-selection">← 点击上方元素</div>
            </div>
        `;
        document.body.appendChild(sizePanel);
        // ============ 面板拖动 ============
        const titleBar = sizePanel.querySelector(".panel-title");
        let dragging = false;
        let startX = 0, startY = 0;
        let startLeft = 0, startTop = 0;

        titleBar.addEventListener("mousedown", (e) => {
            dragging = true;
            const rect = sizePanel.getBoundingClientRect();
            startX = e.clientX;
            startY = e.clientY;
            startLeft = rect.left;
            startTop = rect.top;

            // 从 right/bottom 定位切到 left/top
            sizePanel.style.right = "auto";
            sizePanel.style.bottom = "auto";
            sizePanel.style.left = startLeft + "px";
            sizePanel.style.top = startTop + "px";

            e.preventDefault();
        });

        document.addEventListener("mousemove", (e) => {
            if (!dragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            sizePanel.style.left = (startLeft + dx) + "px";
            sizePanel.style.top = (startTop + dy) + "px";
        });

        document.addEventListener("mouseup", () => {
            dragging = false;
        });

        // 绑定事件
        panelToggle.addEventListener("click", togglePanel);
        saveBtn.addEventListener("click", saveChanges);
    }

    // ============ 面板开关 ============
    function togglePanel() {
        const panelToggle = document.getElementById("panelToggle");
        const sizePanel = document.getElementById("sizePanel");
        panelOpen = !panelOpen;
        sizePanel.classList.toggle("open", panelOpen);
        panelToggle.classList.toggle("active", panelOpen);
        panelToggle.textContent = panelOpen ? "✕ 关闭" : "🎛️ 调控面板";
        if (panelOpen) {
            buildPanelList();
            if (selectedElId) selectElement(selectedElId);
        } else {
            exitEditMode();
        }
    }

    // ============ 构建元素列表 ============
    function buildPanelList() {
        const list = document.getElementById("elList");
        list.innerHTML = "";
        if (!allElements.length) {
            list.innerHTML = '<div style="color:rgba(255,255,255,0.2);font-size:12px;padding:8px;text-align:center;">暂无元素</div>';
            return;
        }
        allElements.forEach(el => {
            const item = document.createElement("div");
            item.className = "el-item" + (el.id === selectedElId ? " active" : "");

            const nameSpan = document.createElement("span");
            nameSpan.className = "el-name";
            nameSpan.textContent = el.name;

            const sizeSpan = document.createElement("span");
            sizeSpan.className = "el-size";
            const currentScale = el.node.dataset.scale || "1.0";
            sizeSpan.textContent = "×" + currentScale;

            item.appendChild(nameSpan);
            item.appendChild(sizeSpan);
            item.dataset.elId = el.id;
            item.addEventListener("click", () => selectElement(el.id));
            list.appendChild(item);
        });
    }

    // ============ 选中元素 ============
    function selectElement(id) {
        exitEditMode();

        selectedElId = id;
        document.querySelectorAll("#elList .el-item").forEach(item => {
            item.classList.toggle("active", item.dataset.elId === id);
        });
        const el = allElements.find(e => e.id === id);
        if (!el) {
            document.getElementById("controlArea").innerHTML = '<div class="no-selection">未找到元素</div>';
            return;
        }
        const node = el.node;
        const currentScale = parseFloat(node.dataset.scale) || 1.0;
        const controlArea = document.getElementById("controlArea");

        const editable = (el.srcEl.type === "title" || el.srcEl.type === "subtitle" || el.srcEl.type === "html" || el.srcEl.type === "wrapper");
        const hintHtml = editable
            ? `<div style="font-size:12px; color:#52c41a; margin-bottom:10px; padding:6px 8px; background:rgba(82,196,26,0.1); border-radius:6px;">✏️ 此元素可直接在页面上编辑文字</div>`
            : `<div style="font-size:12px; color:#888; margin-bottom:10px; padding:6px 8px; background:rgba(255,255,255,0.03); border-radius:6px;">此元素结构复杂，暂不支持改字</div>`;

        controlArea.innerHTML = `
            ${hintHtml}
            <div class="slider-label">
                <span>${window.KB.escapeHtml(el.name)}</span>
                <span class="val" id="scaleDisplay">${currentScale.toFixed(1)}×</span>
            </div>
            <input type="range" min="0.5" max="4" step="0.1" value="${currentScale}" id="sizeSlider">
            <div style="display:flex;justify-content:space-between;color:rgba(255,255,255,0.15);font-size:10px;padding:0 2px;">
                <span>0.5×</span>
                <span>4×</span>
            </div>
        `;
        const slider = document.getElementById("sizeSlider");
        const display = document.getElementById("scaleDisplay");
        slider.addEventListener("input", function () {
            const val = parseFloat(this.value);
            display.textContent = val.toFixed(1) + "×";
            applyScale(el.id, val);
        });

        if (editable) {
            enterEditMode(node, el);
        }
    }

    // ============ 应用缩放 ============
    function applyScale(id, scale) {
        const el = allElements.find(e => e.id === id);
        if (!el) return;
        const node = el.node;
        node.dataset.scale = scale.toFixed(1);
        node.style.zoom = scale;

        const items = document.querySelectorAll("#elList .el-item");
        items.forEach(item => {
            if (item.dataset.elId === id) {
                const sizeSpan = item.querySelector(".el-size");
                if (sizeSpan) sizeSpan.textContent = "×" + scale.toFixed(1);
            }
        });
    }

    // ============ 编辑模式 ============
    function enterEditMode(node, el) {
        exitEditMode();
        node.contentEditable = "true";
        node.style.outline = "2px dashed #409eff";
        node.style.outlineOffset = "4px";
        editingNode = node;
        editingEl = el;
        editingHandler = () => {
            el.srcEl.content = node.innerHTML;
        };
        node.addEventListener("input", editingHandler);
    }

    function exitEditMode() {
        if (!editingNode) return;
        if (editingEl && editingEl.srcEl) {
            editingEl.srcEl.content = editingNode.innerHTML;
        }
        editingNode.contentEditable = "false";
        editingNode.style.outline = "";
        editingNode.style.outlineOffset = "";
        if (editingHandler) {
            editingNode.removeEventListener("input", editingHandler);
        }
        editingNode = null;
        editingHandler = null;
        editingEl = null;
    }

    // ============ 保存 ============
    async function saveChanges() {
        exitEditMode();

        // 收集 scale
        allElements.forEach(item => {
            if (item.srcEl && item.node.dataset.scale) {
                item.srcEl.scale = parseFloat(item.node.dataset.scale);
            }
        });

        const r = await window.KB.savePage(window.KB.pageData);
        if (r && r.ok) {
            window.KB.showToast("✅ 已保存");
        } else {
            window.KB.showToast("❌ 保存失败：" + (r && r.msg || "未知错误"));
        }
    }
})();