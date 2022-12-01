import { Enemy } from "./enemy";
import { Hero } from "./hero";
export declare class Assassin extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number);
    attackAssassin(opponent: Hero): void;
}
