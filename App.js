import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import { Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  render() {
    return (
    <Provider store={createStore(reducers)}>
      <LoginForm />
    </Provider>
   );
  }
}
