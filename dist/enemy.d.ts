import { Character } from "./character";
import { Hero } from "./hero";
export declare class Enemy extends Character {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number);
    attack(opponent: Hero): void;
}
