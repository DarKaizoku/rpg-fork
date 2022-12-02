import { enemyRace, playerRace } from ".";
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

    affichageStat(tableau: any,tableau2: any) {

        const affichage: HTMLElement | any = document.getElementById('combat');

        let output: string = `
        <div>
        <tr>
            <th class="pt-4" scope="row" rowspan="2">0</th>
            <td>name: ${tableau[0]} , health: ${tableau[1]}, strength: ${tableau[2]}, lvl: ${tableau[3]}, xp: ${tableau[4]}, race: ${tableau[5]}</td>
        </tr>
        <tr>
            
            <td>name: ${tableau2[0]} , health: ${tableau2[1]}, strength: ${tableau2[2]}, lvl: ${tableau2[3]}, xp: ${tableau2[4]}</td>
        </tr>
    </div>
    `;
            affichage.innerHTML += output;
        
    }
    affichageTour(tableauHero: any,tableauEnemy: any, tour: number) {

            const affichage: HTMLElement | any = document.getElementById('combat');

            let output: string = `
            <div>
            <tr>
                <th class="pt-4" scope="row" rowspan="2">${tour}</th>
                <td>${tableauHero[0]} attaque avec une force de :${tableauHero[2]}</td>
            </tr>
            <tr>
                <td>${tableauEnemy[0]} recoit ${tableauHero[2]}, ${tableauEnemy[0]} health passe a ${tableauEnemy[1]}</td>
            </tr>
        </div>`;
                affichage.innerHTML += output;
            /* const newRow1 = document.createElement("tr");
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
            affichage.appendChild(newRow2); */
        }

        declare(): void {


            this.affichageStat(this.hero.stat(),this.enemy.stat());

            const initTour = 1;
            let tour = 1;
            while(!this.hero.notAlive() && !this.enemy.notAlive()) {
            
            
            
            //while (this.hero.getHealth() > 0 && this.enemy.getHealth() > 0) {
            this.hero.attack(this.enemy);
            this.affichageTour(this.hero.stat(),this.enemy.stat(),tour);
            ++tour;


            if (this.enemy instanceof Assassin) {
                this.enemy.attackAssassin(this.hero);
            }



            if (this.enemy instanceof (Dragon || Griffin)) {
                if (tour === 4) {
                    this.enemy.flight();
                }
                else if (tour === 6) {
                    this.enemy.attackFromSky(this.hero);
                }
            }

            if(this.enemy instanceof Assassin){
                this.enemy.attackAssassin(this.hero);
            }

            if(!(this.enemy instanceof Assassin)){
                this.enemy.attack(this.hero);
            }
            this.affichageTour(this.enemy.stat(),this.hero.stat(),tour);
            ++tour;

            if (tour > 6) {
                tour = 1
            }

            console.log(this.hero, this.enemy);
        }
        //console.log(this.hero, this.enemy);

        if (this.enemy.notAlive()) { console.log(this.enemy.die()) };

        if (!this.hero.notAlive()) {
            this.xpUp(this.hero);
            this.healthUp(this.hero);
            console.log(this.hero.stat());
        } else { console.log(this.hero.die()) };
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
