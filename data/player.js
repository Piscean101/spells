import { Board } from "../engine/board.js";
import { damageCalculator } from "../engine/damageCalc.js";
import { queue } from "../engine/combat.js";
import { spellCatalogue } from "./catalogue.js";
import { boyName , girlName , lastName , RandomName } from "./name.js";
// import { effectCatalogue } from "./effect.js";

class Player {
    constructor(name,element,hp = 5000,mana=0) {
        this.name = name; this.hp = hp; this.mana = mana; this.speed = 0; this.maxhp = hp; this.mates = [];
        this.hanging = {
            charms: [], damage: [], protection: [], stun: [], wards: []
        }
    }

    cast(spell,target,caster=this) {

            spell = spellCatalogue.findSpell(spell);
    
            queue.queue.push([this.speed,caster,target,spell]);

    }

    action(target,spell,trueDmg=0) {

        if (this.hanging.stun.length) {

            console.log(`\n >>${this.name} cannot move!`);
            this.hanging.stun.splice(0,1);

        } else {

            if (spell) {
                
                spell.aoe ? console.log(`\n %c ${this.name} cast ${spell.title}`,'color:green;font-size:18px;font-weight:bold') : 
                spell.aoe === false ? console.log(`\n %c ${this.name} cast ${spell.title} on ${target.name}`,'color:green;font-size:15px;font-weight:bold') : null;
                
                damageCalculator(this,target,spell) === true ? this.mana -= spell.cost : null 
            
            };
            
            if (trueDmg) { target.hp -= trueDmg ; return trueDmg };

        }

    }

}

let p1 = new Player(RandomName());
let p2 = new Player(RandomName());
let p3 = new Player(RandomName());
let p4 = new Player(RandomName());
let p5 = new Player(RandomName());
let p6 = new Player(RandomName());

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

let board1 = new Board(3,2,...Object.values(team1),...Object.values(team2));
let t1 = board1.teams.team1; let t2 = board1.teams.team2;

export { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 }