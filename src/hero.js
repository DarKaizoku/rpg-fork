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
exports.Hero = void 0;
var berserker_1 = require("./berserker");
var character_1 = require("./character");
var dragon_1 = require("./dragon");
var golem_1 = require("./golem");
var griffin_1 = require("./griffin");
var werewolf_1 = require("./werewolf");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(name, health, strength, fly, lvl, xp, race) {
        var _this = _super.call(this, name, health, strength, fly, lvl, xp) || this;
        _this.race = race;
        return _this;
    }
    Hero.prototype.getRace = function () {
        return this.race;
    };
    Hero.prototype.setRace = function (newRace) {
        this.race = newRace;
        return newRace;
    };
    Hero.prototype.attack = function (opponent) {
        var initStrength = this.getStrength();
        if (this.race === 'elf') { // applique passif de l'elf si race = elf
            if (opponent.fly === true) {
                this.setStrength(this.getStrength() * 1.1);
            }
            else {
                this.setStrength(this.getStrength() * 0.9);
            }
            //this.setStrength(initStrength);
        }
        ;
        if (this.race === 'human') { // applique passif de l'humain si race = human
            if (opponent.fly === false) {
                this.setStrength(this.getStrength() * 1.1);
            }
            else {
                this.setStrength(this.getStrength() * 0.9);
            }
            //this.setStrength(initStrength);
        }
        ;
        if (opponent instanceof dragon_1.Dragon) { // applique passif dragon 50 % res et 10 % + si fly
            if (opponent.flight() === true) {
                this.setStrength(this.getStrength() * 0.9);
            }
            this.setStrength(this.getStrength() * 0.5);
            //his.setStrength(initStrength);
        }
        if (opponent instanceof werewolf_1.Werewolf) { //applique passif werewolf 50 % res
            this.setStrength(this.getStrength() * 0.5);
            //this.setStrength(initStrength);
        }
        if (opponent instanceof berserker_1.Berserker) { //applique passif berserk 30 % res
            this.setStrength(this.getStrength() * 0.7);
            //this.setStrength(initStrength);
        }
        if (opponent instanceof golem_1.Golem) { //applique passif golem 50 % chance dégats = 0
            var rand = Math.floor(Math.random() * 2);
            if (rand === 0) {
                this.setStrength(this.getStrength() * 0);
            }
            //this.setStrength(initStrength);
        }
        if (opponent instanceof griffin_1.Griffin) { //applique passif griffin 10 % res si fly
            if (opponent.flight() === true) {
                this.setStrength(this.getStrength() * 0.9);
            }
            //this.setStrength(initStrength);
        }
        _super.prototype.attack.call(this, opponent);
        this.setStrength(initStrength);
    };
    Hero.prototype.stat = function () {
        var tabl = _super.prototype.stat.call(this);
        tabl.push(this.getRace());
        return tabl;
    };
    return Hero;
}(character_1.Character));
exports.Hero = Hero;
