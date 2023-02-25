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
        // Find any fill of type image
        const imageFill = node.fills.find(fill => fill.type === "IMAGE");
        if (imageFill) {
            // An "image" in Figma is a shape with one or more image fills, potentially blended with other fill
            // types.  Given the complexity of mirroring this exactly in Penpot, which treats images as first-class
            // objects, we're going to simplify this by exporting this shape as a PNG image.
            node.exportAsync({ format: "PNG" }).then((value) => {
                const b64 = figma.base64Encode(value);
                figma.ui.postMessage({ type: "IMAGE", data: {
                        id: node.id,
                        value: "data:" + detectMimeType(b64) + ";base64," + b64
                    } });
            });
        }
    }
    if (node.type == "TEXT") {
        const styledTextSegments = node.getStyledTextSegments(["fontName", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textCase", "textDecoration", "fills"]);
        let font = {
            fontName: styledTextSegments[0].fontName,
            fontSize: styledTextSegments[0].fontSize.toString(),
            fontWeight: styledTextSegments[0].fontWeight.toString(),
            characters: node.characters,
            lineHeight: styledTextSegments[0].lineHeight,
            letterSpacing: styledTextSegments[0].letterSpacing,
            fills: styledTextSegments[0].fills,
            textCase: styledTextSegments[0].textCase,
            textDecoration: styledTextSegments[0].textDecoration,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBLHVDQUF1QztBQUN2QztBQUNBLGlFQUFpRTtBQUNqRSx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFLGlDQUFpQztBQUNqQyx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5wb3QtZXhwb3J0ZXIvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZmlsZURhdGEgPSBbXTtcclxuY29uc3Qgc2lnbmF0dXJlcyA9IHtcclxuICAgIFIwbEdPRGRoOiBcImltYWdlL2dpZlwiLFxyXG4gICAgUjBsR09EbGg6IFwiaW1hZ2UvZ2lmXCIsXHJcbiAgICBpVkJPUncwS0dnbzogXCJpbWFnZS9wbmdcIixcclxuICAgIFwiLzlqL1wiOiBcImltYWdlL2pwZ1wiXHJcbn07XHJcbmZ1bmN0aW9uIGRldGVjdE1pbWVUeXBlKGI2NCkge1xyXG4gICAgZm9yICh2YXIgcyBpbiBzaWduYXR1cmVzKSB7XHJcbiAgICAgICAgaWYgKGI2NC5pbmRleE9mKHMpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaWduYXR1cmVzW3NdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09IFwiSU5TVEFOQ0VcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2godHJhdmVyc2UoY2hpbGQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgaWQ6IG5vZGUuaWQsXHJcbiAgICAgICAgdHlwZTogbm9kZS50eXBlLFxyXG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXHJcbiAgICAgICAgeDogbm9kZS54LFxyXG4gICAgICAgIHk6IG5vZGUueSxcclxuICAgICAgICB3aWR0aDogbm9kZS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG5vZGUuaGVpZ2h0LFxyXG4gICAgICAgIGZpbGxzOiBub2RlLmZpbGxzID09PSBmaWdtYS5taXhlZCA/IFtdIDogbm9kZS5maWxscyAvL1RPRE86IFN1cHBvcnQgbWl4ZWQgZmlsbHNcclxuICAgIH07XHJcbiAgICBpZiAobm9kZS5maWxscyAmJiBBcnJheS5pc0FycmF5KG5vZGUuZmlsbHMpKSB7XHJcbiAgICAgICAgLy8gRmluZCBhbnkgZmlsbCBvZiB0eXBlIGltYWdlXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGaWxsID0gbm9kZS5maWxscy5maW5kKGZpbGwgPT4gZmlsbC50eXBlID09PSBcIklNQUdFXCIpO1xyXG4gICAgICAgIGlmIChpbWFnZUZpbGwpIHtcclxuICAgICAgICAgICAgLy8gQW4gXCJpbWFnZVwiIGluIEZpZ21hIGlzIGEgc2hhcGUgd2l0aCBvbmUgb3IgbW9yZSBpbWFnZSBmaWxscywgcG90ZW50aWFsbHkgYmxlbmRlZCB3aXRoIG90aGVyIGZpbGxcclxuICAgICAgICAgICAgLy8gdHlwZXMuICBHaXZlbiB0aGUgY29tcGxleGl0eSBvZiBtaXJyb3JpbmcgdGhpcyBleGFjdGx5IGluIFBlbnBvdCwgd2hpY2ggdHJlYXRzIGltYWdlcyBhcyBmaXJzdC1jbGFzc1xyXG4gICAgICAgICAgICAvLyBvYmplY3RzLCB3ZSdyZSBnb2luZyB0byBzaW1wbGlmeSB0aGlzIGJ5IGV4cG9ydGluZyB0aGlzIHNoYXBlIGFzIGEgUE5HIGltYWdlLlxyXG4gICAgICAgICAgICBub2RlLmV4cG9ydEFzeW5jKHsgZm9ybWF0OiBcIlBOR1wiIH0pLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiNjQgPSBmaWdtYS5iYXNlNjRFbmNvZGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIklNQUdFXCIsIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImRhdGE6XCIgKyBkZXRlY3RNaW1lVHlwZShiNjQpICsgXCI7YmFzZTY0LFwiICsgYjY0XHJcbiAgICAgICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUudHlwZSA9PSBcIlRFWFRcIikge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlZFRleHRTZWdtZW50cyA9IG5vZGUuZ2V0U3R5bGVkVGV4dFNlZ21lbnRzKFtcImZvbnROYW1lXCIsIFwiZm9udFNpemVcIiwgXCJmb250V2VpZ2h0XCIsIFwibGluZUhlaWdodFwiLCBcImxldHRlclNwYWNpbmdcIiwgXCJ0ZXh0Q2FzZVwiLCBcInRleHREZWNvcmF0aW9uXCIsIFwiZmlsbHNcIl0pO1xyXG4gICAgICAgIGxldCBmb250ID0ge1xyXG4gICAgICAgICAgICBmb250TmFtZTogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLmZvbnROYW1lLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLmZvbnRTaXplLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHN0eWxlZFRleHRTZWdtZW50c1swXS5mb250V2VpZ2h0LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnM6IG5vZGUuY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgbGluZUhlaWdodDogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLmxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHN0eWxlZFRleHRTZWdtZW50c1swXS5sZXR0ZXJTcGFjaW5nLFxyXG4gICAgICAgICAgICBmaWxsczogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLmZpbGxzLFxyXG4gICAgICAgICAgICB0ZXh0Q2FzZTogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLnRleHRDYXNlLFxyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogc3R5bGVkVGV4dFNlZ21lbnRzWzBdLnRleHREZWNvcmF0aW9uLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ25Ib3Jpem9udGFsOiBub2RlLnRleHRBbGlnbkhvcml6b250YWwsXHJcbiAgICAgICAgICAgIHRleHRBbGlnblZlcnRpY2FsOiBub2RlLnRleHRBbGlnblZlcnRpY2FsLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogc3R5bGVkVGV4dFNlZ21lbnRzXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCksIGZvbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIGhlaWdodDogMjAwLCB3aWR0aDogMzAwIH0pO1xyXG5sZXQgcm9vdCA9IHRyYXZlcnNlKGZpZ21hLnJvb3QpOyAvLyBzdGFydCB0aGUgdHJhdmVyc2FsIGF0IHRoZSByb290XHJcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJGSUdNQUZJTEVcIiwgZGF0YTogcm9vdCB9KTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xyXG4gICAgaWYgKG1zZy50eXBlID09PSBcImNhbmNlbFwiKSB7XHJcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcclxuICAgIH1cclxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZXNpemVcIikge1xyXG4gICAgICAgIGZpZ21hLnVpLnJlc2l6ZShtc2cud2lkdGgsIG1zZy5oZWlnaHQpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=