import { Board } from "./engine/board.js";
import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 } from "./data/player.js";
import { applyBuffs , checkBuffs , queue } from "./engine/combat.js";

board1.nextRound(100);

const cast = document.getElementById('cast');
const queue1 = document.getElementById('queue');
const nextRound = document.getElementById('nextRound');

queue1.addEventListener("click", (e) => {
    return p1.cast('Hibernate',p2); 
});
cast.addEventListener("click", (e) => {
    return queue.dequeue();
});
nextRound.addEventListener("click", () => {
    return board1.nextRound();
})

p1.cast('Energy Helix',p4);
p1.cast('Sunshine',p4);
p1.cast('Splendor',t1);
// p1.cast(spellCatalogue.pickRandom(1),p2);
p3.cast('War Cry',t1)
p1.cast('Wildfire',t2);
queue.dequeue();
board1.nextRound();
// p1.cast('Invoke',p2);
queue.dequeue();