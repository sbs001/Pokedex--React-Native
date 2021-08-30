import { useEffect, useRef } from "react";
import { pokeApi } from "../api/pokeApi";


export const usePokemonPagination = () => {

  const actualPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');


  const loadPokemon = async () => {

    console.log((await pokeApi.get(actualPage.current)).data)
  };

  useEffect(() => {
    loadPokemon();
  }, []);

}