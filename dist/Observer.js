var Observer = /** @class */ (function () {
    function Observer() {
        this.subscribers = [];
    }
    Observer.prototype.subscribe = function (subscriber) {
        var _this = this;
        if (this.subscribers.includes(subscriber)) {
            return false;
        }
        this.subscribers.push(subscriber);
        return function () {
            var index = _this.subscribers.indexOf(subscriber);
            if (index !== -1) {
                _this.subscribers.splice(index, 1);
            }
        };
    };
    Observer.prototype.dispatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, _b = this.subscribers; _a < _b.length; _a++) {
            var subscriber = _b[_a];
            subscriber.apply(void 0, args);
        }
    };
    return Observer;
}());
export default Observer;
