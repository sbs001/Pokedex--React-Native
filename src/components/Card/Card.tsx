import React from 'react'
import { Dimensions, Image, Text } from 'react-native'
import { TouchableOpacity, View } from 'react-native'
import { SimplePokemon } from '../../interfaces/PokeInterface'
import { FadeInImage } from '../FadeInImage/FadInImage'
import { CardStyle } from './CardStyles'

interface Props {
  pokemon: SimplePokemon
}

const width = Dimensions.get('window').width * 0.4;

export default function Card({ pokemon }: Props) {

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={{ ...CardStyle.ctn, width }}>

        <View>
          <Text style={CardStyle.name}>{pokemon.name + '\n#' + pokemon.id}</Text>
        </View>

<View style={CardStyle.pokeballCtn}>
        <Image source={require('../../../assets/pokebola-blanca.png')} style={CardStyle.pokeball}/>
</View>
        
        <FadeInImage uri={pokemon.img} style={CardStyle.pokemonImg} />
      
      </View>
    </TouchableOpacity>
  )
}