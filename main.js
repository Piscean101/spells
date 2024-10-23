import { Board } from "./engine/board.js";
import { effectCatalogue } from "./data/effect.js";
import { spellCatalogue } from "./data/catalogue.js";
import { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 } from "./data/player.js";
import { applyBuffs , checkBuffs , queue } from "./engine/combat.js";
import { randomNumber } from "./data/math.js";
// board1.nextRound();


// const cast = document.getElementById('cast');
const queue1 = document.getElementById('queue');
const nextRound = document.getElementById('next');
const log = document.getElementById('console');
let [pl1,pl2,pl3,pl4,pl5,pl6] = [document.getElementById('p1'),document.getElementById('p2'),document.getElementById('p3'),document.getElementById('p4'),document.getElementById('p5'),document.getElementById('p6')]

const old = console.log();

console.log = (message) => {
    message ? log.innerHTML += `<br><br>${[...Object.values(message)].join('')}` : Error(message);
}


queue1.addEventListener("click", (e) => {
    console.log('<img src="../data/images/q.png" height="10px"/>');
    p1.cast(randomNumber(3),p4);
    p2.cast(randomNumber(3),p5);
    p3.cast(randomNumber(3),p6);
    p4.cast(randomNumber(3),p3);
    p5.cast(randomNumber(3),p1);
    p6.cast(randomNumber(3),p2);
});
// cast.addEventListener("click", (e) => {
//     queue.dequeue();
//     return;
// });
nextRound.addEventListener("click", () => {
    board1.nextRound();
    return go();
});

const refresh = () => {
    // PLAYER 1
    pl1.innerHTML = Object.entries(p1);
    // PLAYER 1
    pl2.innerHTML = Object.entries(p2);
    // PLAYER 1
    pl3.innerHTML = Object.entries(p3);
    // PLAYER 1
    pl4.innerHTML = Object.entries(p4);
    // PLAYER 1
    pl5.innerHTML = Object.entries(p5);
    // PLAYER 1
    pl6.innerHTML = Object.entries(p6);

}


// refresh();

let go = () => {
for (let i = 1; i <= 6; i++) {

    let target = board1.teams.roster[i-1];

    let hpimg = '<img src="../data/images/hp.png" class="statimg"/>';

    document.getElementById(`p${i}title`).innerHTML += `<p class="nametag">${target.name}</p>`

    document.getElementById(`p${i}stats`).innerHTML = `${hpimg} ${target.hp} MP ${target.mana} <br> SPE ${target.speed} ACC ${target.acc}`;

    // console.log(target);

}
}

go();
