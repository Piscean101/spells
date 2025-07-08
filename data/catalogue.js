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
let BitterEnd = new AoE(6,'Bitter End','Dark',80,'Drain',[[effectCatalogue.Drain,[340,.5]],[effectCatalogue.DestroyMana,[1]]]);
let BlackHole = new AoE(7,'Black Hole','Dark',85,340,[[effectCatalogue.Charm,['Miasma',-400,'Heal',true]],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Blizzard = new AoE(3,'Blizzard','Ice',80,280,[[effectCatalogue.Stat,[-2,0,'Acc']]],4);
let ChainsawMassacre = new AoE(7,'Chainsaw Massacre','Steel',80,450,[[effectCatalogue.RemoveWard,[2]]]);
let DivineIntervention = new AoE(5,'Divine Intervention','Light',90,0,[[effectCatalogue.Heal,[440]],[effectCatalogue.Ward,['Absorb',-500,'Damage']]]);
let Glimmers = new AoE(2,'Glimmers','Light',85,175);
let Grindhouse = new AoE(3,'Grindhouse','Steel',80,265);
let Hellraise = new AoE(6,'Hellraise','Fire',70,690,[[effectCatalogue.RemoveCharmAll,[]]],6);
let Inspire = new AoE(1,'Inspire','Light',90,0,[[effectCatalogue.Heal,[180,3]],[effectCatalogue.Stat,[1,0,'Acc']]],3);
let MegatonHammer = new AoE(6,'Megaton Hammer','Steel',75,510,[[effectCatalogue.Stun,[1]]]);
let Splendor = new AoE(3,'Splendor','Light',90,0,[[effectCatalogue.Heal,[420]]]);
let WarCry = new AoE(3,'War Cry','Fire',75,0,[[effectCatalogue.Charm,['War Cry',250,'Damage',true]],[effectCatalogue.Stat,[1]]]);
let Wildfire = new AoE(2,'Wildfire','Fire',70,315,null,4);
let WitchHunt = new AoE(3,'Witch Hunt','Fire',75,230,[[effectCatalogue.Melt,[]]]);
// OVER-TIMES
let BrainFreeze = new Attack(5,'Brain Freeze','Ice',75,585,[[effectCatalogue.Stun,[2]]],3);
let EnergyHelix = new Attack(2,'Energy Helix','Fire',75,0,[[effectCatalogue.Heal,[480,5]],[effectCatalogue.Stat,[1]]],5);
let Flamethrower = new Attack(5,'Flamethrower','Fire',75,840,null,3);
let HymnToTheAges = new Attack(7,'Hymn To The Ages','Light',90,0,[[effectCatalogue.Heal,[1300,5]],[effectCatalogue.Ward,['Hymn To The Ages',100,'Heal',true,true]]],5);
let Ignite = new Attack(1,'Ignite','Fire',75,240,null,3);
let Nightmare = new Attack(5,'Nightmare','Dark',80,780,null,3);
let PhoenixSong = new Instant(4,'Phoenix Song','Fire',75,[[effectCatalogue.Heal,[990,6]],[effectCatalogue.Charm,['Fury',125,'Damage']]],6);
let SolarFlare = new Attack(4,'Solar Flare','Light',90,600,null,6);
// ATTACKS
let Avalanche = new Attack(6,'Avalanche','Ice',80,380,[[effectCatalogue.Stat,[-2]],[effectCatalogue.Charm,['Entomb',-300,'Damage',true]]]);
let Corkscrew = new Attack(3,'Corkscrew','Steel',80,240,[[effectCatalogue.Ward,['Excruciate',100,'Damage',true]]]);
let CloseCombat = new Attack(6,'Close Combat','Steel',80,600,[[effectCatalogue.SelfEnchant,['Block','Protection']]]);
let DarkPact = new Attack(5,'Dark Pact','Dark',85,'Drain',[[effectCatalogue.Drain,[350,.5]],[effectCatalogue.Charm,['Condemn',-300,'Heal',true]]]);
let Firecracker = new Attack(2,'Firecracker','Fire',75,250,[[effectCatalogue.Stat,[0,1]]]);
let Frostbite = new Attack(5,'Frostbite','Ice',80,485,[[effectCatalogue.Stat,[-1]]]);
let Guillotine = new Attack(7,'Guillotine','Steel',75,895);
let HeroicEpic = new Attack(3,'Heroic Epic','Light',90,270,[[effectCatalogue.SelfEnchant,['Stun Block','Protection','Stun']]]);
let Horror = new Attack(4,'Horror','Dark',85,150,[[effectCatalogue.Charm,['Infection',-200,'Heal']],[effectCatalogue.Stat,[-5,0,'Acc']],[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Iceberg = new Attack(4,'Iceberg','Ice',80,350,[[effectCatalogue.DestroyMana,[1,'Siphon']]]);
let Melancholy = new Attack(2,'Melancholy','Dark',85,210,[[effectCatalogue.RemoveOT,[1,'Heal']]]);
let NeedlePunch = new Attack(5,'Needle Punch','Steel',80,540,[[effectCatalogue.Ward,['Pinpoint',120,'Damage']],[effectCatalogue.Stat,[0,2,'Acc']]]);
let Prey = new Attack(2,'Prey','Dark',85,'Drain',[[effectCatalogue.Drain,[160,.5]]]);
let Retribution = new Attack(5,'Retribution','Light',85,485);
let Shred = new Attack(2,'Shred','Steel',100,180,[[effectCatalogue.RemoveWard,[2]]]);
let Slash = new Attack(0,'Slash','Steel',100,70);
let Spark = new Attack(0,'Spark','Fire',100,75);
let Static = new Attack(1,'Static','Light',90,100,[[effectCatalogue.Stat,[-1]]]);
let Thunderbolt = new Attack(4,'Thunderbolt','Fire',75,540);
// HEALS
let Sentinel = new Heal(4,'Sentinel','Steel',80,[[effectCatalogue.Heal,[450]],[effectCatalogue.Indestructible,['Ward']]]);
let Rest = new Heal(4,'Rest','Light',100,[[effectCatalogue.Heal,[1000]],[effectCatalogue.Stun,[2]],[effectCatalogue.RemoveOT,[2,'Damage']]]);
let Sunshine = new Heal(4,'Sunshine','Light',85,[[effectCatalogue.Heal,[820]]]);
let Sacrifice = new Heal(3,'Sacrifice','Dark',85,[[effectCatalogue.Sacrifice,[400,1.95]]]); 
// CHARMS
let Condemn = new Instant(2,'Condemn','Dark',85,[[effectCatalogue.Charm,['Condemn',-250,'Heal',true]]]);
let Entomb = new Instant(3,'Entomb','Ice',80,[[effectCatalogue.Charm,['Entomb',-250,'Damage',true]]]);
let Frenzy = new Instant(3,'Frenzy','Fire',100,[[effectCatalogue.Charm,['Frenzy',50,'Damage',true]],[effectCatalogue.Charm,['Frenzy',350,'Damage']]]);
let Fury = new Instant(0,'Fury','Fire',75,[[effectCatalogue.Charm,['Fury',75,'Damage']]]);
let Miasma = new Instant(1,'Miasma','Dark',85,[[effectCatalogue.Charm,['Miasma',-300,'Heal']]]);
let Paranoia = new Instant(3,'Paranoia','Dark',85,[[effectCatalogue.Charm,['Paranoia',-1000,'Damage']]]);
let Rage = new Instant(0,'Rage','Fire',50,[[effectCatalogue.Charm,['Rage',100,'Damage']],[effectCatalogue.AddMana,[2]]]);
let Shroud = new Instant(1,'Shroud','Dark',50,[[effectCatalogue.Charm,['Weakness',-100,'Damage',true]],[effectCatalogue.Stat,[-2,0,'Acc']]]);
let Stormfront = new Instant(1,'Stormfront','Fire',75,[[effectCatalogue.Charm,['Stormfront',125,'Damage']],[effectCatalogue.Stat,[2,0,'Acc']]]);
let Weakness = new Instant(0,'Weakness','Ice',100,[[effectCatalogue.Charm,['Weakness',-75,'Damage']]]);
// WARDS
let Absorb = new Instant(0,'Absorb','Light',100,[[effectCatalogue.Ward,['Absorb',-100,'Damage']]]);
let BraceForImpact = new Instant(2,'Brace For Impact','Steel',100,[[effectCatalogue.Ward,['Absorb',-175,'Damage',true]],[effectCatalogue.Stat,[-1]]]);
let Excruciate = new Instant(1,'Excruciate','Dark',85,[[effectCatalogue.Ward,['Excruciate',100,'Damage',true]]]);
let Fortress = new Instant(3,'Fortress','Steel',100,[[effectCatalogue.Ward,['Absorb',-200,'Damage',true,true]]]);
let GuardianAngel = new Instant(1,'Guardian Angel','Light',90,[[effectCatalogue.Ward,['Absorb',-200,'Damage']],[effectCatalogue.RemoveCharm,[1]]]);
let Juggernaut = new Instant(2,'Juggernaut','Ice',100,[[effectCatalogue.Ward,['Absorb',-200,'Damage',true]],[effectCatalogue.Protect,['Block','DoT']]]);
let Pinpoint = new Instant(0,'Pinpoint','Steel',100,[[effectCatalogue.Ward,['Pinpoint',75,'Damage']],[effectCatalogue.Stat,[0,1,'Acc']]]);
// INSTANTS
let Block = new Instant(1,'Block','Steel',80,[[effectCatalogue.Protect,['Block','DoT']]]);
let Cooldown = new Instant(1,'Cooldown','Ice',80,[[effectCatalogue.RemoveOT,[1,'Damage']]]);
let DestroyPip = new Instant(0,'Destroy Pip','Dark',80,[[effectCatalogue.DestroyMana,[1]]]);
let Dispel = new Instant(1,'Dispel','Light',100,[[effectCatalogue.RemoveCharm,[1]]]);
let Empower = new Instant(0,'Empower','Ice',80,[[effectCatalogue.AddMana,[1]]]);
let Freeze = new Instant(2,'Freeze','Ice',80,[[effectCatalogue.Stun,[2]]]);
let Hibernate = new Instant(3,'Hibernate','Ice',80,[[effectCatalogue.Stun,[1]],[effectCatalogue.DestroyMana,[4]]]);
let Indestructible = new Instant(1,'Indestructible','Steel',100,[[effectCatalogue.Indestructible,['Ward']],[effectCatalogue.Protect,['Block','DoT']]]);
let Invoke = new Instant(4,'Invoke','Dark',85,[[effectCatalogue.RemoveCharmAll,[]],[effectCatalogue.RemoveWardAll,[]]]);
let Melt = new Instant(2,'Melt','Fire',75,[[effectCatalogue.Melt,[]]]);
let Overheat = new Instant(3,'Overheat','Fire',75,[[effectCatalogue.RemoveCharmAll,[]]]);
let Pierce = new Instant(0,'Pierce','Steel',80,[[effectCatalogue.RemoveWard,[1]]]);
let Snowdrift = new Instant(1,'Snow Drift','Ice',80,[[effectCatalogue.Stat,[-1,1]]]);
let Stargaze = new Instant(2,'Stargaze','Light',90,[[effectCatalogue.AddMana,[3]]]);
let Stun = new Instant(0,'Stun','Ice',80,[[effectCatalogue.Stun,[1]]]);
let StunBlock = new Instant(1,'Stun Block','Ice',100,[[effectCatalogue.Protect,['Stun Block','Stun']],[effectCatalogue.Protect,['Stun Block','Stun']]]);
let Temptation = new Instant(0,'Temptation','Dark',100,[[effectCatalogue.AddMana,[2]],[effectCatalogue.Stat,[-2]]]);
let Triage = new Instant(3,'Triage','Light',90,[[effectCatalogue.RemoveOT,[2,'Damage']],[effectCatalogue.Ward,['Absorb',-50,'Damage']]]); 

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
        // Invoke,
        Melancholy,
        Miasma,
        Nightmare,
        Paranoia,
        Prey,
        Sacrifice,
        Shroud,
        // Temptation
    ],
    Fire: [
    // PROS: DAMAGE BUFF, HIGH AOE, HEALING, CHARM REMOVAL [HIGH OVERTIME]
    // CONS: LOW HEALTH, NO WARD REMOVAL, NO DAMAGE REDUCTION, NO STUNS
        EnergyHelix,
        // Firecracker,
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
        Stormfront,
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
        Entomb,
        Empower,
        Freeze,
        Frostbite,
        Hibernate,
        Iceberg,
        Juggernaut,
        // Snowdrift,
        // Stun,
        // StunBlock,
        Weakness
    ],
    Light: [
    // PROS: STAT CONTROL, HEALING, CHARM REMOVAL, WARD REMOVAL
    // CONS: LOW AOE [DAMAGE], LOW OVERTIME, NO DAMAGE BUFF, NO STUNS
        Absorb,
        DivineIntervention,
        Dispel,
        // Glimmers,
        GuardianAngel,
        HeroicEpic,
        HymnToTheAges,
        Inspire,
        // Rest,
        Retribution,
        Splendor,
        // SolarFlare,
        Static,
        Stargaze,
        Sunshine,
        // Triage
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
    
            console.log(`TOTAL ${total}`);
        }
    

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

        return result[0];

    }

};

// spellCatalogue.checkCatalogue();

// console.log(spellCatalogue.pickRandom(1,'Fire'));

// AT 60 => STEEL(12) LIGHT(12) Ice(13) Fire(12) Dark(11)