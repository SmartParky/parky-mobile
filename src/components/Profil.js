import React, { Component } from 'react';
import { View, TextInput, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Button from '../common/Button';
import { userUpdate } from '../actions';
import { retrieveUser } from '../actions/BaseActions'

const { width, height } = Dimensions.get('window');

class Profil extends Component {
    state = {
        sehir: '',
        email: '',
        isim: '',
        soyisim: '',
        telno: ''
    }
    componentWillMount() {     
        retrieveUser((body) => {
            this.setState({
                email: body.email,
                isim: body.first_name,
                soyisim: body.last_name,
                telno: body.phone_number
            });
        })
    }
    renderTextInput(placeholder, onChangeText, value) {
        return (
            <View>
                <TextInput
                    placeholder={placeholder}
                    style={styles.txtInput}
                    value={value}
                    underlineColorAndroid={'transparent'}
                    onChangeText={onChangeText}
                />
            </View>
        )
    }
    clickUpate() {
        const {
            email,
            isim,
            soyisim,
            telno
        } = this.state
        this.props.userUpdate({ email, isim, soyisim, telno });
    }
    render() {
        console.log(this.state.email);
        return(
            <View>
                <View style={styles.imgView}>
                    <Image source={require('../img/circle.png')}
                        style={{ width: width * 1.15, height: height * 0.70 }} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 30 }}>
                    <Text style={styles.txt}>
                        Kullanıcı Bilgileriniz
                    </Text>
                </View>
                <View style={styles.container}>
                    {this.renderTextInput( 'E-mail',
                        email => this.setState({ email }),
                        this.state.email )}
                    {this.renderTextInput('İsim',
                        isim => this.setState({ isim }),
                        this.state.isim)}
                    {this.renderTextInput('Soyisim',
                        soyisim => this.setState({ soyisim }),
                        this.state.soyisim)}
                    {this.renderTextInput('Telefon',
                        telno => this.setState({ telno }),
                        this.state.telno)}
                    <View style={{ marginTop: 25 }}>
                        <Button onPress={this.clickUpate.bind(this)}>Güncelle</Button>
                        <Button>Araç Ekle</Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    txt: {
        paddingVertical: 5,
        width: width * 0.60,
        height: 40,
        fontFamily: "Cambria",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic",
        lineHeight: 13,
        letterSpacing: 0.63,
        textAlign: "center",
        color: "#000000"
    },
    txtInput: {
        width: width * 0.65,
        height: height * 0.07,
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 12,
        elevation: 5,
        fontSize: 20,
        marginTop: 15
    },
    imgView: {
        position: 'absolute',
        zIndex: 1,
        paddingHorizontal: 190,
        paddingTop: 30,
        width: width,
        height: height
    },
    container: {
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height * 0.85
    }

};

const mapToStateProps = ({ updateInfoResponse}) => {
    const {
        email,
        isim,
        soyisim,
        telefon,
    } = updateInfoResponse

    return {
        email,
        isim,
        soyisim,
        telefon,
    };
}

export default connect(mapToStateProps, { userUpdate })(Profil);