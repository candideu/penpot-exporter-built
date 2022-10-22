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
        fills: node.fills
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
    //TODO Fix text segments with https://www.figma.com/plugin-docs/api/properties/TextNode-getstyledtextsegments
    const defaultFontName = {
        "family": "Inter",
        "style": "Regular"
    };
    const defaultFontSize = 12;
    const defaultFontWeight = 400;
    const defaultLineHeight = {
        "unit": "AUTO"
    };
    const defaultLetterSpacing = {
        "unit": "PERCENT",
        "value": 0
    };
    const defaultTextAlignHorizontal = "LEFT";
    const defaultTextAlignVertical = "TOP";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxxRUFBcUU7QUFDckUsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRSxpQ0FBaUM7QUFDakMsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVucG90LWV4cG9ydGVyLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGZpbGVEYXRhID0gW107XHJcbmNvbnN0IHNpZ25hdHVyZXMgPSB7XHJcbiAgICBSMGxHT0RkaDogXCJpbWFnZS9naWZcIixcclxuICAgIFIwbEdPRGxoOiBcImltYWdlL2dpZlwiLFxyXG4gICAgaVZCT1J3MEtHZ286IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICBcIi85ai9cIjogXCJpbWFnZS9qcGdcIlxyXG59O1xyXG5mdW5jdGlvbiBkZXRlY3RNaW1lVHlwZShiNjQpIHtcclxuICAgIGZvciAodmFyIHMgaW4gc2lnbmF0dXJlcykge1xyXG4gICAgICAgIGlmIChiNjQuaW5kZXhPZihzKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2lnbmF0dXJlc1tzXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gW107XHJcbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS50eXBlICE9PSBcIklOU1RBTkNFXCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRyYXZlcnNlKGNoaWxkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgIGlkOiBub2RlLmlkLFxyXG4gICAgICAgIHR5cGU6IG5vZGUudHlwZSxcclxuICAgICAgICBuYW1lOiBub2RlLm5hbWUsXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgIHg6IG5vZGUueCxcclxuICAgICAgICB5OiBub2RlLnksXHJcbiAgICAgICAgd2lkdGg6IG5vZGUud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBub2RlLmhlaWdodCxcclxuICAgICAgICBmaWxsczogbm9kZS5maWxsc1xyXG4gICAgfTtcclxuICAgIGlmIChub2RlLmZpbGxzICYmIEFycmF5LmlzQXJyYXkobm9kZS5maWxscykpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhaW50IG9mIG5vZGUuZmlsbHMpIHtcclxuICAgICAgICAgICAgaWYgKHBhaW50LnR5cGUgPT09ICdJTUFHRScpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgKGVuY29kZWQpIGJ5dGVzIGZvciB0aGlzIGltYWdlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBmaWdtYS5nZXRJbWFnZUJ5SGFzaChwYWludC5pbWFnZUhhc2gpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuZ2V0Qnl0ZXNBc3luYygpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYjY0ID0gZmlnbWEuYmFzZTY0RW5jb2RlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiSU1BR0VcIiwgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VIYXNoOiBwYWludC5pbWFnZUhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkYXRhOlwiICsgZGV0ZWN0TWltZVR5cGUoYjY0KSArIFwiO2Jhc2U2NCxcIiArIGI2NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1RPRE8gRml4IHRleHQgc2VnbWVudHMgd2l0aCBodHRwczovL3d3dy5maWdtYS5jb20vcGx1Z2luLWRvY3MvYXBpL3Byb3BlcnRpZXMvVGV4dE5vZGUtZ2V0c3R5bGVkdGV4dHNlZ21lbnRzXHJcbiAgICBjb25zdCBkZWZhdWx0Rm9udE5hbWUgPSB7XHJcbiAgICAgICAgXCJmYW1pbHlcIjogXCJJbnRlclwiLFxyXG4gICAgICAgIFwic3R5bGVcIjogXCJSZWd1bGFyXCJcclxuICAgIH07XHJcbiAgICBjb25zdCBkZWZhdWx0Rm9udFNpemUgPSAxMjtcclxuICAgIGNvbnN0IGRlZmF1bHRGb250V2VpZ2h0ID0gNDAwO1xyXG4gICAgY29uc3QgZGVmYXVsdExpbmVIZWlnaHQgPSB7XHJcbiAgICAgICAgXCJ1bml0XCI6IFwiQVVUT1wiXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGVmYXVsdExldHRlclNwYWNpbmcgPSB7XHJcbiAgICAgICAgXCJ1bml0XCI6IFwiUEVSQ0VOVFwiLFxyXG4gICAgICAgIFwidmFsdWVcIjogMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlZmF1bHRUZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJMRUZUXCI7XHJcbiAgICBjb25zdCBkZWZhdWx0VGV4dEFsaWduVmVydGljYWwgPSBcIlRPUFwiO1xyXG4gICAgaWYgKG5vZGUudHlwZSA9PSBcIlRFWFRcIikge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlZFRleHRTZWdtZW50cyA9IG5vZGUuZ2V0U3R5bGVkVGV4dFNlZ21lbnRzKFtcImZvbnROYW1lXCIsIFwiZm9udFNpemVcIiwgXCJmb250V2VpZ2h0XCIsIFwibGluZUhlaWdodFwiLCBcImxldHRlclNwYWNpbmdcIiwgXCJmaWxsc1wiXSk7XHJcbiAgICAgICAgbGV0IGZvbnQgPSB7XHJcbiAgICAgICAgICAgIGZvbnROYW1lOiBzdHlsZWRUZXh0U2VnbWVudHNbMF0uZm9udE5hbWUsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBzdHlsZWRUZXh0U2VnbWVudHNbMF0uZm9udFNpemUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLmZvbnRXZWlnaHQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyczogbm9kZS5jaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBzdHlsZWRUZXh0U2VnbWVudHNbMF0ubGluZUhlaWdodCxcclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLmxldHRlclNwYWNpbmcsXHJcbiAgICAgICAgICAgIGZpbGxzOiBzdHlsZWRUZXh0U2VnbWVudHNbMF0uZmlsbHMsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbkhvcml6b250YWw6IG5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCxcclxuICAgICAgICAgICAgdGV4dEFsaWduVmVydGljYWw6IG5vZGUudGV4dEFsaWduVmVydGljYWwsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBzdHlsZWRUZXh0U2VnbWVudHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzdWx0KSwgZm9udCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB0aGVtZUNvbG9yczogdHJ1ZSwgaGVpZ2h0OiAyMDAsIHdpZHRoOiAzMDAgfSk7XHJcbmxldCByb290ID0gdHJhdmVyc2UoZmlnbWEucm9vdCk7IC8vIHN0YXJ0IHRoZSB0cmF2ZXJzYWwgYXQgdGhlIHJvb3RcclxuZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkZJR01BRklMRVwiLCBkYXRhOiByb290IH0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY2FuY2VsXCIpIHtcclxuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1zZy50eXBlID09PSBcInJlc2l6ZVwiKSB7XHJcbiAgICAgICAgZmlnbWEudWkucmVzaXplKG1zZy53aWR0aCwgbXNnLmhlaWdodCk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==