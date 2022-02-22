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
import Frame from "./Frame.js";
import Group from "./Group.js";
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frame = new Frame({
            background: "rgba(0, 0, 255, 0.05)",
            color: "rgba(0, 0, 255, 0.5)",
            lineWidth: 2,
        });
        return _this;
    }
    Selector.prototype.draw = function (context, canvas) {
        context.save();
        context.translate(this.offsetX, this.offsetY);
        this.frame.draw(context, canvas);
        if (this.items.size) {
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
        }
        context.restore();
    };
    return Selector;
}(Group));
export default Selector;
