import { useState } from "react";
import { useEffect } from "react";
import { pokeApi } from "../api/pokeApi";
import { PokemonComplete } from "../interfaces/PokeCompleteInterface";

export const usePokemonDetail = (id: string) => {

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonComplete>({} as PokemonComplete);

  useEffect(() => {
    pokeApi.get<PokemonComplete>('https://pokeapi.co/api/v2/pokemon/' + id)
      .then(res => setPokemon(res.data))
      .then(() => setLoading(false))
  }, []);

  return {
    loading,
    pokemon
  }
}