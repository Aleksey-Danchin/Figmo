var Canvas = /** @class */ (function () {
    function Canvas(background) {
        var _this = this;
        this.element = document.createElement("canvas");
        this.context = this.element.getContext("2d");
        this.background = background;
        window.addEventListener("resize", function () { return _this.resize(); });
    }
    Canvas.prototype.clear = function () {
        var _a = this, context = _a.context, background = _a.background, _b = _a.element, width = _b.width, height = _b.height;
        context.beginPath();
        context.rect(0, 0, width, height);
        context.fillStyle = background;
        context.fill();
    };
    Canvas.prototype.resize = function () {
        if (!this.element.parentElement) {
            return;
        }
        this.element.width = this.element.parentElement.offsetWidth;
        this.element.height = this.element.parentElement.offsetHeight;
        this.clear();
    };
    Canvas.prototype.draw = function (callback) {
        callback(this.context, this.element);
    };
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this.element.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this.element.height;
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}());
export default Canvas;
