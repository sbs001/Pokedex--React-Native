import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { RootStackParams } from "../../navigator/HomeStack";
import { Styles } from "./PokemonScreenStyles";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FadeInImage } from "../../components/FadeInImage/FadInImage";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail";


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export default function PokemonScreen({ navigation, route }: Props) {

  const { top } = useSafeAreaInsets();
  const { id, name, img } = route.params.pokemon;

  const { loading, pokemon } = usePokemonDetail(id);

  return (
    <View style={{ flex: 1 }}>

      <View style={{ ...Styles.header, backgroundColor: route.params.color }}>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ ...Styles.backButton, top: top + 10 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>

        <Text style={{ ...Styles.name, top: top + 50 }}>{name + '\n#' + id}</Text>

        <Image source={require('../../../assets/pokebola-blanca.png')} style={Styles.pokeball} />

        <FadeInImage uri={img} style={Styles.pokemonImg} />
      </View>

      {loading
        ?
        <ActivityIndicator style={{ flex: 1 }} size={60} color={route.params.color} />
        : <PokemonDetail pokemon={pokemon} color={route.params.color}/>}

    </View>
  )
}