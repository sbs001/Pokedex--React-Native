import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchScreen() {

  const marginTop = useSafeAreaInsets().top + 10;

  return (
    <View style={{ flex: 1, marginTop, marginHorizontal: 20 }}>

      <SearchBar />
    </View>
  )
}