import { Board } from "./data/board.js";
import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player } from "./data/player.js";
import { queue } from "./engine/engine.js";
import { boyName, girlName, lastName, RandomName } from "./data/name.js";

let p1 = new Player('p1',1000,0);
let p2 = new Player('p2',1000,0);
let p3 = new Player('p3',1000,0);
let p4 = new Player('p4',1000,0);
let p5 = new Player('p5',1000,0);
let p6 = new Player('p6',1000,0);

let team1 = {
    p1,
    p2,
    p3
}

let team2 = {
    p4,
    p5,
    p6
}

let board1 = new Board(...Object.values(team1),...Object.values(team2));

// console.log(board1)
board1.nextRound();

p1.cast(p2,'Energy Helix');
p1.cast(p2,'Solar Flare');
queue.dequeue();

board1.nextRound(1);
console.log(board1.teams.team2[0].hanging.damage);
board1.gameStatus();
board1.nextRound(2);
console.log(board1.settings.round)