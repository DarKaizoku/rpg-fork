import { Assassin } from "./assassin";
import { Battle } from "./battle";
import { Dragon } from "./dragon";
import { Golem } from "./golem";
import { Hero } from "./hero";
import { Werewolf } from "./werewolf";


let jeanPierre = new Hero("Jean-Pierre",80,20,false,0,0,"human");

let drake = new Assassin("ChienDenté",50,10,false,0,0);


let battleTest = new Battle(jeanPierre,drake);

battleTest.declare();


