import { queue } from "./combat.js";
import { spellCatalogue } from "../data/catalogue.js";
import { randomChoice } from "../data/math.js";

///// ESTABLISH UNIQUE BOARDS WITH UNIQUE INITS CALL THE FIRST BOARD STANDARDBOARD
///// DIFFERENT GAME MODES VIA BOARD INIT
    /// i. Swap a random spell end of every round
    /// ii. start 1 spell add random spell end of every round
    /// iii. cycle a spell for 1 mana or your turn
    //// iv. draw spell every round choose to cast spell on round or draw extra spell

export class Board {

    constructor(manaLevel=0,manaGrowth=1,...players) {

        this.teams = {

            team1: [],
            team2: [],
            roster: []

        }

        this.settings = {
                
            manaLevel: manaLevel, manaGrowth: manaGrowth, round: 0,

        }

        this.storage = []; this.holder;

        this.init = () => {

            this.settings.round++;

            for (const player of players) {

                if (this.teams.team1.length < 3) {

                    this.teams.team1.push(player);

                } else {

                    this.teams.team2.push(player);

                }

            }

            this.teams.roster = this.teams.team1.concat(this.teams.team2);

            this.teams.roster.forEach(e => { e.mana = this.settings.manaLevel });

            for (const t of Object.values(this.teams).splice(0,2)) {

                for (const p of t) {

                    p.mates.push(...t);

                    for(let i = 0 ; i < 5 ; i++) {

                        this.holder = spellCatalogue.pickRandom(1,p.element);

                        this.storage.includes(this.holder) ? i-- : this.storage.push(this.holder);

                    }

                    p.spellbook = this.storage;

                    this.storage = [];

                    console.log(p.name,...p.spellbook)

                }

            }

        };

    }

    addManaAll(n) {
        
        this.teams.roster.forEach(e => {

            e.mana += n

        });

    }

    endGame(result=null,winner=null) {

        winner ? console.log(`THE WINNER IS ${winner.name}!`) : console.log(">>> game over");
        
    }
    
    gameStatus() {
        
        let survivors = this.teams.roster.filter(e => e.hp > 0);

        survivors.length == 0 ? this.endGame('draw') :
        survivors.length == 1 ? this.endGame('win',survivors) : null;
        
    }
    
    nextRound(mana=this.settings.manaGrowth) {

        console.log(`<p id="nextRound">*************** ROUND ${this.settings.round} ***************</p>`);
        
        this.upkeep(mana);

        queue.dequeue();

        this.gameStatus();

        // this.showTeams();

    }

    showTeams() {

        this.teams.roster.forEach(e => {
             console.log(e.name);
             console.log(e.hanging)
        })

    }

    upkeep(mana) {

        let n;

        for (const tm of this.teams.roster) {

            tm.hanging.charms = tm.hanging.charms.filter(e => { return e.used == false });
            
            tm.hanging.wards = tm.hanging.wards.filter(e => { return e.used == false });

            // tm.hanging.protection = tm.hanging.protection.filter(e => { return e.used == false });

            tm.hanging.damage = tm.hanging.damage.filter(e => { return e[0].length });

            tm.hanging.damage.forEach(e => {

                n = e[0].pop();

                tm.hp += n;

                n > 0 ? console.log(`\n >${tm.name} Restored {${n}} health`) : console.log(`\n >${tm.name} Damaged by { ${e[1]} } {${-n}}`);

                tm.hp > tm.maxhp ? tm.hp = tm.maxhp : null;

            });

        }

        this.settings.round++;

        this.addManaAll(mana);

    }

}
