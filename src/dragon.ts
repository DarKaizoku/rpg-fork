import { Enemy } from "./enemy";

export class Dragon extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        super (name, health, strength, fly, lvl, xp)
    }
    fly() {
        return true
    }
    attackFromSky() {
        super.setStrength(super.getStrength * 1.1)        
    }
}
