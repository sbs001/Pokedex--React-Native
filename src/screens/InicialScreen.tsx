import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";


export default function InicialScreen({ }) {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../assets/pokedex.png')}
        style={{ width: '100%', height: '100%' }}
      />
      <TouchableOpacity
        style={{
          top: '33%',
          left: 70,
          position: 'absolute',
        }}
        onPress={() => navigation.navigate('BottomTab')}
      >
        <Image source={require('../../assets/go.png')} />
      </TouchableOpacity>
    </View>
  )
}