import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { style } from "./HomeScreenStyles";


export default function HomeScreen() {

  const { top } = useSafeAreaInsets();

  return (
    <View style={style.home}>

      <Image source={require('../../../assets/pokebola.png')} style={style.pokeballImg} />

      <Text style={{...style.title, top: top + 20}} >Pokedex</Text>
    </View>
  )
}