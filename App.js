import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginForm></LoginForm>
      </View>
    );
  }
}
