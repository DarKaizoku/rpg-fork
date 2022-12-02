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


    /* affichageTour(tableau: any, tour: number) {

            const affichage: HTMLElement | any = document.getElementById('combat');

            let output: string = `
            <div id="combat">
            <tr>
                <th class="pt-4" scope="row" rowspan="2">${tour}</th>
                <td>${tableau[0]} attaque en 1er avec une force de :${tableau[2]}</td>
            </tr>
        </div>
              `;

              affichage.innerHTML += output;
            const newRow1 = document.createElement("tr");
            const newCaseRound = document.createElement(`"th class="pt-4" scope="row" rowspan="2"`);
            newCaseRound.textContent = `${tour}`;
            const newCaseAction1 = document.createElement("td");
            newCaseAction1.textContent = `Cloud attaque en 1er avec strength`;
            const newRow2 = document.createElement("tr");
            const newCaseAction2 = document.createElement("td");
            newCaseAction2.textContent = `test 1 ${tableau} 2 Test..`;
            newRow1.appendChild(newCaseRound);
            newRow1.appendChild(newCaseAction1);
            affichage.appendChild(newRow1);
            newRow2.appendChild(newCaseAction2);
            affichage.appendChild(newRow2);
        } */

    declare(): void {
        console.log(this.hero.stat());
        console.log(this.enemy.stat());
        //const initTour = 1;
        let tour = 1;

        while ((!this.hero.notAlive()) && (!this.enemy.notAlive())) { // while (this.hero.getHealth() > 0 && this.enemy.getHealth() > 0) {
            //console.log(`TOUR ${tour}`)
            
            this.hero.attack(this.enemy)
            //this.affichageTour(this.hero.stat(), tour);
            //console.log(this.enemy)
            
            ++tour
            //console.log(`TOUR ${tour}`)

            if (this.enemy instanceof Assassin) {
                this.enemy.attackAssassin(this.hero);
            }

            if (!(this.enemy instanceof Assassin) && !(this.enemy instanceof Dragon) && !(this.enemy instanceof Griffin)) {
                this.enemy.attack(this.hero);
            }

            if ((this.enemy instanceof Dragon) || (this.enemy instanceof Griffin)) {
                if (tour === 2) {
                    this.enemy.attack(this.hero);
                }
                else if (tour === 4) {
                    this.enemy.attack(this.hero);
                    this.enemy.flight();
                }
                else if (tour === 6) {
                    this.enemy.attackFromSky(this.hero);
                    this.enemy.fly = false;
                }
            }

            //console.log(this.hero);
            //this.affichageTour(this.enemy.stat(),tour);
            ++tour
            //console.log(`TOUR ${tour}`)

            if (tour > 6) {
                tour = 1
                //console.log(`RESET TOUR`)
            }

            console.log(this.hero, this.enemy)
        }
        //console.log(this.hero, this.enemy);

        if (this.enemy.notAlive()) { console.log(this.enemy.die()) };

        /* if (!this.hero.notAlive()) {
            this.xpUp(this.hero);
            this.healthUp(this.hero);
            console.log(this.hero.stat());
        } else { console.log(this.hero.die()) };
        //console.log(this.hero, this.enemy);
        return; */
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
