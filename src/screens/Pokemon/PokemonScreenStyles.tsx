import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({

  header: {
    height: 400,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300
  },

  backButton: {
    position: 'absolute',
    left: 20,
  },

  name:{
    color:'white',
    alignSelf:'flex-start',
    fontSize:40,
    left:20,
  },

  pokeball:{
    width:240,
    height:240,
    bottom:-40,
    opacity:0.7,
  },

  pokemonImg:{
    width:250,
    height:250,
    position:'absolute',
    bottom:10,
  }
})