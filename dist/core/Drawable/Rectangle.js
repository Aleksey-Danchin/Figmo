var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        Object.assign(this, { x: x, y: y, width: width, height: height });
    }
    return Rectangle;
}());
export default Rectangle;
