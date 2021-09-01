import { HeaderShownContext } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SimplePokemon } from '../interfaces/PokeInterface';
import HomeScreen from '../screens/Home/HomeScreen';
import PokemonScreen from '../screens/Pokemon/PokemonScreen';

const Stack = createStackNavigator();

export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: { pokemon: SimplePokemon, color: string }

}

export default function Navigator<RootStackParams>() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}