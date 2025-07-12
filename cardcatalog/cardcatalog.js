import { spellCatalogue as catalog } from "../data/catalogue.js";

const App = document.getElementById("catalog-app");
var [cardCatalog,catalogNameList] = [[],[]];

const displayCatalog = () => {

    let result = [];

    for (const card of cardCatalog) {

        let cardBody = document.createElement("button");

        cardBody.classList.add('card',card.element);

        cardBody.innerHTML = `<span class="card-display-element"><b class="card-display-cost">${card.cost}</b> <span>${card.element}</span></span> <br><br>
        
                                <span class="card-display-title">${card.title}</span>   <br><br>

                                <span class="card-display-stats"><span>${card.power == 'Drain' ? card.effect[0][1][0] : card.types.includes('Heal') ? card.effect[0][1][0] : card.power ? card.power : '-'}</span> <span>${card.accuracy}%</span></span>

                                <span class="card-display-effect"><span>${card.aoe ? 'AoE' : ''}</span> <span>${card.ot ? 'OverTime' : ''}</span> <span>${card.types.includes('Heal') ? 'Heal' : ''}</span> <span>${card.effect && !card.types.includes('Heal') ? 'Effect' : ''}</span> <br> <span class="main-effect">${card.effect ? card.types.filter(e => e != 'Damage' && e != 'AoE' && e != 'Heal' && e != 'Effect' && e != 'OverTime').join('<br>') : ''}</span></span>
                                
                                `;

        // console.log(cardBody)

        App.appendChild(cardBody);

        // console.log(App)

    }

    // console.log(catalog.checkCatalogue(null,true))

    // App.innerHTML = result.join(' ');

}

const sortCatalog = (value='Name',order=null) => {

    const result = [];

    if (value == 'Name' || !value) {

        catalogNameList.sort();
    
        catalogNameList.forEach(e => { result.push(catalog.findSpell(e))})
    
        cardCatalog = result;

    } else if (value == 'Cost') {

        order == 'desc' ? cardCatalog.sort((a,b) => b.cost - a.cost) : cardCatalog.sort((a,b) => a.cost - b.cost);

        console.log(cardCatalog)

    }

};

catalog.checkCatalogue(null,true).forEach(e => e[1].forEach(f => { cardCatalog.push(f); catalogNameList.push(f.title) }));

sortCatalog();
displayCatalog();
console.log(catalog.checkCatalogue(null,true))


console.log(cardCatalog)


