"use strict";
exports.__esModule = true;
exports.Battle = void 0;
var assassin_1 = require("./assassin");
var Battle = /** @class */ (function () {
    function Battle(hero, enemy) {
        this.hero = hero;
        this.enemy = enemy;
    }
    /* affichageTour(tableau : any,tour:number) {

        let affichage = document.getElementById('???');
        const newRow1 = document.createElement("tr");
        const newCaseRound = document.createElement(`"th class="pt-4" scope="row" rowspan="2"`);
        newCaseRound.textContent = `${tour}`;
        const newCaseAction1 = document.createElement(`Cloud attaque en 1er avec strength`);
        newCaseAction1.textContent = `Cloud attaque en 1er avec strength`;
        const
        newRow.appendChild(newcase);
        newRow.appendChild(addCase(idUser));
        newRow.appendChild(addCase(input));
        newRow.appendChild(addBin(idTicket));
        affichage.appendChild(newRow);
    } */
    Battle.prototype.declare = function () {
        console.log(this.hero.stat());
        console.log(this.enemy.stat());
        while (!this.hero.notAlive() && !this.enemy.notAlive()) {
            var initTour = 1;
            var tour = initTour;
            var tableTour = [2, 4, 6];
            //while (this.hero.getHealth() > 0 && this.enemy.getHealth() > 0) {
            this.hero.attack(this.enemy);
            if (this.enemy instanceof assassin_1.Assassin) {
                this.enemy.attackAssassin(this.hero);
            }
            this.enemy.attack(this.hero);
            ++tour;
            //this.affichageTour(this.hero.stat(),tour);
            /* if ( !(this.enemy instanceof (Dragon || Griffin))) {
                this.enemy.attack(this.hero);
            }
            else {
                if (tour === 2) {
                    this.enemy.attack(this.hero);
                }
                else if (tour === 4){
                    this.enemy.flight();
                }
                else {
                    this.enemy.attackFromSky(this.hero);
                }
            }
            //this.affichageTour(this.enemy.stat(),tour);
            ++tour;
            
            if (tour === 6) {
                tour = initTour
            } */
            console.log(this.hero, this.enemy);
        }
        //console.log(this.hero, this.enemy);
        if (this.enemy.notAlive()) {
            console.log(this.enemy.die());
        }
        ;
        if (!this.hero.notAlive()) {
            this.xpUp(this.hero);
            this.healthUp(this.hero);
            console.log(this.hero.stat());
        }
        else {
            console.log(this.hero.die());
        }
        ;
        //console.log(this.hero, this.enemy);
        return;
    };
    Battle.prototype.xpUp = function (hero) {
        hero.setXp(hero.getXp() + 2);
        this.lvlUp(hero);
    };
    Battle.prototype.lvlUp = function (hero) {
        if (hero.getXp() === 10) {
            hero.setStrength(hero.getStrength() + 10);
            hero.setLvl(hero.getLvl() + 1);
        }
    };
    Battle.prototype.healthUp = function (hero) {
        return hero.setHealth(hero.getHealth() + (this.enemy.getHealth() * 0.1));
    };
    return Battle;
}());
exports.Battle = Battle;
