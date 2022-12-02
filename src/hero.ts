import { Berserker } from "./berserker";
import { Character } from "./character";
import { Dragon } from "./dragon";
import { Enemy } from "./enemy";
import { Golem } from "./golem";
import { Griffin } from "./griffin";
import { Werewolf } from "./werewolf";

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
        const initStrength: number = this.getStrength();
        if (this.race === 'elf') {// applique passif de l'elf si race = elf
            if (opponent.fly === true) {
                if (opponent instanceof Dragon) {
                    this.setStrength(this.getStrength() * 1.1 * 0.4);
                }
                else {
                    this.setStrength(this.getStrength() * 1.1 * 0.9);
                }
            }
            else {
                if ((opponent instanceof Dragon) || (opponent instanceof Werewolf)) {
                    this.setStrength(this.getStrength() * 0.9 * 0.5);
                }
                else if (opponent instanceof Berserker) { //applique passif berserk 30 % res
                    this.setStrength(this.getStrength() * 0.9 * 0.7)
                }
                else if (opponent instanceof Golem) { //applique passif golem 50 % chance dégats = 0
                    let rand: number = Math.floor(Math.random() * 2)
                    if (rand === 0) {
                        this.setStrength(0)
                    }
                    else {
                        this.setStrength(this.getStrength() * 0.9);
                    }
                }
                else {
                    this.setStrength(this.getStrength() * 0.9);
                }
            }
            //this.setStrength(initStrength);
        }

        else if (this.race === 'human') { // applique passif de l'humain si race = human
            if (opponent.fly === false) {
                if ((opponent instanceof Dragon) || (opponent instanceof Werewolf)) {
                    this.setStrength(this.getStrength() * 1.1 * 0.5);
                }
                else if (opponent instanceof Berserker) { //applique passif berserk 30 % res
                    this.setStrength(this.getStrength() * 1.1 * 0.7)
                }
                else if (opponent instanceof Golem) { //applique passif golem 50 % chance dégats = 0
                    let rand: number = Math.floor(Math.random() * 2)
                    if (rand === 0) {
                        this.setStrength(0)
                    }
                }
                else {
                    this.setStrength(this.getStrength() * 1.1);
                }
            }
            else {
                if (opponent instanceof Dragon) {
                    this.setStrength(this.getStrength() * 0.9 * 0.4);
                }
                else {
                    this.setStrength(this.getStrength() * 0.9 * 0.1);
                }
            }
        }
        else if (this.getRace() === 'dwarf') {
            if (opponent.fly === false) {
                if ((opponent instanceof Dragon) || (opponent instanceof Werewolf)) {
                    this.setStrength(this.getStrength() * 0.5);
                }
                else if (opponent instanceof Berserker) { //applique passif berserk 30 % res
                    this.setStrength(this.getStrength() * 0.7)
                }
                else if (opponent instanceof Golem) { //applique passif golem 50 % chance dégats = 0
                    let rand: number = Math.floor(Math.random() * 2)
                    if (rand === 0) {
                        this.setStrength(0)
                    }
                }
            }
            else {
                if (opponent instanceof Dragon) {
                    this.setStrength(this.getStrength() * 0.4);
                }
                else {
                    this.setStrength(this.getStrength() * 0.9);
                }
            }

        }
        super.attack(opponent)
        this.setStrength(initStrength)
    }
    stat(): any {
        let tabl = super.stat();
        tabl.push(this.getRace());

        return tabl;
    }
}
