export let queue = {

    queue: [],

    dequeue(q = this.queue) {

        q.sort((a,b) => { return b[0] - a[0] });
            
            q.forEach(e => {

                if (e[1].hp > 0) {

                    e[1].action(e[2],e[3]);
                    
                } 

                e[2].hp < 0 ? console.log(`<p class="defeat">${e[2].name} was defeated</p>`) : null ;
                
            });

        this.queue = [];

    }

}

export function checkMana(caster,spell) {

    return caster.mana >= spell.cost ? true : false;

}

export function applyBuffs(n,caster,target,type=['Heal']) {

    let result = []; let charms = caster.hanging.charms; let wards = target.hanging.wards;

    let targetbuffs = charms.concat(wards);

    targetbuffs.forEach(e => {

        let count = 0;

            count++;

            if (type.includes(e.type)) {
    
                n += e.effect;
    
                if(!e.indestructible && !e.permanent) {
    
                    e.used = true;
    
                }

                e.effect > 0 ? result.push(`${type[0]} boosted {${e.name}} {+${e.effect}}`) : 
                result.push(`${type[0]} reduced {${e.name}} {${e.effect}}`);
    
            }

    });

    return [n,result];

}

export function checkBuffs(target,position='Out',type='Damage') {

    let targetbuffs;

    position == 'Out' ? targetbuffs = target.hanging.charms : targetbuffs = target.hanging.wards;

    return targetbuffs;

}

export function damageRoll(n) {

    let roll = Math.floor(Math.random()*n); return roll;

}

export function overTime(n,rounds,source='N/A',heal=false) {

    let result = [];

    for (let i = 0; i < rounds; i++) {

        heal ? result.push(Math.floor(n/rounds)) : result.push(Math.floor(-n/rounds));

    }

    return [result,source];

}
