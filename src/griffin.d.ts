import { Enemy } from "./enemy";
import { Hero } from "./hero";
export declare class Griffin extends Enemy {
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number);
    flight(): boolean;
    attackFromSky(opponent: Hero): void;
}
