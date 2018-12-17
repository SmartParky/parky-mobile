import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Scene, Router, Drawer} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Opening from './components/Opening';
import CarCreate from './components/CarCreate';
import Profil from './components/Profil';
import CreateRezervation from './components/CreateRezervation';
import Menu from './components/Menu';
import CarInfo from './components/CarInfo';
import PastRezervation from './components/PastRezervation';
import Homepage from './components/Homepage';
import Header from './common/Header';

const { width } = Dimensions.get('window');

export default class RouterComponent extends Component {
    render() {
        return (
            <Router navBar={Header}>
                <Scene key="root">
                    <Scene 
                        key="openingScreen" component={Opening}
                        hideNavBar="true"
                        />
                    <Scene
                        navigationBarStyle={{ height: 75 }}
                        sceneStyle={{ marginTop: 85 }}
                        key="loginScreen" component={LoginForm}
                    />
                    <Scene
                        navigationBarStyle={{ height: 75 }}
                        sceneStyle={{ marginTop: 85 }}
                        key="registerScreen" component={Register}
                    />
                    <Drawer                       
                        hideNavBar
                        key='leftMenu'
                        contentComponent={Menu}
                        drawerPosition="left"
                        drawerImage={require('./img/icon.png')}
                        drawerWidth={(width / 2 + 100)}                 
                    >
                        <Scene
                            navigationBarStyle={{ height: 85 }}
                            sceneStyle={{ marginTop: 85 }}
                            key="carCreateScrn" component={CarCreate}
                         />
                        <Scene
                            navigationBarStyle={{ height: 85 }}
                            sceneStyle={{ marginTop: 85 }}
                            key="ProfilScrn" component={Profil}
                         />
                        <Scene
                            navigationBarStyle={{ height: 85 }}
                            sceneStyle={{ marginTop: 85 }}
                            key="rezervationCreatePage" component={CreateRezervation}
                        />
                        <Scene
                            navigationBarStyle={{ height: 85 }}
                            sceneStyle={{ marginTop: 85 }}
                            key="CarInfoScrn" component={CarInfo}
                        />
                        <Scene
                            navigationBarStyle={{ height: 85 }}
                            sceneStyle={{ marginTop: 85 }}
                            key="rezervationPastPage" component={PastRezervation}
    
                        />
                        <Scene
                            navigationBarStyle={{ height: 85 }}
                            sceneStyle={{ marginTop: 85 }}
                            key="HomepageScrn" component={Homepage}

                        />
                    </Drawer> 
                </Scene>
           </Router>
        );
    }
} 