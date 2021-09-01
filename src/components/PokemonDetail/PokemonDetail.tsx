import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PokemonComplete } from "../../interfaces/PokeCompleteInterface";
import { DetailStyle } from "./PokemonDetailStyles";


interface Props {
  pokemon: PokemonComplete
}

export default function PokemonDetail({ pokemon }: Props) {

  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>

      <View style={DetailStyle.ctn}>

        <Text style={DetailStyle.title}>Types</Text>
        <Text>
          {pokemon.types.map(({ type }) =>
            <Text key={type.name} style={DetailStyle.text }>
              {`»${type.name} `}
            </Text>)}
        </Text>
      </View>

      <View style={{...DetailStyle.ctn, marginTop:10}}>

<Text style={DetailStyle.title}>Sprites</Text>

      </View>
    </ScrollView>
  )
}