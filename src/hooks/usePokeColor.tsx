import { useState } from "react";
import { useEffect } from "react"
import { pokeApi } from "../api/pokeApi";
import { PokemonComplete } from "../interfaces/PokeCompleteInterface";


export const usePokeColor = (id: string) => {

  const [pokeColor, setPokeColor] = useState('grey');

  const setColor = (type: string) => {
    switch (type) {
      case 'fighting' || 'flying': return setPokeColor('#cd853f');
      case 'poison': return setPokeColor('#ffc0cb');
      case 'ground': return setPokeColor('#f4a460');
      case 'rock': return setPokeColor('#8b4513');
      case 'bug': return setPokeColor('#9acd32');
      case 'ghost': return setPokeColor('#800080');
      case 'fire' || 'dragon': return setPokeColor('#ff4500');
      case 'water': return setPokeColor('#7fffd4');
      case 'grass': return setPokeColor('#006400');
      case 'electric': return setPokeColor('#ffd700');
      case 'psychic': return setPokeColor('#663399');
      case 'ice': return setPokeColor('#afeeee');
      case 'steel': return setPokeColor('#c0c0c0');
      default: return setPokeColor('orange')
        
    }
  };


  useEffect(() => {
    pokeApi.get<PokemonComplete>('https://pokeapi.co/api/v2/pokemon/' + id)
      .then( res => setColor(res.data.types[0].type.name))
  },[]);

  return {
    pokeColor
  }
}