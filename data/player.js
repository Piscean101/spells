import { damageCalculator } from "../engine/combat.js";
import { queue } from "../engine/engine.js";
import { spellCatalogue } from "./catalogue.js";

export class Player {
    constructor(name,hp = 1000,mana=0) {
        this.name = name; this.hp = hp; this.mana = mana; this.speed = 0;
        this.hanging = {
            charms: [], damage: [], protection: [], stun: [], wards: []
        }
    }

    cast(target,spell,caster=this) {

        spell = spellCatalogue.findSpell(spell);

        queue.queue.push([this.speed,caster,target,spell]);

    }

    action(target,spell) {

        damageCalculator(this,target,spell) === true ? this.mana -= spell.cost : null;

    }

}