import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { RootStackParams } from "../../navigator/StackNavigator";
import { Styles } from "./PokemonScreenStyles";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FadeInImage } from "../../components/FadeInImage/FadInImage";


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export default function PokemonScreen({ navigation, route }: Props) {

  const { top } = useSafeAreaInsets();
  const { pokemon } = route.params;
  return (
    <View>

      <View style={{ ...Styles.header, backgroundColor: route.params.color }}>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ ...Styles.backButton, top: top + 10 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>

        <Text style={{ ...Styles.name, top: top + 50 }}>{pokemon.name + '\n#' + pokemon.id}</Text>

        <Image source={require('../../../assets/pokebola-blanca.png')} style={Styles.pokeball} />

        <FadeInImage uri={pokemon.img} style={Styles.pokemonImg} />

      </View>

    </View>
  )
}