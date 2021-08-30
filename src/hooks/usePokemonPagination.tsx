import { useState } from "react";
import { useEffect, useRef } from "react";
import { pokeApi } from "../api/pokeApi";
import { PokemonsPag } from "../interfaces/PokeInterface";


export const usePokemonPagination = () => {


  const [pokemonList, setPokemonList] = useState([]);
  
  const actualPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');


  const loadPokemon = async () => {

    const res = (await pokeApi.get<PokemonsPag>(actualPage.current)).data;
    actualPage.current = res.next;

  };

  useEffect(() => {
    loadPokemon();
  }, []);

}