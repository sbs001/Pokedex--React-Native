import { StyleSheet } from "react-native";

export const DetailStyle = StyleSheet.create({
  ctn: {
    marginHorizontal: 20,

  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10

  },

  text: {
    fontSize: 20
  },

  sprite: {
    width: 150,
    height: 150,
    borderWidth: 10,
    marginTop: 5,
  },

  moves: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  final: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginVertical: 20
  }
})