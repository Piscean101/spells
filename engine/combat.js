import { spellCatalogue } from "../data/catalogue.js";
import { effectCatalogue } from "../data/effect.js";

export function checkMana(caster,spell) {

    return caster.mana >= spell.cost ? true : false;

}

export function damageCalculator(caster,target,spell) {

    if (spell.aoe) {

        console.log(`${caster.name} cast ${spell.title}!`);

        let [singletarget,team] = [spell,target];
        singletarget.aoe = false;

        for (const player of team) {

            caster.castSpell(player,singletarget);

        }

    } else {

        if (spell.effect) {

            spell.effect.forEach(e => {

                if (e[0] == effectCatalogue.DestroyMana && e[1][1] == 'mana') {

                    caster.mana += e[0](target,...e[1])

                } else {

                    e[0](target,...e[1]);

                }

            })

        }
        
        if (spell.ot) {

            console.log(`${target.name} is afflicted by ${spell.title} for ${spell.ot} rounds`);
            target.hanging.damage.push(overTime(spell.power,spell.ot,spell.title));

        } else if (checkMana && !spell.ot && spell.power && !spell.aoe) {

            console.log(`${target.name} took { ${spell.power} } points of damage!`);
            caster.mana -= spell.cost;
            target.hp -= spell.power;

        }
        
    }

}

export function damageRoll(spell) {

    let roll = Math.floor(Math.random()*25);

    return roll + spell.power;

}

export function overTime(n,rounds,source='N/A') {

    let result = [];

    for (let i = 0; i < rounds; i++) {
        result.push(Math.floor(n/rounds));
    }

    return [result,source];

}