export class Spell {
    constructor(cost,title,element,accuracy,effect=null) {
        this.cost = cost
        this.title = title;
        this.element = element;
        this.accuracy = accuracy;
        this.effect = effect;
    }
}

export class Attack extends Spell {
    constructor(cost,title,element,accuracy,power,effect,ot=0) {
        super(cost,title,element,accuracy,effect)
        this.power = power;
        this.ot = ot;
    }
}

export class AoE extends Spell {
    constructor(cost,title,element,accurracy,power,effect,ot=0) {
        super(cost,title,element,accurracy,effect)
        this.power = power;
        this.aoe = true;
        this.ot = ot;
    }

}

export class Instant extends Spell {
    constructor(cost,title,element,accuracy,effect) {
        super(cost,title,element,accuracy,effect) 
    }
}

