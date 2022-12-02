import { Character } from "./character";
import { Enemy } from "./enemy";
export declare class Hero extends Character {
    private race;
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number, race: string);
    getRace(): string;
    setRace(newRace: string): string;
    attack(opponent: Enemy): void;
    stat(): any;
}
