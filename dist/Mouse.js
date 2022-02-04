var Button;
(function (Button) {
    Button[Button["left"] = 0] = "left";
})(Button || (Button = {}));
var Mouse = /** @class */ (function () {
    function Mouse(element) {
        this.under = false;
        this.punder = false;
        this.x = 0;
        this.y = 0;
        this.px = 0;
        this.py = 0;
        this.dx = 0;
        this.dy = 0;
        this.left = false;
        this.pleft = false;
        this.element = element;
        this.mousemoveHandler = this.mousemoveHandler.bind(this);
        this.mouseleaveHandler = this.mouseleaveHandler.bind(this);
        this.mousedownHandler = this.mousedownHandler.bind(this);
        this.mouseupHandler = this.mouseupHandler.bind(this);
        this.element.addEventListener("mousemove", this.mousemoveHandler);
        this.element.addEventListener("mouseleave", this.mouseleaveHandler);
        this.element.addEventListener("mouseenter", this.mousemoveHandler);
        this.element.addEventListener("mousedown", this.mousedownHandler);
        this.element.addEventListener("mouseup", this.mouseupHandler);
    }
    Mouse.prototype.mousemoveHandler = function (e) {
        var clientX = e.clientX, clientY = e.clientY;
        var _a = this.element.getBoundingClientRect(), left = _a.left, top = _a.top;
        var x = clientX - left;
        var y = clientY - top;
        Object.assign(this, { x: x, y: y, px: this.x, py: this.y, under: true });
    };
    Mouse.prototype.mouseleaveHandler = function (e) {
        this.under = false;
    };
    Mouse.prototype.mousedownHandler = function (e) {
        if (e.button === Button.left) {
            this.left = true;
        }
    };
    Mouse.prototype.mouseupHandler = function (e) {
        if (e.button === Button.left) {
            this.left = false;
        }
    };
    Mouse.prototype.tick = function () {
        Object.assign({
            dx: this.x - this.px,
            dy: this.y - this.py,
            pleft: this.left,
            punder: this.under,
        });
    };
    return Mouse;
}());
export default Mouse;
