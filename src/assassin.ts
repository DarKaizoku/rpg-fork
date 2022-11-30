import { Enemy } from "./enemy"

export class Assassin extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        super (name, health, strength, fly, lvl, xp)
    }
    
    attackAssassin() {
        let count = 0;
        if (count = 0) {
            super.attack()
        }
        else {
            super.setStrength(super.getStrength * 1.1)
            super.attack()
        }
        ++count
    }
}
