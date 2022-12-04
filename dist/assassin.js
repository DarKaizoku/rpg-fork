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
exports.Assassin = void 0;
var enemy_1 = require("./enemy");
var Assassin = /** @class */ (function (_super) {
    __extends(Assassin, _super);
    function Assassin(name, health, strength, fly, lvl, xp) {
        return _super.call(this, name, health, strength, fly, lvl, xp) || this;
    }
    Assassin.prototype.attackAssassin = function (opponent) {
        var count = 0;
        if (count = 0) {
            _super.prototype.attack.call(this, opponent);
        }
        else {
            this.setStrength(this.getStrength() * 1.1);
            _super.prototype.attack.call(this, opponent);
        }
        ++count;
    };
    return Assassin;
}(enemy_1.Enemy));
exports.Assassin = Assassin;
