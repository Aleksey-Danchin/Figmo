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
import Rectangle from "./Rectangle.js";
var Drawable = /** @class */ (function (_super) {
    __extends(Drawable, _super);
    function Drawable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visible = true;
        _this.showBorder = false;
        return _this;
    }
    Drawable.prototype.draw = function (context, canvas) {
        if (this.showBorder) {
            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + this.width, this.y);
            context.lineTo(this.x + this.width, this.y + this.height);
            context.lineTo(this.x, this.y + this.height);
            context.closePath();
            context.lineWidth = 1;
            context.strokeStyle = "blue";
            context.setLineDash([3, 3]);
            context.stroke();
            context.setLineDash([]);
            context.beginPath();
            context.arc(this.x, this.y, 5, 0, Math.PI * 2);
            context.lineWidth = 1;
            context.fillStyle = "white";
            context.strokeStyle = "gray";
            context.fill();
            context.stroke();
            context.beginPath();
            context.arc(this.x + this.width, this.y, 5, 0, Math.PI * 2);
            context.lineWidth = 1;
            context.fillStyle = "white";
            context.strokeStyle = "gray";
            context.fill();
            context.stroke();
            context.beginPath();
            context.arc(this.x + this.width, this.y + this.height, 5, 0, Math.PI * 2);
            context.lineWidth = 1;
            context.fillStyle = "white";
            context.strokeStyle = "gray";
            context.fill();
            context.stroke();
            context.beginPath();
            context.arc(this.x, this.y + this.height, 5, 0, Math.PI * 2);
            context.lineWidth = 1;
            context.fillStyle = "white";
            context.strokeStyle = "gray";
            context.fill();
            context.stroke();
        }
    };
    Drawable.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Drawable;
}(Rectangle));
export default Drawable;
