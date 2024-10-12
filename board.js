import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player } from "./data/player.js";
import { boyName, girlName, lastName, RandomName } from "./data/name.js";

let player1 = new Player('player1',1000,50);
let player2 = new Player('player2',1000,50);

// console.log(player1,player2);

// player1.castSpell(player2,spellCatalogue.findSpell('Iceberg'));
// player1.castSpell(player1,spellCatalogue.findSpell('Absorb'));
// player1.castSpell(player1,spellCatalogue.findSpell('Miracle Sentinel'));
// player1.castSpell(player2,spellCatalogue.findSpell('Paranoia'));
// player2.castSpell(player2,spellCatalogue.findSpell('Fortress'));
// player1.castSpell(player1,spellCatalogue.findSpell('Absorb'));
player2.castSpell(player1,spellCatalogue.findSpell('Hibernate'));
player1.castSpell(player2,spellCatalogue.findSpell('Brain Freeze'))

// console.log(player1,player2);



