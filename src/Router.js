import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Opening from './components/Opening';


const RouterComponent = () => {
    return (
        <Router hideNavBar="true">
            <Scene key="register">
                <Scene 
                    key="registerScreen" component={Opening} />
            </Scene>
        </Router>
    );
};


export default RouterComponent;