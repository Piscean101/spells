import { Board } from "../engine/board.js";
import { effectCatalogue } from "../data/effect.js";
import { spellCatalogue } from "../data/catalogue.js";
import { Player , board1 , t1 , t2 , p1 , p2 , p3 , p4 , p5 , p6 } from "../data/player.js";
import { applyBuffs , checkBuffs , queue } from "../engine/combat.js";

board1.nextRound(2);
p1.cast('Prey',p2);
queue.dequeue();
board1.nextRound();