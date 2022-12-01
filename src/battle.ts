import { Character } from "./character";
import { Dragon } from "./dragon";
import { Enemy } from "./enemy";
import { Griffin } from "./griffin";
import { Hero } from "./hero";

export class Battle {

    hero: Hero;

    enemy: Enemy;

    constructor(hero: Hero, enemy: Enemy) {
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
    
    declare(): void {


        console.log(this.hero.stat());
        console.log(this.enemy.stat());

        while (!this.hero.die() && !this.enemy.die()) {
            const initTour = 1;
            let tour = initTour;
            const tableTour = [2, 4, 6];
            //while (this.hero.getHealth() > 0 && this.enemy.getHealth() > 0) {
            this.hero.attack(this.enemy);
            ++tour;
            //this.affichageTour(this.hero.stat(),tour);



            if ( !(this.enemy instanceof (Dragon || Griffin))) {
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
            }

            
            console.log(this.hero, this.enemy);
        }
        //console.log(this.hero, this.enemy);
        
        if(this.enemy.notAlive()){console.log(this.enemy.die())};

        if (!this.hero.notAlive()) {
            this.xpUp(this.hero);
            this.healthUp(this.hero);
            console.log(this.hero.stat());
        }else{console.log(this.hero.die())};
        //console.log(this.hero, this.enemy);
        return;
    }

    xpUp(hero: Character) {
        hero.setXp(hero.getXp() + 2);
        this.lvlUp(hero);
    }

    lvlUp(hero: Character) {
        if (hero.getXp() === 10) {
            hero.setStrength(hero.getStrength() + 10);
            hero.setLvl(hero.getLvl() + 1);
        }
    }

    healthUp(hero: Character): number {
        return hero.setHealth(hero.getHealth() + (this.enemy.getHealth() * 0.1));
    }
}
