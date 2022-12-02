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
exports.Enemy = void 0;
var character_1 = require("./character");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, health, strength, fly, lvl, xp) {
        return _super.call(this, name, health, strength, fly, lvl, xp) || this;
    }
    Enemy.prototype.attack = function (opponent) {
        var initStrength = this.getStrength();
        if (opponent.getRace() === "dwarf") {
            var rand = Math.floor(Math.random() * 5);
            if (rand === 0) {
                this.setStrength(this.getStrength() * 0.5);
            }
        }
        _super.prototype.attack.call(this, opponent);
        this.setStrength(initStrength);
    };
    return Enemy;
}(character_1.Character));
exports.Enemy = Enemy;
