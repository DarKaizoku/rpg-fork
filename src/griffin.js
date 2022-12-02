"use strict";
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
exports.__esModule = true;
exports.Griffin = void 0;
var enemy_1 = require("./enemy");
var Griffin = /** @class */ (function (_super) {
    __extends(Griffin, _super);
    function Griffin(name, health, strength, fly, lvl, xp) {
        return _super.call(this, name, health, strength, fly, lvl, xp) || this;
    }
    Griffin.prototype.flight = function () {
        return this.fly = true;
    };
    Griffin.prototype.attackFromSky = function (opponent) {
        var initStrength = this.getStrength();
        _super.prototype.setStrength.call(this, _super.prototype.getStrength.call(this) * 1.1);
        this.setStrength(initStrength);
    };
    return Griffin;
}(enemy_1.Enemy));
exports.Griffin = Griffin;
