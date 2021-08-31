import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemonPagination } from "../../hooks/usePokemonPagination";
import { style } from "./HomeScreenStyles";


export default function HomeScreen() {

  const { top } = useSafeAreaInsets();
  const { pokemonList, loadPokemon } = usePokemonPagination();

  return (
    <View style={style.home}>

      <Image source={require('../../../assets/pokebola.png')} style={style.pokeballImg} />

      <Text style={{ ...style.title, top: top + 20 }} >Pokedex</Text>

      <FlatList
        data={pokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        onEndReached={loadPokemon}
        onEndReachedThreshold={0.4}
        ListFooterComponent={(<ActivityIndicator style={{ height: 120 }} size={50} color="grey" />)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}