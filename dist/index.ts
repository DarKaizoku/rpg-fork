
import { Assassin } from "./assassin";
import { Battle } from "./battle";
import { Berserker } from "./berserker";
import { Dragon } from "./dragon";
import { Enemy } from "./enemy";
import { Golem } from "./golem";
import { Griffin } from "./griffin";
import { Hero } from "./hero";
import { Werewolf } from "./werewolf";

const selectRace = document.getElementById('selectHeroRace');
const selectEnemy = document.getElementById('selectEnemy');
const subName = document.getElementById('chooseName');
const clickName = document.getElementById('button-addon2');
const subMit = document.getElementById('submit');
const fight = document.getElementById('launchBattle');

const tableRace: any[] = [];
const tableEnemy: any[] = [];
let nameChoice: string;
let playerRace: any[] = [];
let enemyRace: any[] = [];
let enemy: Enemy;
let race: Hero;

tableRace.push('elf', 'human', 'dwarf');
tableEnemy.push('Assassin', 'Berserker', 'Dragon', 'Golem', 'Griffin', 'Werewolf');

subName.addEventListener('submit', (e) => {
    e.preventDefault();
    nameChoice = e.target[0].value;
    console.log(nameChoice);
    clickName.classList.add('disabled');
    subMit.setAttribute('readonly', '');
    selectRace.removeAttribute('disabled');
    selectEnemy.removeAttribute('disabled');


})

clickName.addEventListener('click', (e) => {
    nameChoice = (e.target as HTMLInputElement).offsetParent[0].value;
    console.log(nameChoice);
    clickName.classList.add('disabled');
    subMit.setAttribute('readonly', '');
    selectRace.removeAttribute('disabled');
    selectEnemy.removeAttribute('disabled');


})

selectRace.addEventListener('change', (e) => {
    const who = (e.target as HTMLInputElement).value;
    playerRace.push(who);
    console.log(who)

    switch (who) {
        case 'elf': race = new Hero(`${nameChoice}`, 100, 20, false, 1, 0, 'elf');

            break;

        case 'human': race = new Hero(`${nameChoice}`, 100, 20, false, 1, 0, 'human');
            break;

        case 'dwarf': race = new Hero(`${nameChoice}`, 100, 20, false, 1, 0, 'dwarf');
    }
    console.log(race);

});

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

    switch (wich) {
        case 'Assassin': enemy = new Assassin('Valeera', 100, 20, false, 1, 0);

            break;
        case 'Berserker': enemy = new Berserker('Garosh', 110, 22, false, 1, 0);

            break;

        case 'Dragon': enemy = new Dragon('Nozdormu', 125, 25, false, 1, 0);

            break;

        case 'Golem': enemy = new Golem('Célestial Golem', 130, 20, false, 1, 0);

            break;

        case 'Griffin': enemy = new Griffin('Golden Griffin', 100, 20, false, 1, 0);

            break;

        case 'Werewolf': enemy = new Werewolf('Genn Greymane', 100, 22, false, 1, 0);
    }
    console.log(enemy);

});



function pushEnemy(): void {
    for (let i = 0; i < tableEnemy.length; i++) {
        const nextOption = document.createElement("option");
        selectEnemy.appendChild(nextOption);
        nextOption.textContent = tableEnemy[i];
        ;

    }
}

pushEnemy();


fight.addEventListener('click', () => {
    let battle = new Battle(race, enemy);
    console.log(race, enemy);    
    battle.declare();
})