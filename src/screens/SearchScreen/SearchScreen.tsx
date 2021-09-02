import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { usePokemonSearch } from '../../hooks/usePokemonSearch';
import { SearcScreenStyles } from './SearchScreenStyles';

export default function SearchScreen() {

  const marginTop = useSafeAreaInsets().top + 10;

  const { loading, pokemonList } = usePokemonSearch();

  if (loading) return <ActivityIndicator size={60} style={{flex:1}} color={'grey'} />
  
  return (
    <View style={{ flex: 1, marginTop, marginHorizontal: 20 }}>

      <SearchBar />

      <FlatList
            data={pokemonList}
            keyExtractor={(pokemon) => pokemon.id}
            renderItem={({ item }) => <Card pokemon={item} />}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={<Text style={SearcScreenStyles.title}>Results of: </Text>}
          />
    </View>
  )
}