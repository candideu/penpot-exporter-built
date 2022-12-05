/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
let fileData = [];
const signatures = {
    R0lGODdh: "image/gif",
    R0lGODlh: "image/gif",
    iVBORw0KGgo: "image/png",
    "/9j/": "image/jpg"
};
function detectMimeType(b64) {
    for (var s in signatures) {
        if (b64.indexOf(s) === 0) {
            return signatures[s];
        }
    }
}
function traverse(node) {
    let children = [];
    if ("children" in node) {
        if (node.type !== "INSTANCE") {
            for (const child of node.children) {
                children.push(traverse(child));
            }
        }
    }
    let result = {
        id: node.id,
        type: node.type,
        name: node.name,
        children: children,
        x: node.x,
        y: node.y,
        width: node.width,
        height: node.height,
        fills: node.fills === figma.mixed ? [] : node.fills //TODO: Support mixed fills
    };
    if (node.fills && Array.isArray(node.fills)) {
        for (const paint of node.fills) {
            if (paint.type === 'IMAGE') {
                // Get the (encoded) bytes for this image.
                const image = figma.getImageByHash(paint.imageHash);
                image.getBytesAsync().then((value) => {
                    const b64 = figma.base64Encode(value);
                    figma.ui.postMessage({ type: "IMAGE", data: {
                            imageHash: paint.imageHash,
                            value: "data:" + detectMimeType(b64) + ";base64," + b64
                        } });
                });
            }
        }
    }
    if (node.type == "TEXT") {
        const styledTextSegments = node.getStyledTextSegments(["fontName", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "fills"]);
        let font = {
            fontName: styledTextSegments[0].fontName,
            fontSize: styledTextSegments[0].fontSize.toString(),
            fontWeight: styledTextSegments[0].fontWeight.toString(),
            characters: node.characters,
            lineHeight: styledTextSegments[0].lineHeight,
            letterSpacing: styledTextSegments[0].letterSpacing,
            fills: styledTextSegments[0].fills,
            textAlignHorizontal: node.textAlignHorizontal,
            textAlignVertical: node.textAlignVertical,
            children: styledTextSegments
        };
        result = Object.assign(Object.assign({}, result), font);
    }
    return result;
}
figma.showUI(__html__, { themeColors: true, height: 200, width: 300 });
let root = traverse(figma.root); // start the traversal at the root
figma.ui.postMessage({ type: "FIGMAFILE", data: root });
figma.ui.onmessage = (msg) => {
    if (msg.type === "cancel") {
        figma.closePlugin();
    }
    if (msg.type === "resize") {
        figma.ui.resize(msg.width, msg.height);
    }
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxxRUFBcUU7QUFDckUsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckUsaUNBQWlDO0FBQ2pDLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlbnBvdC1leHBvcnRlci8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBmaWxlRGF0YSA9IFtdO1xyXG5jb25zdCBzaWduYXR1cmVzID0ge1xyXG4gICAgUjBsR09EZGg6IFwiaW1hZ2UvZ2lmXCIsXHJcbiAgICBSMGxHT0RsaDogXCJpbWFnZS9naWZcIixcclxuICAgIGlWQk9SdzBLR2dvOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgXCIvOWovXCI6IFwiaW1hZ2UvanBnXCJcclxufTtcclxuZnVuY3Rpb24gZGV0ZWN0TWltZVR5cGUoYjY0KSB7XHJcbiAgICBmb3IgKHZhciBzIGluIHNpZ25hdHVyZXMpIHtcclxuICAgICAgICBpZiAoYjY0LmluZGV4T2YocykgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ25hdHVyZXNbc107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUpIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gXCJJTlNUQU5DRVwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaCh0cmF2ZXJzZShjaGlsZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICBpZDogbm9kZS5pZCxcclxuICAgICAgICB0eXBlOiBub2RlLnR5cGUsXHJcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcclxuICAgICAgICB4OiBub2RlLngsXHJcbiAgICAgICAgeTogbm9kZS55LFxyXG4gICAgICAgIHdpZHRoOiBub2RlLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbm9kZS5oZWlnaHQsXHJcbiAgICAgICAgZmlsbHM6IG5vZGUuZmlsbHMgPT09IGZpZ21hLm1peGVkID8gW10gOiBub2RlLmZpbGxzIC8vVE9ETzogU3VwcG9ydCBtaXhlZCBmaWxsc1xyXG4gICAgfTtcclxuICAgIGlmIChub2RlLmZpbGxzICYmIEFycmF5LmlzQXJyYXkobm9kZS5maWxscykpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhaW50IG9mIG5vZGUuZmlsbHMpIHtcclxuICAgICAgICAgICAgaWYgKHBhaW50LnR5cGUgPT09ICdJTUFHRScpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgKGVuY29kZWQpIGJ5dGVzIGZvciB0aGlzIGltYWdlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBmaWdtYS5nZXRJbWFnZUJ5SGFzaChwYWludC5pbWFnZUhhc2gpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuZ2V0Qnl0ZXNBc3luYygpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYjY0ID0gZmlnbWEuYmFzZTY0RW5jb2RlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiSU1BR0VcIiwgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiBwYWludC5pbWFnZUhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkYXRhOlwiICsgZGV0ZWN0TWltZVR5cGUoYjY0KSArIFwiO2Jhc2U2NCxcIiArIGI2NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS50eXBlID09IFwiVEVYVFwiKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVkVGV4dFNlZ21lbnRzID0gbm9kZS5nZXRTdHlsZWRUZXh0U2VnbWVudHMoW1wiZm9udE5hbWVcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRXZWlnaHRcIiwgXCJsaW5lSGVpZ2h0XCIsIFwibGV0dGVyU3BhY2luZ1wiLCBcImZpbGxzXCJdKTtcclxuICAgICAgICBsZXQgZm9udCA9IHtcclxuICAgICAgICAgICAgZm9udE5hbWU6IHN0eWxlZFRleHRTZWdtZW50c1swXS5mb250TmFtZSxcclxuICAgICAgICAgICAgZm9udFNpemU6IHN0eWxlZFRleHRTZWdtZW50c1swXS5mb250U2l6ZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBzdHlsZWRUZXh0U2VnbWVudHNbMF0uZm9udFdlaWdodC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJzOiBub2RlLmNoYXJhY3RlcnMsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHN0eWxlZFRleHRTZWdtZW50c1swXS5saW5lSGVpZ2h0LFxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBzdHlsZWRUZXh0U2VnbWVudHNbMF0ubGV0dGVyU3BhY2luZyxcclxuICAgICAgICAgICAgZmlsbHM6IHN0eWxlZFRleHRTZWdtZW50c1swXS5maWxscyxcclxuICAgICAgICAgICAgdGV4dEFsaWduSG9yaXpvbnRhbDogbm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ25WZXJ0aWNhbDogbm9kZS50ZXh0QWxpZ25WZXJ0aWNhbCxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHN0eWxlZFRleHRTZWdtZW50c1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN1bHQpLCBmb250KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHRoZW1lQ29sb3JzOiB0cnVlLCBoZWlnaHQ6IDIwMCwgd2lkdGg6IDMwMCB9KTtcclxubGV0IHJvb3QgPSB0cmF2ZXJzZShmaWdtYS5yb290KTsgLy8gc3RhcnQgdGhlIHRyYXZlcnNhbCBhdCB0aGUgcm9vdFxyXG5maWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRklHTUFGSUxFXCIsIGRhdGE6IHJvb3QgfSk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcclxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjYW5jZWxcIikge1xyXG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobXNnLnR5cGUgPT09IFwicmVzaXplXCIpIHtcclxuICAgICAgICBmaWdtYS51aS5yZXNpemUobXNnLndpZHRoLCBtc2cuaGVpZ2h0KTtcclxuICAgIH1cclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9