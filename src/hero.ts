import { Berserker } from "./berserker";
import { Character } from "./character";
import { Dragon } from "./dragon";
import { Enemy } from "./enemy";
import { Golem } from "./golem";
import { Griffin } from "./griffin";
import { Werewolf } from "./werewolf";



export class Hero extends Character {

    private race: string;

    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number, race: string) {
        super(name, health, strength, fly, lvl, xp);
        this.race = race;
    }

    getRace(): string {
        return this.race;
    }

    setRace(newRace: string): string {
        this.race = newRace;
        return newRace;
    }

    attack(opponent: Enemy) {
        const initStrength: number = this.getStrength();
        if (this.race === 'elf') {// applique passif de l'elf si race = elf
            if (opponent.fly === true) {
                this.setStrength(this.getStrength() * 1.1);
            }
            else { this.setStrength(this.getStrength() * 0.9) }
            //this.setStrength(initStrength);
        };

        if (this.race === 'human') { // applique passif de l'humain si race = human
            if (opponent.fly === false) {
                this.setStrength(this.getStrength() * 1.1);
            }
            else { this.setStrength(this.getStrength() * 0.9) }
            //this.setStrength(initStrength);
        };

        if (opponent instanceof Dragon) { // applique passif dragon 50 % res et 10 % + si fly
            if (opponent.flight() === true) {
                this.setStrength(this.getStrength() * 0.9)
            }
            this.setStrength(this.getStrength() * 0.5);
            //his.setStrength(initStrength);
        }

        if (opponent instanceof Werewolf) { //applique passif werewolf 50 % res
            this.setStrength(this.getStrength() * 0.5);
            //this.setStrength(initStrength);
        }

        if (opponent instanceof Berserker) { //applique passif berserk 30 % res
            this.setStrength(this.getStrength() * 0.7);
            //this.setStrength(initStrength);
        }

        if (opponent instanceof Golem) { //applique passif golem 50 % chance dégats = 0
            let rand: number = Math.floor(Math.random() * 2)
            if (rand === 0) {
                this.setStrength(this.getStrength() * 0)
            }
            //this.setStrength(initStrength);
        }

        if (opponent instanceof Griffin) { //applique passif griffin 10 % res si fly
            if (opponent.flight() === true) {
                this.setStrength(this.getStrength() * 0.9)
            }
            //this.setStrength(initStrength);
        }
        super.attack(opponent);
        this.setStrength(initStrength);

    }

    stat(): any {
        let tabl = super.stat();
        tabl.push(this.getRace());
        
        return tabl;
    }

}
