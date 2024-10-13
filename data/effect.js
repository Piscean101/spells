let AddMana = (target,n) => {

    let result = 0;

    while (result < n) {

        target.mana++;
        result++;

    }

    console.log(`Added ${result} mana to ${target.name}'s mana pool`);

}

let Charm = (target,name,n,type='Damage',p=false,i=false) => {

    let charms = target.hanging.charms;

    if (charms.length < 7) { 

        charms.push({ name: name , effect: n , type: type , permanent: p , indestructible: i });
        console.log(`Added ${name} {${type} ${n}} to ${target.name}`);

    }

    else { 

        console.log('Charm limit reached!');  

    }
    
    return charms;

}

let Drain = (target,damage,rate) => {

}

let DestroyMana = (target,n,siphon=false) => {

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
    
        console.log(`Destroyed ${result} mana in ${target.name}'s mana pool`);

        if (siphon) {

            console.log(`${result} mana added to your mana pool`);

        }

    }

    return result;
 
}

let Heal = (target,n) => {

    let result;

    n > 0 ? result = `Healed ${target.name} from ${target.hp} to ${target.hp + n} { +${n} }` : result = `Heal reduced to 0`;
    
    target.hp += n;

    console.log(result);

}

let Indestructible = (target,type='Ward') => {

        let enchantment;

        type == 'Ward' ? enchantment = target.hanging.wards : 
        type == 'Charm' ? enchantment = target.hanging.charms : null ;

        if (enchantment.length) {

            enchantment[enchantment.length-1].indestructible = true;
            console.log(`${target.name}'s ${type} is now Indestructible`);

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

        console.log(isIndestructible(charms[i]))

        if (!isIndestructible(charms[i])) {

            console.log(`Removed ${charms[i].name} { ${charms[i].type} ${charms[i].effect} } `)
            charms.splice(i,1);

        }

    }

    return charms;
}

let RemoveCharmAll = (target) => {

    let [charms,point] = [target.hanging.charms,null];

    for (let i = 0; i <= charms.length; i++) {

        point = charms.shift();
        isIndestructible(point) ? charms.push(point) : null;

    }

    return charms;
}

let RemoveWard = (target,n=1) => {

    let [wards,count] = [target.hanging.wards,0];

    for (let i = wards.length-1 ; i >= 0 && count < n ; i--) {

        console.log(isIndestructible(wards[i]))

        if (!isIndestructible(wards[i])) {

            console.log(`Removed ${wards[i].name} { ${wards[i].type} ${wards[i].effect} } `);
            wards.splice(i,1);

        }

    }

    return wards;
}


let RemoveWardAll = (target) => {

    let [wards,point] = [target.hanging.wards,null];

    for (let i = 0; i <= wards.length; i++) {

        point = wards.shift();
        isIndestructible(point) ? wards.push(point) : null;

    }

    return wards;
}

let Stun = (target,n) => {

    if (isProtected(target,'Stun').length) {

        console.log('Stun Blocked!');
        isProtected(target,'Stun').splice(0,1);

    } else {

        for(let i = 0; i < n; i++) {

            target.hanging.stun.push(1);

        }

        console.log(`Stunned ${target.name} for ${n} round(s)`)
        Protect(target,'Stun Block','Stun');

    }

}
 
let Ward = (target,name,n,type='Absorb',p=false,i=false) => {

    let wards = target.hanging.wards;

    if (wards.length < 7) { 

        wards.push({ name: name , effect: n , type: type , permanent: p , indestructible: i });
        console.log(`Added ${name} {${type} ${n}} to ${target.name}`);

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
    Heal: Heal,
    Indestructible: Indestructible,
    Protect: Protect,
    RemoveCharm: RemoveCharm,
    RemoveCharmAll: RemoveCharmAll,
    RemoveWard: RemoveWard,
    RemoveWardAll: RemoveWardAll,
    Stun: Stun,
    Ward: Ward
}

let tower = {
    name: 'Deondre',
    hp: 1000,
    mana: 50,
    hanging: {
        charms: [],
        damage: [],
        protection: [],
        stun: [],
        wards: []
    }
}

// Ward(tower,'Feint',5,'Trap',false,false);
// Ward(tower,'Bulwark',500,'Absorb',false,true);
// Ward(tower,'Bulwark',750,'Absorb',false,true);
// Charm(tower,'Fury',100,'Damage',false,true);
// Charm(tower,'Fury',100,'Damage',true,true);
// Ward(tower,'Absorb',100,'Absorb',true,true);
// Stun(tower,2);
// Protect(tower,'Stun Block','Stun');
// Stun(tower,1);
// Stun(tower,1);
// Protect(tower,'Stun Block','Stun');
// Protect(tower,'Stun Block','Stun');
// Stun(tower,2);
// Protect(tower,'Stun Block','Damage');
// console.log(...[tower.hanging]);
// DestroyMana(tower,5);
// AddMana(tower,3);
// Protect(tower,'Mana Shield','Mana');
// DestroyMana(tower,6000);
// tower.hanging.protection.splice(0,1);
// AddMana(tower,1);
// console.log(tower);
// console.log(isProtected(tower,'Mana'))

// console.log(isProtected(tower,'Stun'))