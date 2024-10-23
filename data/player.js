import { Board } from "../engine/board.js";
import { damageCalculator } from "../engine/damageCalc.js";
import { queue } from "../engine/combat.js";
import { spellCatalogue } from "./catalogue.js";
import { boyName , girlName , lastName , RandomName } from "./name.js";
import { accuracy } from "./math.js";

class Player {
    constructor(name,element,hp = 5000,mana=0) {
        this.name = name; this.element = element; this.hp = hp; this.mana = mana; this.speed = 0; this.mates = []; this.acc = 50;
        this.hanging = {
            charms: [], damage: [], protection: [], stun: [], wards: []
        }
        this.spellbook = [];
        switch(this.element) {
            case 'Fire':
                this.hp = 2000;
                break;
            case 'Ice':
                this.hp = 2750;
                break;
            case 'Light':
                this.hp = 2500;
                break;
            case 'Dark':
            case 'Steel':
                this.hp = 2250;
                break;
        }
        this.maxhp = this.hp;
    }

    cast(spell,target,caster=this) {

            // spell = spellCatalogue.findSpell(spell);

            spell = this.spellbook[spell];
    
            queue.queue.push([this.speed,caster,target,spell]);

    }

    action(target,spell,trueDmg=0) {

        if (this.hanging.stun.length) {

            console.log(`<p class="stunned log">>>${this.name} cannot move!</p>`);
            this.hanging.stun.splice(0,1);

        } else {

            if (spell) {
                
                spell.aoe ? console.log(`<p class="casting log"><img src="../data/images/q.png" height="10px"/><img src="../data/images/q.png" height="10px"/> ${this.name} cast ${spell.title}</p>`) : 
                spell.aoe === false ? console.log(`<p class="casting"><img src="../data/images/q.png" height="10px"/><img src="../data/images/q.png" height="10px"/> ${this.name} cast ${spell.title} on ${target.name}</p>`) : null;
                
                damageCalculator(this,target,spell) === true ? this.mana -= spell.cost : null;
            
            };
            
            if (trueDmg) { target.hp -= trueDmg ; return trueDmg };

        }

    }

}

let p1 = new Player(RandomName(),'Fire');
let p2 = new Player(RandomName(),'Ice');
let p3 = new Player(RandomName(),'Dark');
let p4 = new Player(RandomName(),'Steel');
let p5 = new Player(RandomName(),'Light');
let p6 = new Player(RandomName(),'Fire');

let team1 = {
    p1,
    p2,
    p3,
}

let team2 = {
    p6,
    p5,
    p4
}

let board1 = new Board(5,1,...Object.values(team1),...Object.values(team2));
// p1.name += 'p1';p2.name += 'p2';p3.name += 'p3';p4.name += 'p4';p5.name += 'p5';p6.name += 'p6';
let t1 = board1.teams.team1; let t2 = board1.teams.team2;

// console.log(p1.name,p2.name,p3.name,p4.name,p5.name,p6.name)

export { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 }