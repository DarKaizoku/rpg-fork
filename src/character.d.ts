import { Enemy } from "./enemy";
import { Hero } from "./hero";
export declare class Character {
    private name;
    private health;
    private strength;
    fly: boolean;
    private lvl;
    private xp;
    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number);
    getName(): string;
    setName(newName: string): string;
    getHealth(): number;
    setHealth(newHealth: number): number;
    getStrength(): number;
    setStrength(newStrength: number): number;
    getLvl(): number;
    setLvl(newLvl: number): number;
    getXp(): number;
    setXp(newXp: number): number;
    attack(opponent: Hero | Enemy): void;
    notAlive(): Boolean;
    die(): string;
    stat(): any;
}
