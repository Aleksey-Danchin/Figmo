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
import Curve from "../core/drawable/Curve.js";
import Point from "../core/drawable/Point.js";
import Mode from "../core/Mode.js";
var CurveMode = /** @class */ (function (_super) {
    __extends(CurveMode, _super);
    function CurveMode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.payload = new Curve();
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
            _this.payload = new Curve();
            _this.app.container.add(_this.payload);
            _this.app.mouse.on("mousemove", _this.mousemoveHandler);
            _this.app.mouse.on("mousedown", _this.mousedownHandler);
            _this.app.mouse.on("mouseup", _this.mouseupHandler);
        };
        _this.stop = function () {
            _this.element.classList.remove("action--active");
            _this.app.mouse.off("mousemove", _this.mousemoveHandler);
            _this.app.mouse.off("mousedown", _this.mousedownHandler);
            _this.app.mouse.off("mouseup", _this.mouseupHandler);
            _this.running = false;
            if (_this.payload.points.size < 2) {
                _this.app.container.remove(_this.payload);
            }
        };
        _this.mousemoveHandler = function () {
            if (_this.app.mouse.left) {
                var point = new Point(_this.app.mouse.x - _this.app.container.offsetX, _this.app.mouse.y - _this.app.container.offsetY);
                _this.payload.add(point);
            }
        };
        _this.mousedownHandler = function () {
            _this.app.container.add(_this.payload);
        };
        _this.mouseupHandler = function () {
            if (_this.payload.points.size > 1) {
                _this.payload.update();
                _this.app.container.add(_this.payload);
                _this.payload = new Curve();
                _this.app.container.add(_this.payload);
            }
        };
        return _this;
    }
    CurveMode.create = function (data) {
        return new CurveMode(data);
    };
    return CurveMode;
}(Mode));
export default CurveMode;
