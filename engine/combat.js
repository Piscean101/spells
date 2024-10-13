import { spellCatalogue } from "../data/catalogue.js";
import { effectCatalogue } from "../data/effect.js";

function checkMana(caster,spell) {

    return caster.mana >= spell.cost ? true : false;

}

function damageRoll(n) {

    let roll = Math.floor(Math.random()*n); return roll;

}

export function overTime(n,rounds,source='N/A',heal=false) {

    let result = [];

    for (let i = 0; i < rounds; i++) {

        heal ? result.push(Math.floor(n/rounds)) : result.push(Math.floor(-n/rounds));

    }

    return [result,source];

}

export function randomSpell() {




}

export function damageCalculator(caster,target,spell) {

    ///CHECK FOR BUFFS DEBUFFS <----------------------------------------------------------

    let result = false;

    if (checkMana(caster,spell)) {

        let outgoing = spell.power + damageRoll(25);

        if (spell.aoe) {
    
            console.log(`${caster.name} cast ${spell.title}!`);
    
            let [singletarget,team,temp] = [spell,target,spell.cost];
            [singletarget.aoe,singletarget.cost] = [null,0];
    
            for (const player of team) {
    
                caster.castSpell(player,singletarget);
    
            }

            [singletarget.aoe,singletarget.cost] = [true,temp];
    
        } else {

            spell.aoe === null ? null : console.log(`${caster.name} cast ${spell.title}!`)
    
            if (spell.effect) {
    
                spell.effect.forEach(e => {
    
                    if (e[0] == effectCatalogue.DestroyMana && e[1][1] == 'mana') {
    
                        caster.mana += e[0](target,...e[1]);
    
                    } else {
    
                        e[0](target,...e[1]);
    
                    }
    
                })
    
            }
            
            if (spell.ot && spell.power) {
    
                console.log(`${target.name} is afflicted by ${spell.title} damage {${spell.power}} over ${spell.ot} rounds`);
                target.hanging.damage.push(overTime(spell.power,spell.ot,spell.title));
    
            } else if (!spell.ot && spell.power && !spell.aoe) {
    
                console.log(`${target.name} took { ${outgoing} } points of damage!`);
                target.hp -= outgoing;
    
            } 
            
        }

        result = true;

    } else { console.log("Insufficient Mana") }

    return result;

};

