import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SearchBarStye } from "./SearchBarStyles";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {

  return (
    <View style={SearchBarStye.ctn}>
      <View style={SearchBarStye.inputCtn}>
        <TextInput
          placeholder={'Search Pokemon...'}
          style={SearchBarStye.input}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <Ionicons name={'search-outline'} size={25} color={'grey'} />
      </View>
    </View>
  )
}