import { Spell , Attack , Instant , AoE } from './spell.js';
import { effectCatalogue } from './effect.js';

// AoE
let Blizzard = new AoE(3,'Blizzard','Ice',80,300,null,3);
let ChainsawMassacre = new AoE(7,'Chainsaw Massacre','Steel',80,450,[[effectCatalogue.RemoveWard,[2]]]);
let WarCry = new AoE(3,'War Cry','Fire',75,0,[[effectCatalogue.Charm,['War Cry',300,'Damage',true]]]);
let Splendor = new AoE(3,'Splendor','Light',90,0,[[effectCatalogue.Heal,[420]]]);
// OVER-TIMES
let BrainFreeze = new Attack(5,'Brain Freeze','Ice',75,585,[[effectCatalogue.Stun,[2]]],3);
let Flamethrower = new Attack(5,'Flamethrower','Fire',75,835,null,3);
// ATTACKS
let Slash = new Attack(3,'Slash','Steel',80,240);
let Grindhouse = new Attack(3,'Grindhouse','Steel',80,265);
let Iceberg = new Attack(4,'Iceberg','Ice',80,350,[[effectCatalogue.DestroyMana,[1,'mana']]]);
// INSTANTS
let Absorb = new Instant(0,'Absorb','Light',100,[[effectCatalogue.Ward,['Bulwark',120,'Absorb']]]);
let Fortress = new Instant(3,'Fortress','Steel',100,[[effectCatalogue.Ward,['Fortress',500,'Absorb']]]);
let Fury = new Instant(0,'Fury','Fire',75,[[effectCatalogue.Charm,['Fury',100,'Damage']]]);
let Freeze = new Instant(2,'Freeze','Ice',80,[[effectCatalogue.Stun,[2]]]);
let Hibernate = new Instant(3,'Hibernate','Ice',80,[[effectCatalogue.Stun,[1]],[effectCatalogue.DestroyMana,[3]]]);
let Indestructible = new Instant(2,'Indestructible','Steel',80,[[effectCatalogue.Indestructible,['Ward']]]);
let Invoke = new Instant(3,'Invoke','Dark',85,[[effectCatalogue.RemoveWardAll]]);
let MiracleSentinel = new Instant(4,'Miracle Sentinel','Steel',80,[[effectCatalogue.Heal,[450]],[effectCatalogue.Indestructible,['Ward']]]);
let Paranoia = new Instant(3,'Paranoia','Dark',85,[[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Pinpoint = new Instant(0,'Pintpoint','Steel',100,[[effectCatalogue.Ward,['Pinpoint',-75,'Damage']]]);
let Shred = new Instant(2,'Shred','Steel',100,[[effectCatalogue.RemoveWard,[2]]]);
let Stun = new Instant(0,'Stun','Ice',100,[[effectCatalogue.Stun,[1]]]);
let StunBlock = new Instant(0,'Stun Block','Ice',100,[[effectCatalogue.Protect,['Stun Block','Stun']]]);
// HEALS


export let spellCatalogue = {

    Dark: [
        Invoke,
        Paranoia
    ],
    Fire: [
        Flamethrower,
        Fury,
        WarCry
    ],
    Ice: [
        Blizzard,
        BrainFreeze,
        Freeze,
        Hibernate,
        Iceberg,
        Stun,
        StunBlock
    ],
    Light: [
        Absorb,
        Splendor
    ],
    Steel: [
        ChainsawMassacre,
        Fortress,
        Grindhouse,
        Indestructible,
        MiracleSentinel,
        Pinpoint,
        Shred,
        Slash
    ],

    checkCatalogue(element=null) {

        let [total,catalogue] = [0,Object.entries(this).splice(0,5)];
    
        if (element) {
    
            let filter = catalogue.filter(e => { return e[0] == element })[0][1];
    
            console.log(filter);
    
            total = filter.length;
    
        } else {
    
            for (const element of catalogue) {
        
                console.log(`${element[0].toUpperCase()} ${element[1].length}`,'\n',...element[1]);
            //   console.  log(element);
                total += element[1].length;
        
            }
    
        }
    
        console.log(`TOTAL ${total}`);
    
    },

    findSpell(name) {

        let result = [];

        Object.values(spellCatalogue).forEach(e => {

            for (const i of Object.values(e)) {

                result.push(i);

            }

        });

        return result.filter(spell => { return spell.title == name })[0];

    }

};

// spellCatalogue.checkCatalogue();