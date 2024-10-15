import { effectCatalogue } from "./effect.js";

export class Spell {

    constructor(cost,title,element,accuracy,effect=null) {
        this.aoe = false;
        this.cost = cost
        this.title = title;
        this.element = element;
        this.accuracy = accuracy;
        this.effect = effect;
        this.types = [];
        if (this.effect) {
            this.effect.forEach(e => {
                e.includes(effectCatalogue.Heal) ? this.types.push('Heal') : null;
            })
        }
    }

}

export class Attack extends Spell {

    constructor(cost,title,element,accuracy,power,effect,ot=0) {
        super(cost,title,element,accuracy,effect)
        this.power = power;
        this.ot = ot;
        this.types.push('Damage');
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
        this.types.push('Instant');
    }

}

