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
import Mode from "./Mode.js";
var MoveMode = /** @class */ (function (_super) {
    __extends(MoveMode, _super);
    function MoveMode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.start = function () {
            if (_this.running) {
                return;
            }
            _this.running = true;
            if (_this.app.mode) {
                _this.app.mode.stop();
            }
            _this.app.mode = _this;
            _this.element.classList.add("action--active");
            _this.app.mouse.on("mousemove", _this.mousemoveHandler);
        };
        _this.stop = function () {
            _this.element.classList.remove("action--active");
            _this.app.mouse.off("mousemove", _this.mousemoveHandler);
            _this.running = false;
        };
        _this.mousemoveHandler = function () {
            if (_this.app.mouse.left) {
                _this.app.container.offsetX += _this.app.mouse.dx;
                _this.app.container.offsetY += _this.app.mouse.dy;
            }
        };
        return _this;
    }
    MoveMode.create = function (data) {
        return new MoveMode(data);
    };
    return MoveMode;
}(Mode));
export default MoveMode;
