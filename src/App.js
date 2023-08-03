import Pokemon from "./components/Pokemon";
import Pcards from "./components/Pcards";
import { useEffect, useState } from "react";


function App() {
const [pokemon, setPokemon] = useState(); 

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const listaPokemones = await response.json() 
        const {results} = listaPokemones

        const pokemone = results.map( async (pokemon) =>  {
            const response = await fetch(pokemon.url)
            const poke = await response.json()

            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.dr
}
  } 
    };
    
export default App;
