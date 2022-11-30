import { Character } from "./character";

export class Hero extends Character {

    private race: string;

    constructor(name: string, health: number, strength: number, fly: boolean, lvl: number, xp: number, race: string) {
        super(name, health, strength, fly, lvl, xp);
        this.race = race;
    }

    getRace(): string {
        return this.race;
    }

    setRace(newRace: string): string {
        this.race = newRace;
        return newRace;
    }

    attack(opponent: Enemy) {

        if (this.race === 'elf') { // applique passif de l'elf si race = elf
            if (opponent.fly === true) {
                this.setStrength(this.getStrength() * 1.1);
            }
            else { this.setStrength(this.getStrength() * 0.9) }
        };

        if (this.race === 'human') { // applique passif de l'elf si race = elf
            if (opponent.fly === false) {
                this.setStrength(this.getStrength() * 1.1);
            }
            else { this.setStrength(this.getStrength() * 0.9) }
        };

        if (opponent instanceof Dragon) { // applique passif dragon 50 % res et 10 % + si fly
            if (opponent.fly === true) {
                this.setStrength(this.getStrength() * 0.9)
            }
            this.setStrength(this.getStrength() * 0.5);
        }

        if (opponent instanceof Werewolf) { //applique passif werewolf 50 % res
            this.setStrength(this.getStrength() * 0.5);
        }

        if (opponent instanceof Berserker) { //applique passif berserk 30 % res
            this.setStrength(this.getStrength() * 0.7);
        }

        if (opponent instanceof Golem) { //applique passif golem 50 % chance dégats = 0
            let rand: number = Math.floor(Math.random() * 2)
            if (rand === 0) {
                this.setStrength(this.getStrength() * 0)
            }
        }

        if (opponent instanceof Griffin) { //applique passif griffin 10 % res si fly
            if (opponent.fly === true) {
                this.setStrength(this.getStrength() * 0.9)
            }
        }

        opponent.setHealth(opponent.getHealth() - this.getStrength());
    }
}
