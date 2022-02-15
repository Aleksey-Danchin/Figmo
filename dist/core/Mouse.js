var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import EventEmitter from "./EventEmitter.js";
var Button;
(function (Button) {
    Button[Button["left"] = 0] = "left";
})(Button || (Button = {}));
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse(element) {
        var _this = _super.call(this) || this;
        _this.under = false;
        _this.punder = false;
        _this.x = 0;
        _this.y = 0;
        _this.px = 0;
        _this.py = 0;
        _this.dx = 0;
        _this.dy = 0;
        _this.left = false;
        _this.pleft = false;
        _this.element = element;
        _this.mousemoveHandler = _this.mousemoveHandler.bind(_this);
        _this.mouseleaveHandler = _this.mouseleaveHandler.bind(_this);
        _this.mousedownHandler = _this.mousedownHandler.bind(_this);
        _this.mouseupHandler = _this.mouseupHandler.bind(_this);
        _this.element.addEventListener("mousemove", _this.mousemoveHandler);
        _this.element.addEventListener("mouseleave", _this.mouseleaveHandler);
        _this.element.addEventListener("mouseenter", _this.mousemoveHandler);
        _this.element.addEventListener("mousedown", _this.mousedownHandler);
        _this.element.addEventListener("mouseup", _this.mouseupHandler);
        return _this;
    }
    Mouse.prototype.mousemoveHandler = function (e) {
        var clientX = e.clientX, clientY = e.clientY;
        var _a = this.element.getBoundingClientRect(), left = _a.left, top = _a.top;
        var x = clientX - left;
        var y = clientY - top;
        Object.assign(this, { x: x, y: y, px: this.x, py: this.y, under: true });
        this.emit("mousemove", e);
    };
    Mouse.prototype.mouseleaveHandler = function (e) {
        this.under = false;
        this.emit("mouseleave", e);
    };
    Mouse.prototype.mousedownHandler = function (e) {
        if (e.button === Button.left) {
            this.left = true;
        }
        this.emit("mousedown", e);
    };
    Mouse.prototype.mouseupHandler = function (e) {
        if (e.button === Button.left) {
            this.left = false;
        }
        this.emit("mouseup", e);
    };
    Mouse.prototype.tick = function () {
        Object.assign(this, {
            dx: this.x - this.px,
            dy: this.y - this.py,
            px: this.x,
            py: this.y,
            pleft: this.left,
            punder: this.under,
        });
    };
    return Mouse;
}(EventEmitter));
export default Mouse;
