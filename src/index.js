"use strict";
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        var _this = this;
        this.Battle = function (p2) {
            if (_this.speed >= p2.speed) {
                return _this;
            }
            if (_this.speed < p2.speed) {
                return p2;
            }
        };
        this.name = name;
        this.speed = speed;
    }
    return Pokemon;
}());
