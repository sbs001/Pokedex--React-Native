import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { FadeInImage } from "../../components/FadeInImage/FadInImage";
import { usePokemonPagination } from "../../hooks/usePokemonPagination";
import { style } from "./HomeScreenStyles";


export default function HomeScreen() {

  const { top } = useSafeAreaInsets();
  const { pokemonList, loadPokemon } = usePokemonPagination();

  return (
    <View style={style.home}>

      <Image source={require('../../../assets/pokebola.png')} style={style.pokeballImg} />

      <SafeAreaView style={{ top: top + 20 }}>
        <Text style={style.title} >Pokedex</Text>

        <FlatList
          data={pokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({ item }) => <FadeInImage uri={item.img} style={{ width: 100, height: 100 }} />}
          onEndReached={loadPokemon}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(<ActivityIndicator style={{ height: 120 }} size={50} color="grey" />)}
          showsVerticalScrollIndicator={false}
        />
        
      </SafeAreaView>
    </View>
  )
}