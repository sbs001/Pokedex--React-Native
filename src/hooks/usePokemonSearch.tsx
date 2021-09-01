import { useState } from "react";
import { useEffect, useRef } from "react";
import { pokeApi } from "../api/pokeApi";
import { PokemonsPag, Result, SimplePokemon } from "../interfaces/PokeInterface";


export const usePokemonPagination = () => {


  const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
  const [loading,setLoading] = useState(true);



  const mapPokemonList = (pokemons: Result[]):SimplePokemon[] => {

    return pokemons.map(({ name, url }) => {
      const id = url.split('/')[6];
      return {
        name,
        id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      }
    })
  }

  const loadPokemon = async () => {

    const res = (await pokeApi.get<PokemonsPag>('https://pokeapi.co/api/v2/pokemon?limit=1200')).data;
    setPokemonList(mapPokemonList(res.results));
    setLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    pokemonList,
    loading,
    loadPokemon
  }

}