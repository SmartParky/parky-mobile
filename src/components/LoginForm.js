import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  ImageBackground,
  Dimensions,
 } from 'react-native';
import { connect } from 'react-redux';

import Button from '../common/Button';
import { loginInputChange, loginUser } from '../actions';

const { width, height } = Dimensions.get('window');

class LoginForm extends Component {
  
  clickLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
        source={require('../img/login.png')}
        style={styles.backgroundStyle}>

          <View style= {styles.section}>
              <Text style={styles.txtSign}>Giriş</Text>
              <Text style={styles.txtIn}>Yap!</Text>
          </View>

          <View style={{ paddingHorizontal: 130, paddingTop: 30, flex: 1 }}>
            <TextInput
            placeholder="E-Mail"
            placeholderTextColor={'#cccccc'}
            style={styles.inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.loginInputChange({ props: 'email', value: email })}
            underlineColorAndroid={'#f8e71c'}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={'#cccccc'}
              style={styles.inputStyle}
              value={this.props.password}
              onChangeText={password => this.props.loginInputChange({ props: 'password', value: password })}
              underlineColorAndroid={'#f8e71c'}
            />
          </View>
          
          <View style={{ paddingHorizontal: 150, paddingBottom: 150, flex: 1 }}>
            <Button onPress={this.clickLogin.bind(this)}> Sign In </Button>
          </View>

          <View style= {{ flex: 1}}>
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
        marginLeft: 60,
        width: width * 0.50,
        height: height * 0.05,
        //padding: 0,
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

const mapToStateProps = ({ loginResponse }) => {
  const { email, password } = loginResponse;

  return {
    email: 'beyzaaksoy@gmail.com',
    password: '1'
  };
}

export default connect(mapToStateProps, { loginInputChange, loginUser })(LoginForm);
