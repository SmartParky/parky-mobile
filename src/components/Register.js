import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, TextInput, Text, Image, TouchableOpacity } from 'react-native';

import Button from '../common/Button';
import Header from '../common/Header';

const { width, height } = Dimensions.get('window');

class Register extends Component {
    renderTextInput(placeholder, onChangeText){
        return(
            <View>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#cccccc'}
                    style={styles.TextInput}
                    underlineColorAndroid={'#f8e71c'}
                    onChangeText={ onChangeText }
                />
            </View> 
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                      
                <ImageBackground
                source={require('../img/backgroundImg.png')}
                style={{ width, height: height * 0.87, opacity: 0.95 }}>

                    <View style= {styles.section}>       
                        <Text style={styles.txtKyt}>Kayıt</Text>
                        <Text style={styles.txtOl}>ol!</Text>
                    </View>

                    <View style={{ paddingHorizontal: 150, paddingTop: 30, flex: 1 }}>
                        {this.renderTextInput('Şehir',
                            sehir => console.log({ sehir }))}
                        {this.renderTextInput('E-mail',
                            email => console.log({ email }))}
                        {this.renderTextInput('İsim',
                            isim => console.log({ isim }))}
                        {this.renderTextInput('Soyisim',
                            soyisim => console.log({ soyisim }))}
                        {this.renderTextInput('Parola',
                            parola => console.log({ parola }))}
                        {this.renderTextInput('Parola tekrar',
                            parolatkr => console.log({ parolatkr }))}

                    </View>
                    
                    <View style={{ paddingHorizontal: 180, paddingTop: 100, flex: 1 }}>
                        <Button>Kayıt Ol</Button>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = {
    TextInput:{
        width: width*0.65,
        textAlign: 'center',
        fontSize: 20,
        color:'#cccccc'
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 130,
        width: width * 0.30,
        height: height * 0.05,
    },
    txtKyt: {
        width: width*16,
        height: height*0.05,
        fontFamily: "SitkaSmall",
        fontSize: 23,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "right",
        color: "#f8e71c",
        flex: 2, 
    },
    txtOl:{ 
        flex: 1, 
        textAlign: 'center',
        width: width*0.10,
        height: height*0.05,
        fontFamily: "SitkaSmall",
        fontSize: 23,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        color: "#ffffff"

    }
};

export default Register;