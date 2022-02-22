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
import Drawable from "./Drawable.js";
var Frame = /** @class */ (function (_super) {
    __extends(Frame, _super);
    function Frame(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this) || this;
        _this.background = "white";
        _this.lineWidth = 0;
        _this.color = "black";
        if (data.hasOwnProperty("background")) {
            _this.background = data.background;
        }
        if (data.hasOwnProperty("lineWidth")) {
            _this.lineWidth = data.lineWidth;
        }
        if (data.hasOwnProperty("color")) {
            _this.color = data.color;
        }
        return _this;
    }
    Frame.prototype.draw = function (context, canvas) {
        if (!this.visible) {
            return;
        }
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.background;
        context.fill();
        if (this.lineWidth) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.color;
            context.stroke();
        }
        _super.prototype.draw.call(this, context, canvas);
    };
    return Frame;
}(Drawable));
export default Frame;
