var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        Object.assign(this, { $x: x, $y: y, $width: width, $height: height });
    }
    Object.defineProperty(Rectangle.prototype, "x", {
        get: function () {
            return this.$x;
        },
        set: function (value) {
            this.$x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        get: function () {
            return this.$y;
        },
        set: function (value) {
            this.$y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this.$width;
        },
        set: function (value) {
            this.$width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this.$height;
        },
        set: function (value) {
            this.$height = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
export default Rectangle;
