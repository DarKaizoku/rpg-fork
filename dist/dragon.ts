import { Enemy } from "./enemy";
import { Hero } from "./hero";

export class Dragon extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        super (name, health, strength, fly, lvl, xp)
    }
    flight():boolean {
        return this.fly = true
    }
    attackFromSky(opponent:Hero) {
        const initStrength: number = this.getStrength();   
        super.setStrength(super.getStrength() * 1.1)
        super.attack(opponent)
        this.setStrength(initStrength);
    }
}
