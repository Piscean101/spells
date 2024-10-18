import { spellCatalogue } from "../data/catalogue.js";
import { effectCatalogue } from "../data/effect.js";
import { applyBuffs , checkBuffs , checkMana , damageRoll , overTime } from "./combat.js";

export function damageCalculator(caster,target,spell) {

    let result = false;

    if (checkMana(caster,spell)) {

        // spell.aoe === true ? console.log(`\n ${caster.name} cast ${spell.title} on ${target.name}`) : 
        // spell.aoe === false ? console.log(`\n ${caster.name} cast ${spell.title} on ${target.name}`) : null;

        if (!spell.aoe) { 
        
        if (applyBuffs(spell.power,caster,target,spell.types)[1]) {

            for (let i = 0 ; i < applyBuffs(spell.power,caster,target,spell.types)[1].length ; i++) {

                if (!spell.count || spell.count == 1) { 
                    
                    console.log(applyBuffs(spell.power,caster,target,spell.types)[1][i]);
                
                }

                }            

            }
        
        } 

        let outgoing; let healOut;
        
        outgoing = applyBuffs(spell.power,caster,target,spell.types)[0] + damageRoll(25);

        spell.effect ? healOut = applyBuffs(spell.effect[0][1][0],caster,target,spell.types)[0] + damageRoll(15) : 
        applyBuffs(spell.power,caster,target,spell.types)[0] + damageRoll(15);

        outgoing < 0 ? outgoing = 0 : null;

        if (spell.aoe) {
    
            let [singletarget,team,temp] = [spell,target,spell.cost];
            [singletarget.aoe,singletarget.cost,singletarget.count] = [null,0,0];
    
            for (const player of team) {
    
                singletarget.count++;
                caster.action(player,singletarget);
    
            }

            [singletarget.aoe,singletarget.cost] = [true,temp];
            delete singletarget.count;
    
        } else {

            if (spell.ot && spell.power) {

                if (effectCatalogue.isProtected(target,'DoT').length) {

                    console.log(`${target.name} was Immune!`);
                    target.hanging.protection.filter(e => { return e.type == 'DoT' })[0].used = true;

                } else {

                    console.log(`${target.name} is afflicted by ${spell.title} damage {${outgoing}} over ${spell.ot} rounds`);
    
                    target.hanging.damage.push(overTime(outgoing,spell.ot,spell.title)); } 
    
            } else if (!spell.ot && spell.power != 'Drain' && spell.power) {
    
                console.log(`Dealt { ${outgoing} } damage to ${target.name}`);
                
                target.hp -= outgoing;
    
            } 

            if (spell.effect) {
    
                spell.effect.forEach(e => {
    
                    if (e[0] == effectCatalogue.DestroyMana && e[1][1] == 'Siphon') {
    
                        caster.mana += e[0](target,...e[1]);
    
                    } else if (e[0] == effectCatalogue.Speed && e[1][1] == 'Siphon')  {

                        let result = Math.abs(e[0](target,...e[1]));
                        caster.speed += result;
                        console.log(`Increased ${caster.name}'s speed {+${result}}`);

                    } else {

                        if (e[0] == effectCatalogue.Drain) {

                            let d = applyBuffs(e[1][0],caster,target,spell.types)[0];

                            e[0](target,d,e[1][1]);

                            target.hp -= d; caster.hp += d; 

                            caster.hp > caster.maxhp ? caster.hp = caster.maxhp : null;

                        } else if (e[0] == effectCatalogue.Heal) {

                            !spell.ot ? e[0](target,healOut) : e[0](target,healOut,e[1][1]);

                        } else {

                            e[0](target,...e[1]);

                        }
    
                    }
    
                })
    
            } 
            
        }

        result = true;

    } else { console.log(`\nInsufficient Mana { ${caster.name} : ${spell.title} }`) }

    return result;

};

