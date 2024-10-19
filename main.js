import { Board } from "./engine/board.js";
import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 } from "./data/player.js";
import { applyBuffs , checkBuffs , queue } from "./engine/combat.js";

// board1.nextRound();

const cast = document.getElementById('cast');
const queue1 = document.getElementById('queue');
const nextRound = document.getElementById('nextRound');

queue1.addEventListener("click", (e) => {
    console.log('Queue');
    p2.cast('Combat Behemoth',p5);
    p1.cast('Witch Hunt',p4);
    p2.cast('Melt',p5);
    p1.cast(spellCatalogue.pickRandom(),p4);
    p2.cast(spellCatalogue.pickRandom(),p5);
    p3.cast(spellCatalogue.pickRandom(),p6);
    p4.cast(spellCatalogue.pickRandom(),p3);
    p5.cast(spellCatalogue.pickRandom(),p1);
    p6.cast(spellCatalogue.pickRandom(),p2);
});
cast.addEventListener("click", (e) => {
    return queue.dequeue();
});
nextRound.addEventListener("click", () => {
    return board1.nextRound();
});

// effectCatalogue.Melt(p1)