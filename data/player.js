import { spellCatalogue } from "./catalogue.js";
import { checkMana , damageCalculator, overTime } from "../engine/combat.js";
import { effectCatalogue } from "./effect.js";
import { randomChoice } from "./math.js";

export class Player {
    constructor(name,hp = 1000,mana=5) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.hanging = {
            charms: [],
            damage: [],
            protection: [],
            stun: [],
            wards: []
        }
    }

    castSpell(target,spell) {

        damageCalculator(this,target,spell);

        // console.log(`${this.name} cast ${spell.title}!`);

        // if (spell.aoe) {

        //     console.log(`${this.name} cast ${spell.title}!`);

        //     let [singletarget,team] = [spell,target];
        //     singletarget.aoe = false;

        //     for (const player of team) {

        //         this.castSpell(player,singletarget);

        //     }

        // } else {

        //     if (spell.effect) {

        //         spell.effect.forEach(e => {

        //             if (e[0] == effectCatalogue.DestroyMana && e[1][1] == 'mana') {
    
        //                 this.mana += e[0](target,...e[1])
    
        //             } else {
    
        //                 e[0](target,...e[1]);
    
        //             }
    
        //         })

        //     }
            
        //     if (spell.ot) {
    
        //         console.log(`${target.name} is afflicted by ${spell.title} for ${spell.ot} rounds`);
        //         target.hanging.damage.push(overTime(spell.power,spell.ot,spell.title));
    
        //     } else if (checkMana && !spell.ot && spell.power && !spell.aoe) {
    
        //         console.log(`${target.name} took { ${spell.power} } points of damage!`);
        //         this.mana -= spell.cost;
        //         target.hp -= spell.power;
    
        //     }
            
        // }

    }

}

export class Board {

    constructor(...players) {

        this.teams = {

            team1: [],
            team2: []

        }

        this.hanging = [],
        this.round = 0,

        this.init = () => {

            let i = 0;

            for (const player of players) {

                if (i == 0) {

                    this.teams.team1.push(player);
                    i = 1;

                } else {

                    this.teams.team2.push(player);
                    i = 0;

                }

            }

            // console.log(Object.values(this.teams))

        };

        this.init();

    }

}

// let [player1,player2,player3,player4] = [new Player('Bob'),new Player('Sharon'),new Player('Marcus'),new Player('Steve')];
// let board1 = new Board(player1,player2,player3,player4);

// console.log(Object.entries(board1.teams).filter(e => { return e[1].includes(player4)}));