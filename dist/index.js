"use strict";
exports.__esModule = false;
var selectRace = document.getElementById('selectHeroRace');
var selectEnemy = document.getElementById('selectEnemy');
var tableRace = [];
var tableEnemy = [];
var playerRace = [];
var enemyRace = [];
tableRace.push('elf', 'human', 'dwarf');
tableEnemy.push('Assassin', 'Berserker', 'Dragon', 'Golem', 'Griffin');
selectRace.addEventListener('change', function (e) {
    var who = e.target.value;
    playerRace.push(who);
});
function pushRace() {
    for (var i = 0; i < tableRace.length; i++) {
        var nextOption = document.createElement("option");
        selectRace.appendChild(nextOption);
        nextOption.textContent = tableRace[i];
    }
}
;
pushRace();
selectEnemy.addEventListener('change', function (e) {
    var wich = e.target.value;
    enemyRace.push(wich);
});
function pushEnemy() {
    for (var i = 0; i < tableEnemy.length; i++) {
        var nextOption = document.createElement("option");
        selectEnemy.appendChild(nextOption);
        nextOption.textContent = tableEnemy[i];
    }
}
pushEnemy();
/*
let jeanPierre = new Hero("Jean-Pierre",80,20,false,0,0,"human");

let drake = new Dragon("ChienDenté",50,10,false,0,0);


let battleTest = new Battle(jeanPierre,drake);

battleTest.declare(); */
