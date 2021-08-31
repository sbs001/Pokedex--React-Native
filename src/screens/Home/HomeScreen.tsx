import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Card from "../../components/Card/Card";
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

        <View style={{alignItems:'center'}}>
          <FlatList
            data={pokemonList}
            keyExtractor={(pokemon) => pokemon.id}
            renderItem={({ item }) => <Card pokemon={item} />}
            onEndReached={loadPokemon}
            onEndReachedThreshold={0.4}
            ListFooterComponent={(<ActivityIndicator style={{ height: 120 }} size={50} color="grey" />)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>

      </SafeAreaView>
    </View>
  )
}