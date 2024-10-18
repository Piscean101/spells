import { queue } from "./combat.js";
// ATTACH QUEUE TO BOARD
// IMPORT NAMES TO PLAYER AND DECLARE PLAYERS THERE 
///// DIFFERENT GAME MODES VIA BOARD INIT
    /// i. Swap a random spell end of every round

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

            this.teams.roster = this.teams.team1.concat(this.teams.team2);

            this.teams.roster.forEach(e => { e.mana = this.settings.manaLevel });

        };

        this.init();

        this.nextRound();

    }

    addManaAll(n) {
        
        this.teams.roster.forEach(e => {

            e.mana += n

        });

    }

    endGame(result=null,winner=null) {

        console.log('game over');
        
    }
    
    gameStatus() {
        
        let survivors = this.teams.roster.filter(e => e.hp > 0);

        survivors.length == 0 ? this.endGame('draw') :
        survivors.length == 1 ? this.endGame('win',survivors) : null;
        
    }
    
    nextRound(mana=this.settings.manaGrowth) {

        queue.dequeue();

        this.gameStatus();

        this.upkeep(mana);

        console.log(`\n *************** ROUND ${this.settings.round} *************** \n`);

        this.showTeams();

    }

    showTeams() {

        console.log(...this.teams.roster)

    }

    upkeep(mana) {

        let n;

        for (const tm of this.teams.roster) {

            tm.hanging.charms = tm.hanging.charms.filter(e => { return e.used == false });
            
            tm.hanging.wards = tm.hanging.wards.filter(e => { return e.used == false });

            tm.hanging.protection = tm.hanging.protection.filter(e => { return e.used == false });

            tm.hanging.damage = tm.hanging.damage.filter(e => { return e[0].length });

            tm.hanging.damage.forEach(e => {

                n = e[0].pop();

                tm.hp += n;

                n > 0 ? console.log(`\n ${tm.name} Restored {${n}} health`) : console.log(`\n ${tm.name} Damaged by { ${e[1]} } {${-n}}`);

                tm.hp > tm.maxhp ? tm.hp = tm.maxhp : null;

            });

        }

        this.settings.round++;

        this.addManaAll(mana);

    }

}
