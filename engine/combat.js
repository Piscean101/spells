import { spellCatalogue } from "../data/catalogue.js";

export function checkMana(caster,spell) {

    return caster.mana >= spell.cost ? true : false;

}

export function damageRoll(spell) {

    let roll = Math.floor(Math.random()*25);

    return roll + spell.power;

}

export function overTime(n,rounds,source='N/A') {

    let result = [];

    for (let i = 0; i < rounds; i++) {
        result.push(Math.floor(n/rounds));
    }

    return [result,source];

}