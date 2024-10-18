import { spellCatalogue } from "../data/catalogue.js";
import { effectCatalogue } from "../data/effect.js";
import { applyBuffs , checkBuffs , checkMana , damageRoll , overTime } from "./combat.js";

export function damageCalculator(caster,target,spell) {

    let result = false;

    if (checkMana(caster,spell)) {

        spell.aoe === true ? console.log(`\n ${caster.name} cast ${spell.title}!`) : 
        spell.aoe === false ? console.log(`\n ${caster.name} cast ${spell.title}!`) : null;

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
        
        outgoing = applyBuffs(spell.power,caster,target,spell.types)[0] + damageRoll(30);

        healOut = applyBuffs(spell.effect[0][1][0],caster,target,spell.types)[0] + damageRoll(15);

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
    
                console.log(`${target.name} is afflicted by ${spell.title} damage {${outgoing}} over ${spell.ot} rounds`);

                target.hanging.damage.push(overTime(outgoing,spell.ot,spell.title));
    
            } else if (!spell.ot && spell.power != 'Drain' && spell.power) {
    
                console.log(`Dealt { ${outgoing} } damage to ${target.name}`);
                
                target.hp -= outgoing;
    
            } 

            if (spell.effect) {
    
                spell.effect.forEach(e => {
    
                    if (e[0] == effectCatalogue.DestroyMana && e[1][1] == 'mana') {
    
                        caster.mana += e[0](target,...e[1]);
    
                    } else {

                        if (e[0] == effectCatalogue.Drain) {

                            let d = e[0](target,...e[1]);

                            target.hp -= d[0]; caster.hp += d[1]; 

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

