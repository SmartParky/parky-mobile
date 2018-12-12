import React from 'react';
import { View, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

const Header = () => {
    return(
        <ImageBackground
        source={require('../img/header.png')}
        style={styles.backgroundStyle}
        >
            <View style={styles.containerStyle}>
                <Image 
                source={require('../img/logo.png')}
                style={{ width: width * 0.17, height: height * 0.10 }} 
                />                
                <TouchableOpacity 
                style={{paddingVertical:25}}
                onPress={()=> Actions.drawerOpen()}>
                    <Image source={require('../img/icon.png')} />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

const styles = {
    backgroundStyle:{
        width, 
        height: height*0.14,
        paddingBottom: 20
    },
    containerStyle: { 
        flexDirection: 'row', 
        width: (width / 2) + 20, 
        justifyContent: 'space-between', 
        marginHorizontal: 150 
    }
};

export default Header;