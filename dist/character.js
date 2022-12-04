"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(name, health, strength, lvl, xp) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.lvl = lvl;
        this.xp = xp;
    }
    Character.prototype.getName = function () {
        return this.name;
    };
    Character.prototype.setName = function (newName) {
        this.name = newName;
        return newName;
    };
    Character.prototype.getHealth = function () {
        return this.health;
    };
    Character.prototype.setHealth = function (newHealth) {
        this.health = newHealth;
        return newHealth;
    };
    Character.prototype.getStrength = function () {
        return this.strength;
    };
    Character.prototype.setStrength = function (newStrength) {
        this.strength = newStrength;
        return newStrength;
    };
    Character.prototype.getLvl = function () {
        return this.lvl;
    };
    Character.prototype.setLvl = function (newLvl) {
        this.lvl = newLvl;
        return newLvl;
    };
    Character.prototype.getXP = function () {
        return this.xp;
    };
    Character.prototype.setXp = function (newXp) {
        this.xp = newXp;
        return newXp;
    };
    Character.prototype.attack = function (opponent) {
        opponent.health -= this.strength;
    };
    Character.prototype.die = function () {
        if (this.health <= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=character.js.map