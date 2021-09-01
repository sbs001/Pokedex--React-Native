import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PokemonComplete } from "../../interfaces/PokeCompleteInterface";
import { FadeInImage } from "../FadeInImage/FadInImage";
import { DetailStyle } from "./PokemonDetailStyles";
import { Ionicons } from '@expo/vector-icons';



interface Props {
  pokemon: PokemonComplete,
  color: string
}

export default function PokemonDetail({ pokemon, color }: Props) {

  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>

      <View style={{ ...DetailStyle.ctn, marginTop: 380, }}>

        <Text style={DetailStyle.title}>Types</Text>
        <Text>
          {pokemon.types.map(({ type }) =>
            <Text key={type.name} style={DetailStyle.text}>
              {`»${type.name} `}
            </Text>)}
        </Text>

        <Text style={DetailStyle.title}>Wheigth</Text>
        <Text style={DetailStyle.text}>{pokemon.weight}Kg</Text>
      </View>

      <View style={DetailStyle.ctn}>
        <Text style={DetailStyle.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <FadeInImage uri={pokemon.sprites.front_default} style={{ ...DetailStyle.sprite, borderColor: color }} />
        <FadeInImage uri={pokemon.sprites.back_default} style={{ ...DetailStyle.sprite, borderColor: color }} />
        <FadeInImage uri={pokemon.sprites.front_shiny} style={{ ...DetailStyle.sprite, borderColor: color }} />
        <FadeInImage uri={pokemon.sprites.back_shiny} style={{ ...DetailStyle.sprite, borderColor: color }} />
      </ScrollView>

      <View style={DetailStyle.ctn}>

        <Text style={DetailStyle.title}>Base Abilities</Text>
        <Text>
          {pokemon.abilities.map(({ ability }) =>
            <Text key={ability.name} style={DetailStyle.text}>
              {`»${ability.name} `}
            </Text>)}
        </Text>

        <Text style={DetailStyle.title}>Moves</Text>
        <View style={DetailStyle.moves}>
          {pokemon.moves.map(({ move }) =>
            <Text key={move.name} style={{ ...DetailStyle.text, width: '50%' }}>
              <Ionicons name="send"></Ionicons>
              {` ${move.name}`}
            </Text>)}
        </View>

        <Text style={DetailStyle.title}>Stats</Text>
        <View style={DetailStyle.moves}>
          {pokemon.stats.map((stat) =>
            <Text key={stat.stat.name} style={{ fontSize:15, width: '50%' }}>
              <Ionicons name="checkmark-circle"></Ionicons>
              {` ${stat.stat.name} » ${stat.base_stat}`} 
            </Text>)}
        </View>
      </View>

      <FadeInImage uri={pokemon.sprites.front_default} style={DetailStyle.final} />

    </ScrollView>
  )
}