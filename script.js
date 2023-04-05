import pokemonArray from "./data/pokemon.js"
const cardContainer=document.querySelector(".card-container")


const renderCards = (pokemonObject) => {
    
        const {id, name, types, sprite} = pokemonObject
        
        let typesDisplay
        if (types.length>1) {
            typesDisplay=`${types[0]} & ${types[1]}`
        } else {
            typesDisplay=`${types[0]}`
        }
        
        return `<div>
        <img src=${sprite}/>
        <h1>${name} </h1>
        <p>${name} (#${id}) is a ${typesDisplay} type pokemon.</p> 
        </div>`
    }

pokemonArray.forEach((pokemon)=> {
    cardContainer.innerHTML+=renderCards(pokemon)
})
