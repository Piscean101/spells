import { Attack , Instant , Heal , AoE } from './spell.js';
import { effectCatalogue } from './effect.js';
import { randomChoice } from './math.js';

// RANK X SPELLS

/* New spells 

    OVERTIME
    [Fire: 'Wisps' Steal HoT]
    [Ice: 'Ice Out' -DoT +Mana]
    [Dark: 'Foolish Greed' -HoT Drain]

    needed for 100 -> regular atk no effect (5)

*/

// atk w multiple debuffs

// AoE
let BitterEnd = new AoE(5,'Bitter End','Dark',85,'Drain',[[effectCatalogue.Drain,[285,.5]],[effectCatalogue.DestroyMana,[1]]]); // Effect 0
let BlackHole = new AoE(5,'Black Hole','Dark',80,245,[[effectCatalogue.Charm,['Miasma',-150,'Heal',true]],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]); // LEGENDARY Effect 4
let Blizzard = new AoE(4,'Blizzard','Ice',80,390,[[effectCatalogue.Stat,[-2,0,'Acc']]],4); // Effect 0
let ChainsawMassacre = new AoE(4,'Chainsaw Massacre','Steel',80,290,[[effectCatalogue.RemoveWard,[2]]]); // Effect 1
let DivineIntervention = new AoE(5,'Divine Intervention','Light',85,0,[[effectCatalogue.Heal,[590]],[effectCatalogue.Ward,['Absorb',-400,'Damage']]]); // Effect 2
let Earthquake = new AoE(5,'Earthquake','Earth',75,450);
let Excruciate = new AoE(4,'Excruciate','Dark',85,280,[[effectCatalogue.Ward,['Excruciate',-200,'Heal']]]); // Effect 0
let Explosion = new AoE(5,'Explosion','Fire',75,600,[[effectCatalogue.DamageSelf,[100]]]);
let Glimmers = new AoE(2,'Glimmers','Light',90,180);
let Grindhouse = new AoE(3,'Grindhouse','Steel',80,280);
let GuardianOfTheFae = new AoE(4,'Guardian Of The Fae','Earth',70,0,[[effectCatalogue.Heal,[555]]]);      
let Hellraise = new AoE(6,'Hellraise','Fire',70,815,[[effectCatalogue.RemoveCharmAll,[]]],6); // LEGENDARY Effect 2
let Inspire = new AoE(1,'Inspire','Light',85,0,[[effectCatalogue.Heal,[195,3]],[effectCatalogue.Stat,[1,0,'Acc']]],3); // Effect 0
let MegatonHammer = new AoE(5,'Megaton Hammer','Steel',80,400,[[effectCatalogue.Stun,[1]]]); // Effect 0
let Reclaim = new AoE(4,'Reclaim','Earth',75,0,[[effectCatalogue.RemoveCharmAll,[]],[effectCatalogue.RemoveWardAll,[]]]);
let Sandstorm = new AoE(1,'Sandstorm','Earth',75,155);
let Splendor = new AoE(3,'Splendor','Light',85,0,[[effectCatalogue.Heal,[525]]]);
let Stampede = new AoE(4,'Stampede','Earth',100,0,[[effectCatalogue.Charm,['Stampede',500,'Damage']]]);
let WarCry = new AoE(3,'War Cry','Fire',100,0,[[effectCatalogue.Charm,['War Cry',250,'Damage',true]],[effectCatalogue.Stat,[1]]]);
let Wildfire = new AoE(2,'Wildfire','Fire',70,360,null,4);
let WitchHunt = new AoE(3,'Witch Hunt','Fire',75,275,[[effectCatalogue.RemoveProtection,['Charms']]]); // Effect 0.5
let WorldOfWonder = new AoE(4,'World Of Wonder','Earth',100,0,[[effectCatalogue.Charm,['WoW',400,'Damage',true]]]);
// OVER-TIMES
let BrainFreeze = new Attack(4,'Brain Freeze','Ice',75,480,[[effectCatalogue.Stun,[2]]],4); // Effect 1
let EnergyHelix = new Heal(2,'Energy Helix','Fire',70,[[effectCatalogue.Heal,[435,3]],[effectCatalogue.Stat,[1]]],3); // Effect 0
let Flamethrower = new Attack(3,'Flamethrower','Fire',75,660,null,4);
let HymnToTheAges = new Attack(5,'Hymn To The Ages','Light',85,0,[[effectCatalogue.Heal,[1220,5]],[effectCatalogue.Ward,['Hymn To The Ages',75,'Heal',true,true]]],5); // LEGENDARY Effect 2
let Ignite = new Attack(1,'Ignite','Fire',75,315,null,3); 
let Nightmare = new Attack(4,'Nightmare','Dark',80,620,null,4);
let PhoenixSong = new Heal(4,'Phoenix Song','Fire',70,[[effectCatalogue.Heal,[710,5]],[effectCatalogue.Charm,['Fury',225,'Damage']]],5); // Effect 1
let SolarFlare = new Attack(4,'Solar Flare','Light',90,265,[[effectCatalogue.RemoveCharmAll,[]]]); // Effect 2
let Triage = new Heal(2,'Triage','Light',85,[[effectCatalogue.Heal,[400,5]],effectCatalogue.RemoveOT,[2,'Damage']],5); // Effect 2
// ATTACKS
let Avalanche = new Attack(5,'Avalanche','Ice',75,360,[[effectCatalogue.Stat,[-2]],[effectCatalogue.Charm,['Entomb',-300,'Damage',true]]]); // LEGENDARY Effect 4
let Corkscrew = new Attack(1,'Corkscrew','Steel',80,110,[[effectCatalogue.Ward,['Excruciate',50,'Damage',true]]]); // Effect 1
let CloseCombat = new Attack(4,'Close Combat','Steel',80,360,[[effectCatalogue.SelfEnchant,['Block','Protection']]]); // Effect 2
let DarkPact = new Attack(3,'Dark Pact','Dark',80,'Drain',[[effectCatalogue.Drain,[180,.5]],[effectCatalogue.Ward,['Condemn',-250,'Heal',true]]]); // Effect 2
let Firecracker = new Attack(2,'Firecracker','Fire',75,240,[[effectCatalogue.EffectDamage,[180,3]]]); // Effect 1
let Frostbite = new Attack(2,'Frostbite','Ice',80,225,[[effectCatalogue.Stat,[-1]]]); // Effect 0
let Eruption = new Attack(5,'Eruption','Earth',75,640);
let Guillotine = new Attack(6,'Guillotine','Steel',75,845); // LEGENDARY
let HeroicEpic = new Attack(3,'Heroic Epic','Light',90,285,[[effectCatalogue.SelfEnchant,['Stun Block','Protection','Stun']]]); // Effect 0
let Horror = new Attack(4,'Horror','Dark',85,150,[[effectCatalogue.Charm,['Infection',-500,'Heal']],[effectCatalogue.Stat,[-5,0,'Acc']],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]); // Effect 5
let Iceberg = new Attack(3,'Iceberg','Ice',80,270,[[effectCatalogue.DestroyMana,[1,'Siphon']]]); // Effect 1
let Melancholy = new Attack(2,'Melancholy','Dark',85,180,[[effectCatalogue.RemoveOT,[1,'Heal']]]); // Effect 1
let NeedlePunch = new Attack(4,'Needle Punch','Steel',80,360,[[effectCatalogue.Ward,['Pinpoint',125,'Damage']],[effectCatalogue.Stat,[0,2,'Acc']]]); // Effect 2
let Prey = new Attack(2,'Prey','Dark',85,'Drain',[[effectCatalogue.Drain,[240,.5]]]);
let Pummel = new Attack(3,'Pummel','Earth',75,375,[[effectCatalogue.SelfEnchant,['Pummel','Charm','Damage',100]]]); // Effect 0
let Retribution = new Attack(4,'Retribution','Light',90,400);
let Shred = new Attack(2,'Shred','Steel',80,210,[[effectCatalogue.RemoveWard,[2]]]); //Effect 1
let Slash = new Attack(0,'Slash','Steel',100,60);
let Spark = new Attack(0,'Spark','Fire',100,60);
let Static = new Attack(1,'Static','Light',90,140,[[effectCatalogue.Stat,[-1]]]); // Effect 0
let Thunderbolt = new Attack(5,'Thunderbolt','Fire',75,725);
// HEALS
let Sentinel = new Heal(4,'Sentinel','Steel',75,[[effectCatalogue.Heal,[540]],[effectCatalogue.Indestructible,['Ward']]]); // Effect 0.5
let Rest = new Heal(3,'Rest','Light',100,[[effectCatalogue.Heal,[750]],[effectCatalogue.Stun,[2]],[effectCatalogue.RemoveOT,[2,'Damage']]]); // Special Effect [Custom Power]
let Sunshine = new Heal(4,'Sunshine','Light',85,[[effectCatalogue.Heal,[935]]]);
let Sacrifice = new Heal(2,'Sacrifice','Dark',85,[[effectCatalogue.Sacrifice,[250,2.2]]]); // Special Effect [Custom Power]
let Sprite = new Heal(1,'Sprite','Earth',70,[[effectCatalogue.Heal,[305]]]);
// CHARMS
let Condemn = new Instant(2,'Condemn','Dark',100,[[effectCatalogue.Charm,['Condemn',-250,'Heal',true]]]);
let Entomb = new Instant(3,'Entomb','Ice',100,[[effectCatalogue.Charm,['Entomb',-250,'Damage',true]]]);
let Frenzy = new Instant(3,'Frenzy','Fire',100,[[effectCatalogue.Charm,['Frenzy',100,'Damage',true]],[effectCatalogue.Charm,['Frenzy',350,'Damage']]]);
let Fury = new Instant(0,'Fury','Fire',100,[[effectCatalogue.Charm,['Fury',75,'Damage']]]);
let Miasma = new Instant(1,'Miasma','Dark',100,[[effectCatalogue.Charm,['Miasma',-500,'Heal']]]);
let Paranoia = new Instant(3,'Paranoia','Dark',100,[[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Rage = new Instant(0,'Rage','Fire',60,[[effectCatalogue.Charm,['Rage',100,'Damage']],[effectCatalogue.AddMana,[1]]]);
let Shroud = new Instant(1,'Shroud','Dark',60,[[effectCatalogue.Charm,['Weakness',-100,'Damage',true]],[effectCatalogue.Stat,[-2,0,'Acc']]]);
let Stormfront = new Instant(1,'Stormfront','Fire',100,[[effectCatalogue.Charm,['Stormfront',125,'Damage']],[effectCatalogue.Stat,[1,0,'Acc']]]);
let Weakness = new Instant(0,'Weakness','Ice',100,[[effectCatalogue.Charm,['Weakness',-75,'Damage']]]);
// WARDS
let Absorb = new Instant(0,'Absorb','Light',100,[[effectCatalogue.Ward,['Absorb',-75,'Damage']]]);
let BraceForImpact = new Instant(2,'Brace For Impact','Steel',100,[[effectCatalogue.Ward,['Absorb',-175,'Damage',true]],[effectCatalogue.Stat,[-1]]]);
let Fortress = new Instant(3,'Fortress','Steel',100,[[effectCatalogue.Ward,['Absorb',-200,'Damage',true,true]]]);
let GuardianAngel = new Instant(1,'Guardian Angel','Light',100,[[effectCatalogue.Ward,['Absorb',-100,'Damage']],[effectCatalogue.RemoveCharm,[1]]]);
let Juggernaut = new Instant(3,'Juggernaut','Ice',100,[[effectCatalogue.Ward,['Absorb',-200,'Damage',true,true]],[effectCatalogue.SelfEnchant,['Juggernaut','Charm',50,'Damage',true,true]]]);
let Pinpoint = new Instant(0,'Pinpoint','Steel',100,[[effectCatalogue.Ward,['Pinpoint',75,'Damage']],[effectCatalogue.Stat,[0,1,'Acc']]]);
// INSTANTS
let Block = new Instant(1,'Block','Steel',80,[[effectCatalogue.Protect,['Block','DoT']]]);
let Cooldown = new Instant(1,'Cooldown','Ice',80,[[effectCatalogue.RemoveOT,[1,'Damage']]]);
let DestroyPip = new Instant(0,'Destroy Pip','Dark',85,[[effectCatalogue.DestroyMana,[1]]]);
let Dispel = new Instant(1,'Dispel','Light',100,[[effectCatalogue.RemoveCharm,[2]]]);
let Empower = new Instant(0,'Empower','Ice',80,[[effectCatalogue.AddMana,[1]]]);
let Freeze = new Instant(1,'Freeze','Ice',80,[[effectCatalogue.Stun,[2]]]);
let Hibernate = new Instant(3,'Hibernate','Ice',80,[[effectCatalogue.Stun,[2]],[effectCatalogue.DestroyMana,[2]]]);
let Indestructible = new Instant(2,'Indestructible','Steel',80,[[effectCatalogue.Indestructible,['Ward']],[effectCatalogue.Protect,['Block','DoT']]]);
let Melt = new Instant(1,'Melt','Fire',75,[[effectCatalogue.RemoveProtection,[]]]);
let Overheat = new Instant(2,'Overheat','Fire',75,[[effectCatalogue.RemoveCharmAll,[]]]);
let Pierce = new Instant(0,'Pierce','Steel',80,[[effectCatalogue.RemoveWard,[1]]]);
let Revoke = new Instant(2,'Revoke','Earth',75,[[effectCatalogue.RemoveCharm,[2]],[effectCatalogue.RemoveWard,[2]]]);
let Snowdrift = new Instant(1,'Snow Drift','Ice',80,[[effectCatalogue.Stat,[-2]]]);
let Stargaze = new Instant(1,'Stargaze','Light',90,[[effectCatalogue.AddMana,[2]]]);
let Stun = new Instant(0,'Stun','Ice',80,[[effectCatalogue.Stun,[1]]]);
let StunBlock = new Instant(1,'Stun Block','Ice',100,[[effectCatalogue.Protect,['Stun Block','Stun']],[effectCatalogue.Protect,['Stun Block','Stun']]]);
let Temptation = new Instant(0,'Temptation','Dark',100,[[effectCatalogue.AddMana,[2]],[effectCatalogue.Stat,[-2]]]);

EnergyHelix.ot = true; PhoenixSong.ot = true;


export let spellCatalogue = {

    Dark: [
    // PROS: DAMAGE REDUCTION, HEALING, HEALING REDUCTION, STAT CONTROL
    // CONS: LOW STUNS, LOW OVERTIME, NO CHARM REMOVAL, NO WARD REMOVAL
        BitterEnd,
        BlackHole,
        Condemn,
        DarkPact,
        // DestroyPip,
        // Excruciate,
        Horror,
        Melancholy,
        Miasma,
        Nightmare,
        Paranoia,
        Prey,
        Sacrifice,
        Shroud,
        // Temptation
    ],
    Earth: [ 
    //  PROS: HEALING, DAMAGE BUFF, CHARM REMOVAL, WARD REMOVAL
    //  CONS: LOW SECONDARY EFFECT, NO OVERTIME, NO STAT CONTROL, NO STUNS
    Earthquake,
    Eruption,
    Pummel,
    GuardianOfTheFae,
    Reclaim,
    Revoke,
    Sandstorm,
    Sprite,
    Stampede,
    WorldOfWonder
    ],
    Fire: [
    // PROS: DAMAGE BUFF, HIGH AOE, HEALING, CHARM REMOVAL [HIGH OVERTIME]
    // CONS: LOW HEALTH, LOW WARD REMOVAL, NO DAMAGE REDUCTION, NO STUNS
        // EnergyHelix,
        Explosion,
        Firecracker,
        Flamethrower,
        Frenzy,
        // Fury,
        Hellraise,
        // Ignite,
        Melt,
        Overheat,
        PhoenixSong,
        Rage,
        // Spark,
        // Stormfront,
        Thunderbolt,
        WarCry,
        Wildfire,
        WitchHunt
    ],
    Ice: [
    // PROS: DAMAGE REDUCTION, HIGH HEALTH, STUNS, STAT CONTROL 
    // CONS: LOW DAMAGE BUFF, LOW AOE, LOW CHARM REMOVAL, NO HEALING
        Avalanche,
        Blizzard,
        BrainFreeze,
        // Cooldown,
        // Entomb,
        Empower,
        Freeze,
        Frostbite,
        Hibernate,
        Iceberg,
        Juggernaut,
        Snowdrift,
        // Stun,
        // StunBlock,
        Weakness
    ],
    Light: [
    // PROS: STAT CONTROL, HIGH HEALING [HIGH OVERTIME HEALING], CHARM REMOVAL, DAMAGE REDUCTION
    // CONS: LOW AOE [DAMAGE], LOW OVERTIME [DAMAGE], LOW STUNS, NO DAMAGE BUFF
        Absorb,
        DivineIntervention,
        Dispel,
        // Glimmers,
        // GuardianAngel,
        HeroicEpic,
        HymnToTheAges,
        Inspire,
        // Rest,
        Retribution,
        Splendor,
        SolarFlare,
        Static,
        // Stargaze,
        Sunshine,
        Triage
    ],
    Steel: [
    // PROS: DAMAGE BUFF, DAMAGE REDUCTION, STUNS, WARD REMOVAL
    // CONS: LOW HEALING, LOW STAT CONTROL, NO OVERTIME, NO CHARM REMOVAL
        // Block,
        BraceForImpact,
        ChainsawMassacre,
        CloseCombat,
        Corkscrew,
        // Pierce,
        Fortress,
        Grindhouse,
        Guillotine,
        Indestructible,
        MegatonHammer,
        Sentinel,
        NeedlePunch,
        // Pinpoint,
        Shred,
        // Slash
    ],

    checkCatalogue(element=null,data=false,random=null) {

        let [total,catalogue,filter] = [0,Object.entries(this).splice(0,6),[]];
    
        if (element) {
            
            filter = catalogue.filter(e => { return e[0] == element })[0][1];
    
            total = filter.length;
    
        } else if (data) {

            catalogue.forEach(e => { filter.push(e) })

        } else {
    
            for (const element of catalogue) {
        
                console.log(`${element[0].toUpperCase()} ${element[1].length}`,'\n',...element[1]);
                total += element[1].length;
        
            }
    
            console.log(`TOTAL ${total}`);
        }
    

        if (random) { return this.pickRandom(random,element=filter,catalogue=catalogue) };

        return filter;
    
    },

    findSpell(name,id=null) {

        let result = [];

        Object.values(spellCatalogue).forEach(e => {

            for (const i of Object.values(e)) {

                result.push(i);

            }

        });
        
        !id ? result = result.filter(spell => { return spell.title == name })[0] : result = result.filter(spell => { return spell.id == id })

        return result;

    },

    pickRandom(n=1,element=null,catalogue=Object.entries(this).splice(0,6)) {

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

        return result[0];

    },

};

// spellCatalogue.checkCatalogue();

// console.log(spellCatalogue.pickRandom(1,'Fire'));

// AT 60 => STEEL(12) LIGHT(12) Ice(13) Fire(12) Dark(11)