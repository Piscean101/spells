// ATTACH QUEUE TO BOARD
// IMPORT NAMES TO PLAYER AND DECLARE PLAYERS THERE 
///// DIFFERENT GAME MODES VIA BOARD INIT

export class Board {

    constructor(...players) {

        this.teams = {

            team1: [],
            team2: [],
            roster: []

        }

        this.settings = {
                
            manaLevel: 0, manaGrowth: 1, round: 0,

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

        this.upkeep(mana);

        console.log('\n',`*************** ROUND ${this.settings.round} ***************`,'\n',...this.teams.roster);

    }

    upkeep(mana) {

        for (const teammate of this.teams.roster) {

            teammate.hanging.charms = teammate.hanging.charms.filter(e => { return e.used == false });
            
            teammate.hanging.wards = teammate.hanging.wards.filter(e => { return e.used == false });

        }

        this.settings.round++;

        this.addManaAll(mana);

    }

}
