import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Header from './common/Header';
import Register from './components/Register';
import Opening from './components/Opening';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="opening">
            <Scene
                key="openingScreen" component={Opening}
                hideNavBar="true"
            />
            </Scene>

            <Scene
                navigationBarStyle={{ height: 85}}
                sceneStyle={{ marginTop: 85 }}
                key="registerScreen" component={Register}
                renderTitle={() => (
                    <Header />
                )} />

            <Scene
                navigationBarStyle={{ height: 85}}
                sceneStyle={{ marginTop: 85 }}
                key="loginScreen" component={LoginForm}
                renderTitle={() => (
                    <Header />
          )} />
        </Router>
    );
};

export default RouterComponent;
