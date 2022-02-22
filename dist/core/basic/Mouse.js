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
import EventEmitter from "../common/EventEmitter.js";
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
        _this.mousemoveHandler = function (e) {
            var clientX = e.clientX, clientY = e.clientY;
            var _a = _this.element.getBoundingClientRect(), left = _a.left, top = _a.top;
            var x = clientX - left;
            var y = clientY - top;
            Object.assign(_this, { x: x, y: y, px: _this.x, py: _this.y, under: true });
            _this.emit("mousemove", e);
        };
        _this.mouseleaveHandler = function (e) {
            _this.under = false;
            _this.emit("mouseleave", e);
        };
        _this.mousedownHandler = function (e) {
            if (e.button === Button.left) {
                _this.left = true;
            }
            _this.emit("mousedown", e);
        };
        _this.mouseupHandler = function (e) {
            if (e.button === Button.left) {
                _this.left = false;
            }
            _this.emit("mouseup", e);
        };
        _this.element = element;
        _this.element.addEventListener("mousemove", _this.mousemoveHandler);
        _this.element.addEventListener("mouseleave", _this.mouseleaveHandler);
        _this.element.addEventListener("mouseenter", _this.mousemoveHandler);
        _this.element.addEventListener("mousedown", _this.mousedownHandler);
        _this.element.addEventListener("mouseup", _this.mouseupHandler);
        return _this;
    }
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
