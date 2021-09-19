import PokemonCard from "../../components/PokemonCard";
import { useState } from "react";

import POKEDATA from "../../data.json"
import game from "./style.module.css"

let POKE_LIST = POKEDATA.map(poke => {
    Object.assign(poke, {active: false})
    return poke;
})

const GamePage = () => {

    const [Pokemons, setPokemons] = useState(POKE_LIST);

    const cardClick = (pokeId) => {
        POKE_LIST = POKE_LIST.map(poke => {
            if(poke.id === pokeId) {
                poke['active'] = !poke.active 
            }
            return poke;
        })
        setPokemons(POKE_LIST);
    }

    return (
        <>
            <div className={game.flex}>
                {
                    Pokemons.map(el => <PokemonCard
                        id = { el.id }
                        name = { el.name }
                        type = { el.type }
                        img = { el.img }
                        values = { el.values }
                        key = { el.id }
                        isActive = { el.active }
                        cardClick = { cardClick }
                    />)
                }
            </div>
        </>
    )
}

export default GamePage;
