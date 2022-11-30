import { Enemy } from "./enemy";

export class Berserker extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        super (name, health, strength, fly, lvl, xp)
    }
}
