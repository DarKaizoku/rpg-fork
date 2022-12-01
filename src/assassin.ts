import { Enemy } from "./enemy"
import { Hero } from "./hero";

export class Assassin extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        super (name, health, strength, fly, lvl, xp)
    }
    
    attackAssassin(opponent:Hero) {
        let count = 0;
        if (count = 0) {
            super.attack(opponent)
        }
        else {
            this.setStrength(this.getStrength() * 1.1);
            super.attack(opponent)
        }
        ++count
    }
}
