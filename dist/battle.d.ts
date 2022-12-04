import { Character } from "./character";
import { Enemy } from "./enemy";
import { Hero } from "./hero";
export declare class Battle {
    hero: Hero;
    enemy: Enemy;
    constructor(hero: Hero, enemy: Enemy);
    declare(): void;
    xpUp(hero: Character): void;
    lvlUp(hero: Character): void;
    healthUp(hero: Character): number;
}
