import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Opening from './components/Opening';
import CarCreate from './components/CarCreate';
import Profil from './components/Profil';
import CreateRezervation from './components/CreateRezervation';
import PastRezervation from './components/PastRezervation';
import Header from './common/Header';

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
                navigationBarStyle={{ height: 85 }}
                sceneStyle={{ marginTop: 85 }}
                key="registerScreen" component={Register}
                renderTitle={() => (
                    <Header />
                )} />
            <Scene
                navigationBarStyle={{ height: 85 }}
                sceneStyle={{ marginTop: 85 }}
                key="loginScreen" component={LoginForm}
                renderTitle={() => (
                    <Header />
                )} />
            <Scene
                navigationBarStyle={{ height: 85 }}
                sceneStyle={{ marginTop: 85 }}
                key="carCreateScrn" component={CarCreate}
                renderTitle={() => (
                    <Header />
                )} />
            <Scene
                navigationBarStyle={{ height: 85 }}
                sceneStyle={{ marginTop: 85 }}
                key="ProfilScrn" component={Profil}
                renderTitle={() => (
                    <Header />
                )} />

            <Scene
                navigationBarStyle={{ height: 85 }}
                sceneStyle={{ marginTop: 85 }}
                key="rezervationCreatePage" component={CreateRezervation}
                renderTitle={() => (
                    <Header />
                )}
            />
            <Scene
                navigationBarStyle={{ height: 85 }}
                sceneStyle={{ marginTop: 85 }}
                key="rezervationPastPage" component={PastRezervation}
                renderTitle={() => (
                    <Header />
                )}
            />
        </Router>
    );
};

export default RouterComponent;
