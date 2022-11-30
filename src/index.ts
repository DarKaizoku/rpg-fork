import { Battle } from "./battle";
import { Dragon } from "./dragon";
import { Hero } from "./hero";

let jeanPierre = new Hero("Jean-Pierre",1,2,false,0,0,"dwarf");

let drake = new Dragon("Drake",100,10,false,0,0);


let battleTest = new Battle(jeanPierre,drake);

battleTest.declare();