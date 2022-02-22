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
import Observer from "./Observer.js";
var Render = /** @class */ (function (_super) {
    __extends(Render, _super);
    function Render() {
        var _this = _super.call(this) || this;
        _this.timestamp = 0;
        _this.ptimestamp = 0;
        _this.fps = 0;
        _this.secondPart = 0;
        requestAnimationFrame(function (timestamp) { return _this.tick(timestamp); });
        return _this;
    }
    Render.prototype.tick = function (timestamp) {
        var _this = this;
        requestAnimationFrame(function (timestamp) { return _this.tick(timestamp); });
        Object.assign(this, {
            timestamp: timestamp,
            ptimestamp: this.timestamp,
            fps: 1000 / (timestamp - this.ptimestamp),
            secondPart: (timestamp - this.ptimestamp) / 1000,
        });
        this.dispatch(this);
    };
    return Render;
}(Observer));
export default Render;
