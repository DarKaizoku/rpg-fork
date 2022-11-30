import { Character } from "./character";
import { Enemy } from "./enemy";
import { Hero } from "./hero";

export class Battle {

    hero: Hero;

    enemy: Enemy;

    constructor(hero: Hero, enemy: Enemy) {
        this.hero = hero;
        this.enemy = enemy;
    }

    declare(): void {

        while (this.hero.die() === false || this.enemy.die() === false) {
            this.hero.attack(this.enemy);
            this.enemy.attack(this.hero);
            console.log(this.hero, this.enemy);
        }


        if (!this.hero.die()) {
            this.xpUp(this.hero);
            this.healthUp(this.hero);
        }
        console.log(this.hero, this.enemy);

    }

    xpUp(hero: Character) {
        hero.setXp(hero.getXp() + 2);
        this.lvlUp(hero);
    }

    lvlUp(hero: Character) {
        if (hero.getXp() === 10) {
            hero.setStrength(hero.getStrength() + 10);
            hero.setLvl(hero.getLvl() + 1);
        }
    }

    healthUp(hero: Character): number {
        return hero.setHealth(hero.getHealth() + (this.enemy.getHealth() * 0.1));
    }
}
