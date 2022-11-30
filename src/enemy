import { Character } from "./character"

export class Enemy extends Character {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        super(name, health, strength, fly, lvl, xp)
    }
    attack() {
        let rand: number = Math.floor(Math.random() * 5)
        if (rand === 0) {
            this.setStrength(this.getStrength() * 0.5)
        }
    }
}