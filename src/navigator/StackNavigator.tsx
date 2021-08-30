import { HeaderShownContext } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import PokemonScreen from '../screens/Pokemon/PokemonScreen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
}