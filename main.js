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
    return refresh();
});

const go = () => {

    let [hpimg,mpimg,speimg,accimg] = ['<img src="../data/images/hp.png" class="statimg"/>',`<img src="../data/images/mp.png" class="statimg"/>`,`<img src="../data/images/spe.png" class="statimg"/>`,`<img src="../data/images/acc.png" class="statimg"/>`];

    for (let i = 1; i <= 3; i++) {

        let target = board1.teams.roster[i-1];
    
        document.getElementById(`p${i}title`).innerHTML += `<p class="nametag">${target.name}</p><img src="../data/images/${target.element}.png" class="elementIcon"/>`;
    
        document.getElementById(`p${i}stats`).innerHTML = `${hpimg} ${target.hp} ${mpimg} ${target.mana} <br> ${speimg} ${target.speed} ${accimg} ${target.acc}`;
    
        for (let j = 0; j < 5; j++) {
    
            let spell = target.spellbook[j];
    
            document.getElementById(`p${i}spells`).innerHTML += `<button class="spellbtn ${spell.element} noenemy">${spell.title}</button>`;
    
        }

        document.getElementById(`p${i}spells`).innerHTML += `<button class="pass">Pass</button>`;
    
        // console.log(target);
    
    }
    
    for (let i = 4; i <= 6; i++) {
    
        let target = board1.teams.roster[i-1];
    
        document.getElementById(`p${i}title`).innerHTML += `<p class="nametag">${target.name}</p><img src="../data/images/${target.element}.png" class="elementIcon"/>`;
    
        document.getElementById(`p${i}stats`).innerHTML = `${hpimg} ${target.hp} ${mpimg} ${target.mana} <br> ${speimg} ${target.speed} ${accimg} ${target.acc}`;
    
        for (let j = 0; j < 5; j++) {
    
            let spell = target.spellbook[j];
    
            document.getElementById(`p${i}spells`).innerHTML += `<p class="spellbtn ${spell.element} enemy">${spell.title}</p>`;
    
        }
    
    
        // console.log(target);
    
    }

}


// refresh();

const refresh = () => {

    let [hpimg,mpimg,speimg,accimg] = ['<img src="../data/images/hp.png" class="statimg"/>',`<img src="../data/images/mp.png" class="statimg"/>`,`<img src="../data/images/spe.png" class="statimg"/>`,`<img src="../data/images/acc.png" class="statimg"/>`];

for (let i = 1; i <= 3; i++) {

    let target = board1.teams.roster[i-1];

    document.getElementById(`p${i}title`).innerHTML += `<p class="nametag">${target.name} </p><img src="../data/images/${target.element}.png" class="elementIcon"/>`;

    document.getElementById(`p${i}stats`).innerHTML = `${hpimg} ${target.hp} ${manaimg} ${target.mana} <br> ${speimg} ${target.speed} ${accimg} ${target.acc}`;

}

for (let i = 4; i <= 6; i++) {

    let target = board1.teams.roster[i-1];

    document.getElementById(`p${i}title`).innerHTML += `<p class="nametag">${target.name} { ${target.element} }</p>`;

    document.getElementById(`p${i}stats`).innerHTML = `${hpimg} ${target.hp} ${manaimg} ${target.mana} <br> ${speimg} ${target.speed} ${accimg} ${target.acc}`;

}

}

go();
