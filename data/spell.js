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
        this.ot = ot;
    }

}

export class Attack extends Spell {

    constructor(cost,title,element,accuracy,power,effect,ot=0) {
        super(cost,title,element,accuracy,effect)
        this.power = power;
        this.ot = ot;
        this.power ? this.types.push('Damage') : this.types.push('Heal');
    }
}

export class Heal extends Attack {

    constructor(cost,title,element,accuracy,power,effect,ot=0) {
        super(cost,title,element,accuracy,power)
        !this.types.includes('Heal') ? this.types.push('Heal') : null;
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

