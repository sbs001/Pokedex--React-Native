import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SearchBarStye } from "./SearchBarStyles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useDebounceValue } from "../../hooks/useDebounceValue";
import { useEffect } from "react";

interface Props {
  onChange: (value: string) => void
};

export default function SearchBar({ onChange }: Props) {

  const [input, setInput] = useState('')

  const debounceValue = useDebounceValue(input);

  useEffect(() => {
    onChange(debounceValue)
  }, [debounceValue]);

  return (
    <View style={SearchBarStye.ctn}>
      <View style={SearchBarStye.inputCtn}>
        <TextInput
          placeholder={'Search Pokemon...'}
          style={SearchBarStye.input}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={input}
          onChangeText={setInput}
        />
        <Ionicons name={'search-outline'} size={25} color={'grey'} />
      </View>
    </View>
  )
}