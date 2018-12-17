import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
const CreateRezvButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};
const styles = {
    buttonStyle: {
        width: 68.4,
        height: 49.6,
        borderRadius: 20,
        backgroundColor: "#f8e71c",
        marginLeft: 150,
        justifyContent: 'center'
    },
    textStyle: {
        width: 50,
        height: 50,
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 5
    }
};
export default CreateRezvButton;