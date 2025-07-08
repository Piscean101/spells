import { Board } from "../engine/board.js";
import { damageCalculator } from "../engine/damageCalc.js";
import { queue } from "../engine/combat.js";
import { spellCatalogue } from "./catalogue.js";
import { boyName , girlName , lastName , RandomName } from "./name.js";
import { accuracy } from "./math.js";

class Player {
    constructor(name,element,hp = 5000,mana=0) {
        this.name = name; this.element = element; this.hp = hp; this.mana = mana; this.speed = 1; this.mates = []; this.acc = 0;
        this.hanging = {
            charms: [], damage: [], protection: [], stun: [], wards: []
        }
        this.spellbook = [];
        switch(this.element) {
            case 'Fire':
                this.hp = 1000;
                this.speed = 2;
                break;
            case 'Ice':
                this.hp = 1750;
                this.speed = 0;
                break;
            case 'Light':
                this.hp = 1500;
                this.speed = 1;
                break;
            case 'Dark':
                this.hp = 1250;
                this.speed = 1;
                break;
            case 'Steel':
                this.hp = 1500;
                this.speed = 0;
                break;
        }
        this.maxhp = this.hp;
    }

    cast(spell,target,caster=this) {

            spell = this.spellbook[spell];
    
            queue.queue.push([this.speed,caster,target,spell]);

             
        }

    action(target,spell,trueDmg=0) {

        if (this.hanging.stun.length) {

            console.log(`<p class="stunned log"> >>${this.name} cannot move!</p>`);
            this.hanging.stun.splice(0,1);

        } else {

            if (spell) {
                
                spell.aoe ? console.log(`<p class="casting log"><img src="../data/images/q.png" height="6px"/><img src="../data/images/q.png" height="10px"/> ${this.name} cast ${spell.title}</p>`) : 
                spell.aoe === false ? console.log(`<p class="casting log"><img src="../data/images/q.png" height="6px"/><img src="../data/images/q.png" height="10px"/> ${this.name} cast ${spell.title} on ${target.name}</p>`) : null;
                
                damageCalculator(this,target,spell) === true ? this.mana -= spell.cost : null;
            
            };
            
            if (trueDmg) { target.hp -= trueDmg ; return trueDmg };

        }

    }

}

let e = ['Fire','Ice','Dark','Light','Steel']

let p1 = new Player(RandomName(),RandomName(e));
let p2 = new Player(RandomName(),RandomName(e));
let p3 = new Player(RandomName(),RandomName(e));
let p4 = new Player(RandomName(),RandomName(e));
let p5 = new Player(RandomName(),RandomName(e));
let p6 = new Player(RandomName(),RandomName(e));

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

// let board1 = new Board(50,1,...Object.values(team1),...Object.values(team2));
// p1.name += 'p1';p2.name += 'p2';p3.name += 'p3';p4.name += 'p4';p5.name += 'p5';p6.name += 'p6';
let board1 = new Board(50,1,...Object.values(team1),...Object.values(team2));
let board2 = new Board(10,1,...Object.values(team1),...Object.values(team2));
let t1 = board1.teams.team1; let t2 = board1.teams.team2;

// console.log(p1.name,p2.name,p3.name,p4.name,p5.name,p6.name)

export { Player , board1 , board2, t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 }