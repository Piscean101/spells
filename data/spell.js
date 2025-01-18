import { effectCatalogue } from "./effect.js";

export class Spell {

    constructor(cost,title,element,accuracy,effect=null,ot=0) {
        this.aoe = false;
        this.cost = cost
        this.title = title;
        this.element = element;
        this.accuracy = accuracy;
        this.effect = effect;
        this.types = [];
        !this.effect ? null : this.effect.forEach(e => {
            e[0] == effectCatalogue.Heal ? this.types.push('Heal') : 
            e[0] == effectCatalogue.Charm && !this.types.includes('Charm') ? this.types.push(`{${e[1][1]}} ${e[1][2]}-Charm`) :
            e[0] == effectCatalogue.Ward && !this.types.includes('Wards') ? this.types.push(`{${e[1][1]}} ${e[1][2]}-Ward`) : 
            !this.types.includes('Effect') ? this.types.push('Effect') : null;
        })
        this.ot = ot;
    }
    
    tooltip() {
        return `ACCURACY: ${this.accuracy} COST: ${this.cost} \n${this.types.length > 1 ? this.types.join(' \u2022 ') : this.types}`;
    } 
    
}

export class Attack extends Spell {

    constructor(cost,title,element,accuracy,power,effect,ot=0) {
        super(cost,title,element,accuracy,effect)
        this.power = power;
        this.ot = ot;
        this.ot ? this.types.unshift('OverTime') : this.types.unshift('Damage');
    }

}


export class AoE extends Spell {
    
    constructor(cost,title,element,accurracy,power,effect,ot=0) {
        super(cost,title,element,accurracy,effect)
        this.power = power;
        this.aoe = true;
        this.ot = ot;
        this.power ? this.types.push('Damage','AoE') : this.types.push('AoE');
    }
    
}

export class Instant extends Spell {
    
    constructor(cost,title,element,accuracy,effect) {
        super(cost,title,element,accuracy,effect) 
    }
    
}

export class Heal extends Instant {

    constructor(cost,title,element,accuracy,effect,ot=0) {
        super(cost,title,element,accuracy,effect);
        this.types=[];this.types.push('Heal');
        this.power = 0;
    }

}
