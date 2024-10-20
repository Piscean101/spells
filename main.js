import { Board } from "./engine/board.js";
import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 } from "./data/player.js";
import { applyBuffs , checkBuffs , queue } from "./engine/combat.js";
import { randomNumber } from "./data/math.js";

// board1.nextRound();

const cast = document.getElementById('cast');
const queue1 = document.getElementById('queue');
const nextRound = document.getElementById('nextRound');
let [pl1,pl2,pl3,pl4] = [document.getElementById('p1'),document.getElementById('p2'),document.getElementById('p3'),document.getElementById('p4')]

queue1.addEventListener("click", (e) => {
    console.log('Queue');
    p1.cast(randomNumber(3),p4);
    p2.cast(randomNumber(3),p5);
    p3.cast(randomNumber(3),p6);
    p4.cast(randomNumber(3),p3);
    p5.cast(randomNumber(3),p1);
    p6.cast(randomNumber(3),p2);
});
cast.addEventListener("click", (e) => {
    return queue.dequeue();
});
nextRound.addEventListener("click", () => {
    return board1.nextRound();
});

// pl1.innerHTML = Object.entries(p1);

// effectCatalogue.Melt(p1)

board1.nextRound(50);

