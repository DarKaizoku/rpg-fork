import { Assassin } from "./assassin";
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
    

      affichageTour(tableau : any,tour:number) {

        let affichage = document.getElementById('combat');
        const newRow1 = document.createElement("tr");
        const newCaseRound = document.createElement(`"th class="pt-4" scope="row" rowspan="2"`);
        newCaseRound.textContent = `${tour}`;
        const newCaseAction1 = document.createElement("td");
        newCaseAction1.textContent = `Cloud attaque en 1er avec strength`;
        const newRow2 = document.createElement("tr");
        const newCaseAction2 = document.createElement("td");
        newCaseAction2.textContent = `test 1 2 Test..`;
        newRow1.appendChild(newCaseRound);
        newRow1.appendChild(newCaseAction1);
        affichage.appendChild(newRow1);
        newRow2.appendChild(newCaseAction2);
        affichage.appendChild(newRow2);
    } 
    
    declare(): void {


        console.log(this.hero.stat());
        console.log(this.enemy.stat());

        while (!this.hero.notAlive() && !this.enemy.notAlive()) {
            const initTour = 1;
            let tour = initTour;
            const tableTour = [2, 4, 6];
            //while (this.hero.getHealth() > 0 && this.enemy.getHealth() > 0) {
            this.hero.attack(this.enemy);
            this.affichageTour(this.hero.stat(),tour);
            ++tour;


            if(this.enemy instanceof Assassin){
                this.enemy.attackAssassin(this.hero);
            }



            if (this.enemy instanceof (Dragon || Griffin)) {
                if (tour === 4){
                    this.enemy.flight();
                }
                else if (tour === 6){
                    this.enemy.attackFromSky(this.hero);
                }
            }
            this.enemy.attack(this.hero);
            this.affichageTour(this.enemy.stat(),tour);
            ++tour;
            
            if (tour > 6) {
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
