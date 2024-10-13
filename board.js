import { Board } from "./data/player.js";
import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player } from "./data/player.js";
import { boyName, girlName, lastName, RandomName } from "./data/name.js";

let player1 = new Player('player1',1000,50);
let player2 = new Player('player2',1000,50);
let player3 = new Player('player3',1000,50);
let player4 = new Player('player4',1000,50);
let player5 = new Player('player5',1000,50);
let player6 = new Player('player6',1000,50);

let team1 = {
    player1,
    player2,
    player3
}

let team2 = {
    player4,
    player5,
    player6
}

let board1 = new Board(...Object.values(team1),...Object.values(team2))
// console.log(board1)

// player2.castSpell(player1,spellCatalogue.findSpell('Hibernate'));
// player1.castSpell(player2,spellCatalogue.findSpell('Brain Freeze'));
player1.castSpell(board1.teams.team1,spellCatalogue.findSpell('Splendor'));
player2.castSpell(board1.teams.team1,spellCatalogue.findSpell('Chainsaw Massacre'));
