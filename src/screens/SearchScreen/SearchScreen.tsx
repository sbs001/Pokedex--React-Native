import React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { usePokemonSearch } from '../../hooks/usePokemonSearch';
import { SimplePokemon } from '../../interfaces/PokeInterface';
import { SearcScreenStyles } from './SearchScreenStyles';

export default function SearchScreen() {

  const marginTop = useSafeAreaInsets().top + 10;

  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const { loading, pokemonList } = usePokemonSearch();


  useEffect(() => {
    if (!term) return setPokemonFiltered([]);
    setPokemonFiltered(pokemonList.filter(p => p.name.toLowerCase().includes(term.toLowerCase()) || p.id === term))
  }, [term])

  if (loading) return <ActivityIndicator size={60} style={{ flex: 1 }} color={'grey'} />

  return (
    <View style={{ flex: 1, marginTop, marginHorizontal: 20 }}>

      <SearchBar onChange={(value) => setTerm(value)} />

      <FlatList
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => <Card pokemon={item} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={<Text style={SearcScreenStyles.title}>Results of: {term} </Text>}
      />
    </View>
  )
}