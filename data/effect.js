let randomNumber = (max,...exclusions) => {
    let result = Math.ceil(Math.random()*max);
    while (exclusions.includes(result)) {
        result = Math.ceil(Math.random()*max);
    }
    return result;
}

let overTime = (n,rounds,source='N/A',heal=false) => {

    let result = [];

    for (let i = 0; i < rounds; i++) {

        heal ? result.push(Math.floor(-n/rounds)) : result.push(Math.floor(n/rounds));

    }

    return [result,source];

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let AddMana = (target,n=1) => {

    let result = 0;

    n = randomNumber(n,0);

    while (result < n) {

        target.mana++;
        result++;

    }

    console.log(`Added {${result}} mana to ${target.name}'s mana pool`);

}

let Charm = (target,name,n,type='Damage',p=false,i=false,used=false) => {

    let charms = target.hanging.charms;

    if (charms.length < 7) { 

        charms.push({ name: name , effect: n , type: type , enchant: 'Charm' , permanent: p , indestructible: i , used: used });
        console.log(`Added ${name} { ${type} CHARM ${n > 0 ? `+${n}` : n} ${p ? 'PERM ' : [...([0 ? [] : []])]}} to ${target.name}`);

    }

    else { 

        console.log('Charm limit reached!');  

    }
    
    return charms;

}

let Drain = (target,n,rate,result=0) => {

    result = Math.floor(n * rate);

    console.log(`Drained ${target.name} of {${n}} health and recovered {${result}}`);

    return [n,result];

}

let DestroyMana = (target,n=1,siphon=false) => {

    let result = 0;

    if (isProtected(target,'Mana').length) {

        console.log(`Stat reduction Blocked!`);
        isProtected(target,'Mana').splice(0,1);
        

    } else if (isProtected(target,'Stat').length) {
    
        console.log(`Stat reduction Blocked!`);
        isProtected(target,'Stat').splice(0,1);
    
    } else {

        while (target.mana > 0 && result < n) {
    
            target.mana--;
            result++;
    
        }
    
        console.log(`Destroyed ${result} mana in ${target.name}'s mana pool { Remaining: ${target.mana} }`);

        if (siphon) {

            console.log(`${result} mana added to caster's mana pool`);

        }

    }

    return result;
 
}

let Heal = (target,n,ot=0) => {

    let result;

    n = Math.floor(n);

    if (n > 0 && ot) {

        result = `${target.name} is recovering {${n}} health over ${ot} rounds`;
        target.hanging.damage.push(overTime(-n,ot,null,true));
    
    } else if (n <= 0) {

        result = `Heal reduced to 0`;

    } else {
        
        result = `${target.name} recovered { ${n} } health`;

        target.hp += n; 
        
        target.hp > target.maxhp ? target.hp = target.maxhp : null ;
    }

    console.log(result);

}

let Indestructible = (target,type='Ward') => {

        let enchantment;

        type == 'Ward' ? enchantment = target.hanging.wards : 
        type == 'Charm' ? enchantment = target.hanging.charms : null ;

        if (enchantment.length) {

            enchantment[enchantment.length-1].indestructible = true;
            console.log(`${target.name}'s ${type} ${enchantment[enchantment.length-1].name} is now Indestructible`);

        } else {
            
            console.log('No applicable target found for Indestructible');
            
        }

}

let Protect = (target,name,type='Stun',p=false,i=false) => {

    let protection = target.hanging.protection;

    protection.push({ name:name , type: type , permanent: p , indestructible: i });

    console.log(`Added ${name} to ${target.name}`);

}

let RemoveCharm = (target,n=1) => {

    let [charms,count] = [target.hanging.charms,0];

    for (let i = charms.length-1 ; i >= 0 && count < n ; i--) {

        if (!isIndestructible(charms[i])) {

            console.log(`Removed ${charms[i].name} { ${charms[i].type} ${charms[i].effect} } `)
            charms.splice(i,1);

        }

    }

    return charms;
}

let RemoveCharmAll = (target) => {

    let [charms,point,result] = [target.hanging.charms,null,0];

    for (let i = 0; i <= charms.length; i++) {

        if (charms.length) {

            point = charms.shift();
            isIndestructible(point) ? charms.push(point) : result++;

        }

    }

    console.log(`Removed ${result} charms`);

    return charms;
}

let RemoveWard = (target,n=1) => {

    let [wards,count] = [target.hanging.wards,0];

    for (let i = wards.length-1 ; i >= 0 && count < n ; i--) {

        if (!isIndestructible(wards[i])) {

            console.log(`Removed ${wards[i].name} { ${wards[i].type} ${wards[i].effect} } `);
            wards.splice(i,1);

        }

    }

    return wards;
}

let RemoveWardAll = (target) => {

    let [wards,point,result] = [target.hanging.wards,null,0];

    for (let i = 0; i <= wards.length; i++) {

        if(wards.length) {

            point = wards.shift();
            isIndestructible(point) ? wards.push(point) : result++;

        }
        
    }

    console.log(`Removed ${result} wards`);

    return wards;
}

let Sacrifice = (/*incomplete*/) => {



}

let Speed = (target,n=1,siphon=0) => {

    let result = 0;

    if (isProtected(target,'Speed').length) {

        console.log(`Stat reduction Blocked!`);
        isProtected(target,'Speed').splice(0,1);
        

    } else if (isProtected(target,'Stat').length) {
    
        console.log(`Stat reduction Blocked!`);
        isProtected(target,'Stat').splice(0,1);
    
    } else {

        n > 0 ? console.log(`Increased ${target.name}'s speed {+${Math.abs(n)}}`) :
        n < 0 ? console.log(`Decreased ${target.name}'s speed {${n}}`) : null;
        target.speed += n;
        target.speed < 0 ? target.speed = 0 : null;

    }

    siphon ? result = siphon : result = n;

    return result;
 
}

let Stun = (target,n) => {

    if (isProtected(target,'Stun').length) {

        console.log('Stun Blocked!');
        isProtected(target,'Stun').splice(0,1);
        // target.hanging.protection.filter(e => { return  e.type == 'Stun' })[0].used = true;

    } else {

        for(let i = 0; i < n; i++) {

            target.hanging.stun.push(1);

        }

        console.log(`Stunned ${target.name} for ${n} round(s)`)
        Protect(target,'Stun Block','Stun');

    }

}
 
let Ward = (target,name,n,type='Damage',p=false,i=false,used=false) => {

    let wards = target.hanging.wards;

    if (wards.length < 7) { 

        wards.push({ name: name , effect: n , type: type , enchant: 'Ward' , permanent: p , indestructible: i , used: used });
        console.log(`Added ${name} { ${type} WARD ${n > 0 ? `+${n}` : n} ${p ? 'PERM ' : [...([0 ? [] : []])]}} to ${target.name}`);

    }

    else { 

        console.log('Ward limit reached!');     

    }
    
    return wards;

}

let isIndestructible = (e) => {

    return e.indestructible;

}

let isProtected = (e,type) => {

    return e.hanging.protection.filter(e => { return e.type == type });

}

export let effectCatalogue = {
    AddMana: AddMana,
    Charm: Charm,
    DestroyMana: DestroyMana,
    Drain: Drain,
    Heal: Heal,
    Indestructible: Indestructible,
    isIndestructible: isIndestructible,
    isProtected: isProtected,
    Protect: Protect,
    RemoveCharm: RemoveCharm,
    RemoveCharmAll: RemoveCharmAll,
    RemoveWard: RemoveWard,
    RemoveWardAll: RemoveWardAll,
    Sacrifice: Sacrifice,
    Speed: Speed,
    Stun: Stun,
    Ward: Ward
}