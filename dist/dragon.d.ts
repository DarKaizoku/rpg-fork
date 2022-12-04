import { Enemy } from "./enemy";
import { Hero } from "./hero";
export declare class Dragon extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number);
    flight(): boolean;
    attackFromSky(opponent: Hero): void;
}
