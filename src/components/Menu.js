import React, { Component } from 'react';
import { View, 
         Text, 
         Dimensions, 
         TouchableOpacity, 
         Image, 
         AsyncStorage } from 'react-native';

import { retrieveUser } from '../actions/BaseActions'
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');

class Menu extends Component {

    state = {
        user: {}
    }

    componentWillMount() {
        retrieveUser((body) => {
            this.setState({
                user: body
            });
        });
    }

    logOut = () => {
        AsyncStorage.clear();
    }
    
    renderSection(sourceImage, text, onPress) {
        return(
            <TouchableOpacity 
            style={styles.section}
            onPress={onPress}
            >
                <Image
                    source={sourceImage}
                    style={{
                        width: 16,
                        height: 16,
                    }}
                />
                <Text style={styles.txt}>{text}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.element}>
                    <View style={styles.header}>
                        <Text style={styles.txt}>{this.state.user.first_name} {this.state.user.last_name}</Text>
                    </View>

                    {this.renderSection(require('../img/hmpgicon.png'), 'Anasayfa')}
                    {this.renderSection(require('../img/prflicon.png'), 'Profil', () => Actions.ProfilScrn())}
                    {this.renderSection(require('../img/rezicon.png'), 'Rezervasyonlarım')}
                    {this.renderSection(require('../img/caricon.png'), 'Araç Bilgileri')}
                    {this.renderSection(require('../img/favicon.png'), 'Favorilerim')}

                    <View style={styles.footer}>
                        {this.renderSection(require('../img/infoicon.png'), 'Hakkımızda')}
                        {this.renderSection(require('../img/outicon.png'), 'Çıkış', () => { this.logOut(), Actions.loginScreen() })}
                    </View>
                </View>
            </View>
        );
    }
    
}

const styles = {
    header:{
        paddingVertical:25,
        paddingHorizontal: 65,
        flexDirection: 'row',
        marginVertical: 5,
    },
    footer: {
        paddingVertical: 30,
        alignItems: 'center',
        flexDirection: 'column',
    },
    txt:{
        flex:1,
        paddingHorizontal: 20,
        width: 108,
        height: 30,
        fontFamily: "Gibson",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height:height,
        opacity: 0.98,
        backgroundColor: "#1d1b1a"
    },
    element:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    section: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
    }
}

export default Menu;