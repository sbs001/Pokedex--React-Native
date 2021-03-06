import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, Text } from 'react-native'
import { TouchableOpacity, View } from 'react-native'
import { usePokeColor } from '../../hooks/usePokeColor'
import { SimplePokemon } from '../../interfaces/PokeInterface'
import { FadeInImage } from '../FadeInImage/FadInImage'
import { CardStyle } from './CardStyles'


interface Props {
  pokemon: SimplePokemon
}

const width = Dimensions.get('window').width * 0.4;


export default function Card({ pokemon }: Props) {


  const { pokeColor } = usePokeColor(pokemon.id);

  const navigation = useNavigation();

  if (!pokeColor) return <ActivityIndicator size={30} color={'gray'} style={{ margin: 80 }} />

  return (

    <TouchableOpacity
      activeOpacity={0.7} 
      style={{ ...CardStyle.ctn, width, backgroundColor: pokeColor }}
      onPress={() => navigation.navigate('PokemonScreen',{ pokemon, color: pokeColor})}
      >

      <View style={{ flex: 1 }} >

        <View>
          <Text style={CardStyle.name}>{pokemon.name + '\n#' + pokemon.id}</Text>
        </View>

        <View style={CardStyle.pokeballCtn}>
          <Image source={require('../../../assets/pokebola-blanca.png')} style={CardStyle.pokeball} />
        </View>

        <FadeInImage uri={pokemon.img} style={CardStyle.pokemonImg} />

      </View>
    </TouchableOpacity>
  )
}