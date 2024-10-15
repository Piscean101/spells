import { Attack , Instant , AoE } from './spell.js';
import { effectCatalogue } from './effect.js';

// AoE
let BitterEnd = new AoE(6,'Bitter End','Dark',80,'Drain',[[effectCatalogue.Drain,[340,.5]],[effectCatalogue.Ward,['Excruciate',150,'Damage',true]]]);
let BlackHole = new AoE(7,'Black Hole','Dark',85,340,[[effectCatalogue.Charm,['Miasma',-200,'Heal',true]],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Blizzard = new AoE(3,'Blizzard','Ice',80,300,null,3);
let ChainsawMassacre = new AoE(7,'Chainsaw Massacre','Steel',80,450,[[effectCatalogue.RemoveWard,[2]]]);
let DivineIntervention = new AoE(6,'Divine Intervention','Light',90,0,[[effectCatalogue.Heal,[550]],[effectCatalogue.Ward,['Absorb',-500,'Damage']]]);
let Glimmers = new AoE(2,'Glimmers','Light',85,175);
let Grindhouse = new AoE(3,'Grindhouse','Steel',80,265);
let WarCry = new AoE(3,'War Cry','Fire',75,0,[[effectCatalogue.Charm,['War Cry',300,'Damage',true]]]);
let Splendor = new AoE(3,'Splendor','Light',90,0,[[effectCatalogue.Heal,[420]]]);
// OVER-TIMES
let BrainFreeze = new Attack(5,'Brain Freeze','Ice',75,585,[[effectCatalogue.Stun,[2]]],3);
let EnergyHelix = new Instant(2,'Energy Helix','Fire',75,[[effectCatalogue.Heal,[510,3]]],3);
let Flamethrower = new Attack(5,'Flamethrower','Fire',75,835,null,3);
let SolarFlare = new Attack(4,'Solar Flare','Light',90,600,null,6);
// ATTACKS
let Prey = new Attack(3,'Prey','Dark',85,'Drain',[[effectCatalogue.Drain,[290,.5]]]);
let DarkPact = new Attack(5,'Dark Pact','Dark',85,'Drain',[[effectCatalogue.Drain,[350,.5]],[effectCatalogue.Charm,['Condemn',-250,'Heal',true]]]);
let Guillotine = new Attack(7,'Guillotine','Steel',75,895);
let Slash = new Attack(3,'Slash','Steel',80,240);
let Iceberg = new Attack(4,'Iceberg','Ice',80,350,[[effectCatalogue.DestroyMana,[1,'mana']]]);
let NeedlePunch = new Attack(5,'Needle Punch','Steel',80,540,[[effectCatalogue.Ward,['Pinpoint',75,'Damage']]]);
let Thunderbolt = new Attack(4,'Thunderbolt','Fire',75,540);
// HEALS
let MiracleSentinel = new Instant(4,'Miracle Sentinel','Steel',80,[[effectCatalogue.Heal,[450]],[effectCatalogue.Indestructible,['Ward']]]);
// CHARMS
let Condemn = new Instant(2,'Condemn','Dark',85,[[effectCatalogue.Charm,['Condemn',-250,'Heal',true]]]);
let Entomb = new Instant(3,'Entomb','Ice',80,[[effectCatalogue.Charm,['Entomb',-300,'Damage',true]]]);
let Fury = new Instant(0,'Fury','Fire',75,[[effectCatalogue.Charm,['Fury',100,'Damage']]]);
let Miasma = new Instant(1,'Miasma','Dark',100,[[effectCatalogue.Charm,['Miasma',-200,'Heal',true]]]);
let Paranoia = new Instant(3,'Paranoia','Dark',85,[[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
// WARDS
let Absorb = new Instant(0,'Absorb','Light',100,[[effectCatalogue.Ward,['Absorb',-120,'Damage']]]);
let Excruciate = new Instant(0,'Excruciate','Dark',85,[[effectCatalogue.Ward,['Excruciate',150,'Damage',true]]]);
let Fortress = new Instant(3,'Fortress','Steel',100,[[effectCatalogue.Ward,['Fortress',-500,'Damage']]]);
let HeroicEpic = new Instant(3,'Heroic Epic','Light',90,[[effectCatalogue.Indestructible,['Ward']],[effectCatalogue.Ward,['Heroic Epic',200,'Heal',true,true]]]);
let Pinpoint = new Instant(0,'Pintpoint','Steel',100,[[effectCatalogue.Ward,['Pinpoint',75,'Damage']]]);
// INSTANTS
let DestroyWard = new Instant(0,'Destroy Ward','Steel',80,[[effectCatalogue.RemoveWard]]);
let Freeze = new Instant(2,'Freeze','Ice',80,[[effectCatalogue.Stun,[2]]]);
let Hibernate = new Instant(3,'Hibernate','Ice',80,[[effectCatalogue.Stun,[1]],[effectCatalogue.DestroyMana,[3]]]);
let Indestructible = new Instant(2,'Indestructible','Steel',80,[[effectCatalogue.Indestructible,['Ward']]]);
let Invoke = new Instant(3,'Invoke','Dark',85,[[effectCatalogue.RemoveWardAll]]);
let Overheat = new Instant(3,'Overheat','Fire',75,[[effectCatalogue.RemoveCharmAll]]);
let Shred = new Instant(2,'Shred','Steel',100,[[effectCatalogue.RemoveWard,[2]]]);
let Stun = new Instant(0,'Stun','Ice',100,[[effectCatalogue.Stun,[1]]]);
let StunBlock = new Instant(0,'Stun Block','Ice',100,[[effectCatalogue.Protect,['Stun Block','Stun']]]);


export let spellCatalogue = {

    Dark: [
        BitterEnd,
        BlackHole,
        Condemn,
        DarkPact,
        Excruciate,
        Invoke,
        Miasma,
        Paranoia,
        Prey
    ],
    Fire: [
        EnergyHelix,
        Flamethrower,
        Fury,
        Overheat,
        Thunderbolt,
        WarCry
    ],
    Ice: [
        Blizzard,
        BrainFreeze,
        Entomb,
        Freeze,
        Hibernate,
        Iceberg,
        Stun,
        StunBlock
    ],
    Light: [
        Absorb,
        DivineIntervention,
        Glimmers,
        HeroicEpic,
        Splendor,
        SolarFlare
    ],
    Steel: [
        ChainsawMassacre,
        DestroyWard,
        Fortress,
        Grindhouse,
        Guillotine,
        Indestructible,
        MiracleSentinel,
        NeedlePunch,
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

spellCatalogue.checkCatalogue();