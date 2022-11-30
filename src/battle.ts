import { Character } from "./character";

export class Battle {

    hero: Hero;

    enemy: Enemy;

    constructor(hero: Hero, enemy: Enemy) {
        this.hero = hero;
        this.enemy = enemy;
    }

    battle(): void {

        while (!this.hero.die() || !this.enemy.die()) {
            this.hero.attack(this.enemy);
            this.enemy.attack(this.hero);
            console.log(hero, enemy);
        }


        if (!this.hero.die()) {
            this.xpUp(this.hero);
            this.healthUp(this.hero);
        }
        console.log(hero, enemy);

    }

    xpUp(hero: Character) {
        hero.setXp(hero.getXp() + 2);
        this.lvlUp(hero);
    }

    lvlUp(hero: Character): number {
        if (hero.getXp() === 10) {
            return hero.setLvl(hero.getLvl() + 1);
        }
    }

    healthUp(hero: Character): number {
        return hero.setHealth(hero.getHealth() + (this.enemy.getHealth() * 0.1));
    }
}
