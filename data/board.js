import { randomChoice } from "./math.js";

export class Board {

    constructor(...players) {

        this.teams = {

            team1: [],
            team2: [],
            roster: []

        }

        this.settings = {
                
            manaLevel: 1, manaGrowth: 1, round: 0,

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

    endGame(result,winner=null) {

        console.log('game over');
        
    }
    
    gameStatus() {
        
        let survivors = this.teams.roster.filter(e => e.hp > 0);

        survivors.length == 0 ? this.endGame('draw') :
        survivors.length == 1 ? this.endGame('win',survivors) : null;
        
    }
    
    nextRound(mana=this.settings.manaGrowth) {

        this.settings.round++;

        this.addManaAll(mana);

        console.log('\n',`*************** ROUND ${this.settings.round} ***************`,'\n',...this.teams.roster);

    }

}