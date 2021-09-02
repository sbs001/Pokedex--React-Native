import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InicialScreen from '../screens/InicialScreen';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();


export default function AppStack<RootStackParams>() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="InicialScreen" component={InicialScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}