import { useState } from "react";
import { useEffect, useRef } from "react";
import { pokeApi } from "../api/pokeApi";
import { PokemonsPag, Result, SimplePokemon } from "../interfaces/PokeInterface";


export const usePokemonPagination = () => {


  const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
  const [loading,setLoading] = useState(true);

  const actualPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');


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

    setLoading(true);
    const res = (await pokeApi.get<PokemonsPag>(actualPage.current)).data;
    actualPage.current = res.next;

    setPokemonList([...pokemonList,...mapPokemonList(res.results)]);
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