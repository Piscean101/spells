import { Attack , Instant , Heal , AoE } from './spell.js';
import { effectCatalogue } from './effect.js';
import { randomChoice } from './math.js';

// RANK X SPELLS

/* New spells 

    OVERTIME
    [Fire: 'Wisps' Steal HoT]
    [Ice: 'Ice Out' -DoT +Mana]
    [Light: 'Triage' -Dot Absorb]
    [Dark: 'Foolish Greed' -HoT Drain]
    [Steel: '' Attack Block DoT]

*/

// AoE
let BitterEnd = new AoE(6,'Bitter End','Dark',80,'Drain',[[effectCatalogue.Drain,[340,.5]],[effectCatalogue.Ward,['Excruciate',150,'Damage',true]]]);
let BlackHole = new AoE(7,'Black Hole','Dark',85,340,[[effectCatalogue.Charm,['Miasma',-200,'Heal',true]],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Blizzard = new AoE(3,'Blizzard','Ice',80,300,null,3);
let ChainsawMassacre = new AoE(7,'Chainsaw Massacre','Steel',80,450,[[effectCatalogue.RemoveWard,[2]]]);
let DivineIntervention = new AoE(6,'Divine Intervention','Light',90,0,[[effectCatalogue.Heal,[550]],[effectCatalogue.Ward,['Absorb',-500,'Damage']]]);
let Glimmers = new AoE(2,'Glimmers','Light',85,175);
let Grindhouse = new AoE(3,'Grindhouse','Steel',80,265);
let Hellraise = new AoE(6,'Hellraise','Fire',70,690,[[effectCatalogue.RemoveCharmAll,[]]],6);
let Inspire = new AoE(1,'Inspire','Light',90,0,[[effectCatalogue.Heal,[180,3]],[effectCatalogue.Speed,[1]]],3);
let Splendor = new AoE(3,'Splendor','Light',90,0,[[effectCatalogue.Heal,[420]]]);
let WarCry = new AoE(3,'War Cry','Fire',75,0,[[effectCatalogue.Charm,['War Cry',300,'Damage',true]]]);
let Wildfire = new AoE(2,'Wildfire','Fire',70,315,null,4);
let WitchHunt = new AoE(3,'Witch Hunt','Fire',75,290,[[effectCatalogue.Melt,[]]],6);
// OVER-TIMES
let BrainFreeze = new Attack(5,'Brain Freeze','Ice',75,585,[[effectCatalogue.Stun,[2]]],3);
let EnergyHelix = new Attack(2,'Energy Helix','Fire',75,0,[[effectCatalogue.Heal,[510,3]]],3);
let Flamethrower = new Attack(5,'Flamethrower','Fire',75,835,null,3);
let HymnToTheAges = new Attack(7,'Hymn To The Ages','Light',90,0,[[effectCatalogue.Heal,[1270,5]],[effectCatalogue.Ward,['Hymn To The Ages',200,'Heal',true]]],5);
let Ignite = new Attack(1,'Ignite','Fire',75,230,null,3);
let Nightmare = new Attack(5,'Nightmare','Dark',80,780,null,3);
let PhoenixSong = new Instant(4,'Phoenix Song','Fire',75,[[effectCatalogue.Heal,[1095,6]]],6);
let SolarFlare = new Attack(4,'Solar Flare','Light',90,600,null,6);
// ATTACKS
let Avalanche = new Attack(6,'Avalanche','Ice',80,380,[[effectCatalogue.DestroyMana,[1,'Siphon']],[effectCatalogue.Charm,['Entomb',-300,'Damage',true]]]);
let CombatBehemoth = new Attack(6,'Combat Behemoth','Steel',80,600,[[effectCatalogue.Self,['Block','Protection']]]);
let DarkPact = new Attack(5,'Dark Pact','Dark',85,'Drain',[[effectCatalogue.Drain,[350,.5]],[effectCatalogue.Charm,['Condemn',-250,'Heal',true]]]);
let Firecracker = new Attack(2,'Firecracker','Fire',75,250,[[effectCatalogue.Speed,[0,1]]]);
let Frost = new Attack(0,'Frost','Ice',100,60);
let Guillotine = new Attack(7,'Guillotine','Steel',75,895);
let Corkscrew = new Attack(3,'Corkscrew','Steel',80,240,[[effectCatalogue.Ward,['Excruciate',100,'Damage']]]);
let Horror = new Attack(4,'Horror','Dark',85,150,[[effectCatalogue.Charm,['Infection',-200,'Heal']],[effectCatalogue.Charm,['Shroud',-120,'Damage',true]],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Iceberg = new Attack(4,'Iceberg','Ice',80,350,[[effectCatalogue.DestroyMana,[1,'Siphon']]]);
let Melancholy = new Attack(0,'Melancholy','Dark',100,65);
let NeedlePunch = new Attack(5,'Needle Punch','Steel',80,540,[[effectCatalogue.Ward,['Pinpoint',75,'Damage']]]);
let Prey = new Attack(3,'Prey','Dark',85,'Drain',[[effectCatalogue.Drain,[290,.5]]]);
let Retribution = new Attack(5,'Retribution','Light',85,485);
let Slash = new Attack(0,'Slash','Steel',100,70);
let Spark = new Attack(0,'Spark','Fire',100,75);
let Static = new Attack(1,'Static','Light',90,100,[[effectCatalogue.Speed,[-1]]]);
let Thunderbolt = new Attack(4,'Thunderbolt','Fire',75,540);
// HEALS
let MiracleSentinel = new Heal(4,'Miracle Sentinel','Steel',80,[[effectCatalogue.Heal,[450]],[effectCatalogue.Indestructible,['Ward']]]);
let Rest = new Heal(4,'Rest','Light',100,[[effectCatalogue.Heal,[1000]],[effectCatalogue.Stun,[1]],[effectCatalogue.Speed,[-1]]]);
let Sunshine = new Heal(4,'Sunshine','Light',85,[[effectCatalogue.Heal,[820]]]);
let Sacrifice = new Heal(4,'Sacrifice','Dark',85,[[effectCatalogue.Sacrifice,[400,2.2]]]); 
// CHARMS
let Condemn = new Instant(2,'Condemn','Dark',85,[[effectCatalogue.Charm,['Condemn',-300,'Heal',true]]]);
let Entomb = new Instant(3,'Entomb','Ice',80,[[effectCatalogue.Charm,['Entomb',-300,'Damage',true]]]);
let Frenzy = new Instant(3,'Frenzy','Fire',75,[[effectCatalogue.Charm,['Frenzy',100,'Damage',true]],[effectCatalogue.Charm,['Frenzy',500,'Damage']]]);
let Fury = new Instant(0,'Fury','Fire',75,[[effectCatalogue.Charm,['Fury',100,'Damage']]]);
let Miasma = new Instant(1,'Miasma','Dark',100,[[effectCatalogue.Charm,['Miasma',-400,'Heal']]]);
let Paranoia = new Instant(3,'Paranoia','Dark',85,[[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Rage = new Instant(0,'Rage','Fire',50,[[effectCatalogue.Charm,['Rage',100,'Damage']],[effectCatalogue.AddMana,[2]]]);
let Shroud = new Instant(1,'Shroud','Dark',85,[[effectCatalogue.Charm,['Shroud',-120,'Damage',true]]]);
let Storm = new Instant(1,'Storm','Fire',75,[[effectCatalogue.Charm,['Storm',150,'Damage']],[effectCatalogue.Speed,[1]]]);
let Weakness = new Instant(0,'Weakness','Ice',100,[[effectCatalogue.Charm,['Weakness',-75,'Damage']]]);
// WARDS
let Absorb = new Instant(0,'Absorb','Light',100,[[effectCatalogue.Ward,['Absorb',-100,'Damage']]]);
let BraceForImpact = new Instant(2,'Brace For Impact','Steel',100,[[effectCatalogue.Ward,['Absorb',-200,'Damage',true]],[effectCatalogue.Speed,[-1]]]);
let Excruciate = new Instant(0,'Excruciate','Dark',85,[[effectCatalogue.Ward,['Excruciate',100,'Damage',true]]]);
let Fortress = new Instant(3,'Fortress','Steel',100,[[effectCatalogue.Ward,['Absorb',-250,'Damage',true,true]]]);
let GuardianOfTheFae = new Instant(4,'Guardian Of The Fae','Light',90,[[effectCatalogue.Ward,['Absorb',-600,'Damage']],[effectCatalogue.RemoveCharm,[1]]]);
let HeroicEpic = new Instant(3,'Heroic Epic','Light',90,[[effectCatalogue.Indestructible,['Ward']],[effectCatalogue.Ward,['Heroic Epic',200,'Heal',true,true]]]);
let Juggernaut = new Instant(3,'Juggernaut','Steel',80,[[effectCatalogue.Protect,['Block','DoT']],[effectCatalogue.Protect,['Block','DoT']],[effectCatalogue.Protect,['Block','DoT']]]);
let Pinpoint = new Instant(0,'Pinpoint','Steel',100,[[effectCatalogue.Ward,['Pinpoint',150,'Damage']]]);
// INSTANTS
let Block = new Instant(1,'Block','Steel',80,[[effectCatalogue.Protect,['Block','DoT']]]);
let DestroyPip = new Instant(0,'Destroy Pip','Ice',80,[[effectCatalogue.DestroyMana,[1]]]);
let DestroyWard = new Instant(0,'Destroy Ward','Steel',80,[[effectCatalogue.RemoveWard,[1]]]);
let Dispel = new Instant(1,'Dispel','Light',100,[[effectCatalogue.RemoveCharm,[1]]]);
let Empower = new Instant(1,'Empower','Ice',80,[[effectCatalogue.AddMana,[3]]]);
let Freeze = new Instant(2,'Freeze','Ice',80,[[effectCatalogue.Stun,[2]]]);
let Hibernate = new Instant(3,'Hibernate','Ice',80,[[effectCatalogue.Stun,[1]],[effectCatalogue.DestroyMana,[4]]]);
let Indestructible = new Instant(2,'Indestructible','Steel',80,[[effectCatalogue.Indestructible,['Ward']]]);
let Invoke = new Instant(3,'Invoke','Dark',85,[[effectCatalogue.RemoveWardAll,[]]]);
let Melt = new Instant(2,'Melt','Fire',75,[[effectCatalogue.Melt,[]]]);
let Overheat = new Instant(3,'Overheat','Fire',75,[[effectCatalogue.RemoveCharmAll,[]]]);
let Shred = new Instant(2,'Shred','Steel',100,[[effectCatalogue.RemoveWard,[2]]]);
let Snowdrift = new Instant(1,'Snow Drift','Ice',80,[[effectCatalogue.Speed,[-1,1]]]);
let Stargaze = new Instant(2,'Stargaze','Light',90,[[effectCatalogue.AddMana,[3]]]);
let Stun = new Instant(0,'Stun','Ice',80,[[effectCatalogue.Stun,[1]]]);
let StunBlock = new Instant(0,'Stun Block','Ice',100,[[effectCatalogue.Protect,['Stun Block','Stun']]]);
let Temptation = new Instant(0,'Temptation','Dark',100,[[effectCatalogue.AddMana,[2]],[effectCatalogue.Speed,[-1]]]);
// let Triage = new Instant(1,'Triage','Light',100,[[effectCatalogue.Protect,['Triage','DoT']]]); /// REMOVE DOT 

EnergyHelix.ot = true; PhoenixSong.ot = true;


export let spellCatalogue = {

    Dark: [
        BitterEnd,
        BlackHole,
        Condemn,
        DarkPact,
        Excruciate,
        Horror,
        Invoke,
        Melancholy,
        Miasma,
        Nightmare,
        Paranoia,
        Prey,
        Sacrifice,
        Shroud,
        Temptation
    ],
    Fire: [
        EnergyHelix,
        Firecracker,
        Flamethrower,
        Frenzy,
        Fury,
        Hellraise,
        Ignite,
        Melt,
        Overheat,
        PhoenixSong,
        Rage,
        Spark,
        Storm,
        Thunderbolt,
        WarCry,
        Wildfire,
        WitchHunt
    ],
    Ice: [
        Avalanche,
        Blizzard,
        BrainFreeze,
        DestroyPip,
        Entomb,
        Empower,
        Freeze,
        Frost,
        Hibernate,
        Iceberg,
        Snowdrift,
        Stun,
        StunBlock,
        Weakness
    ],
    Light: [
        Absorb,
        DivineIntervention,
        Dispel,
        Glimmers,
        GuardianOfTheFae,
        HeroicEpic,
        HymnToTheAges,
        Inspire,
        Rest,
        Retribution,
        Splendor,
        SolarFlare,
        Static,
        Stargaze,
        Sunshine
    ],
    Steel: [
        Block,
        BraceForImpact,
        ChainsawMassacre,
        CombatBehemoth,
        Corkscrew,
        DestroyWard,
        Fortress,
        Grindhouse,
        Guillotine,
        Indestructible,
        Juggernaut,
        MiracleSentinel,
        NeedlePunch,
        Pinpoint,
        Shred,
        Slash
    ],

    checkCatalogue(element=null,random=0) {

        let [total,catalogue,filter] = [0,Object.entries(this).splice(0,5),[]];
    
        if (element) {
            
            filter = catalogue.filter(e => { return e[0] == element })[0][1];

            // console.log(filter);
    
            total = filter.length;
    
        } else {
    
            for (const element of catalogue) {
        
                console.log(`${element[0].toUpperCase()} ${element[1].length}`,'\n',...element[1]);
                total += element[1].length;
        
            }
    
        }
    
        console.log(`TOTAL ${total}`);

        if (random) { return this.pickRandom(random,element=filter,catalogue=catalogue) };

        return filter;
    
    },

    findSpell(name) {

        let result = [];

        Object.values(spellCatalogue).forEach(e => {

            for (const i of Object.values(e)) {

                result.push(i);

            }

        });

        return result.filter(spell => { return spell.title == name })[0];

    },

    pickRandom(n=1,element=null,catalogue=Object.entries(this).splice(0,5)) {

        let result = []; let randomSpell; let randomSpellElement;

        while ( n > 0 ) {

            randomSpell = randomChoice(...randomChoice(...catalogue)[1]); randomSpellElement = randomChoice(...spellCatalogue.checkCatalogue(element));
            
            if (element) {

                result.includes(randomSpellElement) ? n++ : result.push(randomSpellElement);

            } else {

                result.includes(randomSpell) ? n++ : result.push(randomSpell);

            }
            
            n--;

        }

        return result[0].title;

    }

};

// spellCatalogue.checkCatalogue();

console.log(spellCatalogue.pickRandom(1,'Fire'));

// AT 60 => STEEL(12) LIGHT(12) Ice(13) Fire(12) Dark(11)