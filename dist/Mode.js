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
import EventEmitter from "./EventEmitter";
var Mode = /** @class */ (function (_super) {
    __extends(Mode, _super);
    function Mode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mode.prototype.beforeMount = function (app) { };
    Mode.prototype.mount = function (app) { };
    Mode.prototype.afterMount = function (app) { };
    Mode.prototype.beforeUnmount = function (app) { };
    Mode.prototype.unmount = function (app) { };
    Mode.prototype.afterUnmount = function (app) { };
    Mode.prototype.start = function (app) { };
    Mode.prototype.pause = function (app) { };
    Mode.prototype.resume = function (app) { };
    Mode.prototype.finish = function (app) { };
    return Mode;
}(EventEmitter));
export default Mode;
