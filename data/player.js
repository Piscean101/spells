import { spellCatalogue } from "./catalogue.js";
import { checkMana , overTime } from "../engine/combat.js";
import { effectCatalogue } from "./effect.js";

export class Player {
    constructor(name,hp,mana) {
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

        console.log(`${this.name} cast ${spell.title}!`);

        if (checkMana && !spell.ot && spell.power) {

            console.log(`${target.name} took { ${spell.power} } points of damage!`);
            this.mana -= spell.cost;
            target.hp -= spell.power;

        }

        if (spell.ot) {

            console.log(`${target.name} is afflicted by ${spell.title} for ${spell.ot} rounds`);
            target.hanging.damage.push(overTime(spell.power,spell.ot,spell.title));

        }

        if (spell.effect) {
            
            spell.effect.forEach(e => {

                if (e[0] == effectCatalogue.DestroyMana && e[1][1] == 'mana') {

                    this.mana += e[0](target,...e[1])

                } else {

                    e[0](target,...e[1]);

                }

            })

        }

        console.log('\n',this,target,'\n');

    }

}
