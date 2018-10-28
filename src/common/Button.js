import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    width: 216,
    height: 40,
    marginTop: 10,
    padding: 5,
    opacity: 0.85,
    borderRadius: 60,
    backgroundColor: "#f8e71c",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#707070"
  },

  textStyle: {
    //width: 64,
    //height: 27,
    fontFamily: "Calibri",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0.55,
    textAlign: "center",
    alignSelf: 'center',
    color: "#0d0c01"
  }
};
export default Button;
