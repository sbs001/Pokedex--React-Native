import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonScreen from "../screens/Pokemon/PokemonScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";


const Stack = createStackNavigator();

export default function SeacrhStack<RootStackParams>() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}