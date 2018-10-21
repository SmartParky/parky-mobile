import React from 'react';
import { ImageBackground, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const Header = () => {
    return(
        <ImageBackground
        source={require('../img/header.png')}
        style={styles.backgroundStyle}
        >
            <Image source={require('../img/logo.png')}
            style={{ width:width*0.17, height:height*0.10 }} />

        </ImageBackground>
    );
};

const styles = {
    backgroundStyle:{
        width, 
        height: height*0.14, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingBottom: 20
    }
};

export default Header;