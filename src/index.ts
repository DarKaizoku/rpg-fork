import { Assassin } from "./assassin";
import { Battle } from "./battle";
import { Dragon } from "./dragon";
import { Hero } from "./hero";

let jeanPierre = new Hero("Jean-Pierre",80,20,false,0,0,"human");

let drake = new Assassin("Drake",10,1,false,0,0);


let battleTest = new Battle(jeanPierre,drake);

battleTest.declare();