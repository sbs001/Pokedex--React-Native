import { StyleSheet } from "react-native";

export const SearchBarStye = StyleSheet.create({

  inputCtn: {
    backgroundColor: '#f3f1f2'
    ,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 10,
  },

  input: {
    fontSize: 17,
  },

  ctn: {
    marginTop: 30,
    position: 'absolute',
    width: '100%'
  }
})