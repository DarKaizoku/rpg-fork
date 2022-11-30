import { Hero } from "./hero";




export class Character {
    private name: string;
    private health: number;
    private strength: number;
            fly: boolean;
    private lvl: number ;
    private xp: number ;


    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.fly = fly;
        this.lvl = lvl;
        this.xp = xp;
    }

    getName(): string {
        return this.name
    }

    setName(newName: string): string {
        this.name = newName
        return newName
    }

    getHealth(): number {
        return this.health;
    }

    setHealth(newHealth: number): number {
        this.health = newHealth;
        return newHealth;
    }

    getStrength(): number { 
        return this.strength;
    }

    setStrength(newStrength: number): number {
        this.strength = newStrength;
        return newStrength;
    }

    getLvl(): number {
        return this.lvl;
    }

    setLvl(newLvl: number): number {
        this.lvl = newLvl;
        return newLvl;
    }

    getXp(): number {
        return this.xp;
    }

    setXp(newXp: number): number {
        this.xp = newXp;
        return newXp;
    }

    attack(opponent: Hero | Enemy): void {
        opponent.health -= this.strength;


    }

    die(): Boolean {
        if (this.health <= 0) { return true }
        else { return false }
    };
    }