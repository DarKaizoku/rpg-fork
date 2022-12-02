
import { Assassin } from "./assassin";
import { Battle } from "./battle";
import { Berserker } from "./berserker";
import { Dragon } from "./dragon";
import { Golem } from "./golem";
import { Griffin } from "./griffin";
import { Hero } from "./hero";
import { Werewolf } from "./werewolf";

const selectRace = document.getElementById('selectHeroRace');
const selectEnemy = document.getElementById('selectEnemy');

const tableRace: any[] = [];
const tableEnemy: any[] = [];
export let playerRace: any[] = [];
export let enemyRace: any[] = [];

tableRace.push('elf', 'human', 'dwarf');
tableEnemy.push('Assassin', 'Berserker', 'Dragon', 'Golem', 'Griffin')

selectRace.addEventListener('change', (e) => {
    const who = (e.target as HTMLInputElement).value;
    playerRace.push(who);
    console.log(who)
})

function pushRace(): void {
        for (let i = 0; i < tableRace.length; i++) {
            const nextOption = document.createElement("option");
            selectRace.appendChild(nextOption);
            nextOption.textContent = tableRace[i]
            
        }
    };

    pushRace();

selectEnemy.addEventListener('change', (e) => {
    const wich = (e.target as HTMLInputElement).value;
    enemyRace.push(wich);
    console.log(wich);
    
})

function pushEnemy(): void {
    for (let i = 0; i < tableEnemy.length; i++){
        const nextOption = document.createElement("option");
        selectEnemy.appendChild(nextOption);
        nextOption.textContent = tableEnemy[i];
        ;
        
    }
}

pushEnemy();

//let Enemy = new `${enemyRace}`()

let jeanPierre = new Hero("Jean-Pierre",80,20,false,0,0,"human");

let drake = new Werewolf("ChienDenté",50,10,false,0,0);


let battleTest = new Battle(jeanPierre,drake);

battleTest.declare();


