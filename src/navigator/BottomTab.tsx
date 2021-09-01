import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import Navigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Navigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}