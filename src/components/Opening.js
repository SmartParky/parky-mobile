import React, { Component }  from 'react';
import { ImageBackground, Dimensions, Image, View } from 'react-native';

import Button from '../common/Button';

const { width, height } = Dimensions.get('window');


class Opening extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../img/opening.png')}
                style={{ width, height, justifyContent:'center', alignItems: 'center' }}               
            >
                <Image source={require('../img/logo.png')}
                    style={{ width: width * 0.51, height: height * 0.29 }} />
                <View style={{ marginTop: height*0.10,height: height*0.17, justifyContent:'space-between'}}>
                    <Button>Giriş Yap</Button>
                    <Button>Kayıt Ol</Button>
                </View>
                
            </ImageBackground>
        );
    }
}


export default Opening;