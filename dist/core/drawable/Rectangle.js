import { isPointInRectanle } from "../common/util.js";
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        Object.assign(this, {
            $x: x,
            $y: y,
            $width: width,
            $height: height,
        });
    }
    Rectangle.prototype.pointIsUnder = function (point) {
        return isPointInRectanle({
            x: this.clientX,
            y: this.clientY,
            width: this.width,
            height: this.height,
        }, point);
    };
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
    Object.defineProperty(Rectangle.prototype, "root", {
        get: function () {
            var root = this.parent;
            while (root) {
                root = root.parent;
            }
            return root;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "absoluteX", {
        get: function () {
            if (this.parent) {
                return this.parent.absoluteX + this.x;
            }
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "absoluteY", {
        get: function () {
            if (this.parent) {
                return this.parent.absoluteY + this.y;
            }
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "clientX", {
        get: function () {
            if (this.root) {
                return this.root.offsetX + this.x;
            }
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "clientY", {
        get: function () {
            if (this.root) {
                return this.root.offsetY + this.y;
            }
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
export default Rectangle;
