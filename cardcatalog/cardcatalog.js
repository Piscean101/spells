import { spellCatalogue as catalog } from "../data/catalogue.js";

const App = document.getElementById("catalog-app");
var [cardCatalog,catalogList] = [[],[]];

const displayCatalog = () => {

    let result = [];

    for (const card of cardCatalog) {

        // result.push(`<div class="card"><p>Test</p></div>`)

        console.log(card);

        let cardBody = document.createElement("button");

        cardBody.classList.add('card',card.element);

        cardBody.innerHTML = `<span class="card-display-element"><b class="card-display-cost">${card.cost}</b> <span>${card.element}</span></span> <br><br>
        
                                <span class="card-display-title">${card.title}</span>   <br><br>

                                <span class="card-display-stats"><span>${card.power ? card.power : '-'}</span> <span>${card.accuracy}%</span></span>

                                <span class="card-display-effect"><span>${card.aoe ? 'AoE' : ''}</span> <span>${card.ot ? 'OverTime' : ''}</span> <span>${card.types.includes('Heal') ? 'Heal' : ''}</span> <br> <span class="main-effect">${card.effect ? 'Secondary Effect' : ''}</span></span>
                                
                                `;

        // console.log(cardBody)

        App.appendChild(cardBody);

        console.log(App)

    }

    // console.log(catalog.checkCatalogue(null,true))

    // App.innerHTML = result.join(' ');

}

const sortCatalog = () => {

    const result = [];

    catalogList.sort();

    catalogList.forEach(e => { result.push(catalog.findSpell(e))})

    cardCatalog = result;

};

catalog.checkCatalogue(null,true).forEach(e => e[1].forEach(f => { cardCatalog.push(f); catalogList.push(f.title) }));

sortCatalog();
displayCatalog();


console.log(cardCatalog)


