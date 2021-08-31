import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({

  ctn: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    
  },

  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
  
  pokeballCtn:{
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow:'hidden'
  },

  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },

  pokemonImg: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -5,
    right: -8,
  }
})