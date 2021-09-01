import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigator/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

