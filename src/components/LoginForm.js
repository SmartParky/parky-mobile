import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image } from 'react-native';

import Button from '../common/Button';
import Header from '../common/Header';

const { width, height } = Dimensions.get('window');

class LoginForm extends Component {
state ={ email: '', password: '' };

  render() {
    const { email, password } = this.state;
    const { inputStyle, txtSign, txtIn, buttonStyle, txt } = styles;
    return (
      <View style={{flex: 1}}>
      <Header />
      <ImageBackground
      source={require('../img/login.png')}
      style={styles.backgroundStyle}>

      <View style= {styles.section}>
          <Text style={styles.txtSign}>Giriş</Text>
          <Text style={styles.txtIn}>Yap!</Text>
      </View>

      <View style={{ paddingHorizontal: 150, paddingTop: 30, flex: 1 }}>
        <TextInput
        placeholder="E-Mail"
        placeholderTextColor={'#cccccc'}
        style={styles.inputStyle}
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        underlineColorAndroid={'#f8e71c'}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={'#cccccc'}
          style={styles.inputStyle}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          underlineColorAndroid={'#f8e71c'}
        />
      </View>
      <View style={{ paddingHorizontal: 180, paddingBottom: 200, flex: 1 }}>
        <Button> Sign In </Button>
      </View>

      <View style= {styles.section}>
      <Text style={styles.txt}>Dont you have account yet?</Text>
      </View>

      </ImageBackground>
      </View>
    )
  };
}
const styles = {
    backgroundStyle:{
        width, 
        height: height * 0.87,
        opacity: 0.95,
    },

    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 20,
        width: 350,
        padding: 0,
    },

    inputStyle: {
      width: width*0.65,
      textAlign: 'center',
      fontSize: 20,
      marginTop: 0,
      color:'#cccccc'
    },
    txtSign: {
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
      flex: 2
    },
    txtIn: {
      flex: 1,
      textAlign: 'center',
      width: width*0.10,
      height: height*0.1,
      fontFamily: "SitkaSmall",
      fontSize: 23,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: 36,
      letterSpacing: 0,
      color: "#ffffff"
    },
    txt: {
      width: 144,
      height: 10,
      fontFamily: "Calibri",
      fontSize: 12,
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: 33,
      letterSpacing: 0.3,
      textAlign: "left",
      color: "#ffffff"
    }
};


export default LoginForm;
