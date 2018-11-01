import _ from 'lodash';
import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, TextInput, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import Button from '../common/Button';
import { registerInputChange, createUser, ListCity } from '../actions';

const { width, height } = Dimensions.get('window');

class Register extends Component { 
    componentWillMount() {
        this.props.ListCity();  
    }
    renderTextInput(placeholder, onChangeText, value ){
        return(
            <View>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#cccccc'}
                    style={styles.textInput}
                    value={ value }
                    underlineColorAndroid={'#f8e71c'}
                    onChangeText={ onChangeText }
                />
            </View> 
        )
    }
    clickSingUp() {
        const { sehir, email, isim, soyisim, telNo, parola, parolatkr } = this.props;
        this.props.createUser({ sehir, email, isim, soyisim, telNo, parola, parolatkr });
    }

    render() {   
        return (          
            <View style={{flex: 1}}>              
                <ImageBackground
                source={require('../img/backgroundImg.png')}
                style={{ width, height, opacity: 0.95 }}>

                    <View style= {styles.section}>       
                        <Text style={styles.txtKyt}>Kayıt</Text>
                        <Text style={styles.txtOl}>ol!</Text>
                    </View>
 
                    <View style={{ paddingHorizontal: 128, paddingTop: 20, flex: 1 }}>       
                        <View style={ styles.PickerView }>
                            <Picker
                                style={ styles.Picker }
                                selectedValue={this.props.sehir}
                                onValueChange={sehir => this.props.registerInputChange({ props: 'sehir', value: sehir })}
                            >
                                {_.map(this.props.cities, city =>
                                    <Picker.Item key={city.id} label={city.city} value={city.id} />
                                )}
                            </Picker>
                        </View>  

                        {this.renderTextInput('E-mail',
                            email => this.props.registerInputChange({ props: 'email', value: email }),
                            this.props.email )}
                        {this.renderTextInput('İsim',
                            isim => this.props.registerInputChange({ props: 'isim', value: isim }),
                            this.props.isim )}
                        {this.renderTextInput('Soyisim',
                            soyisim => this.props.registerInputChange({ props: 'soyisim', value: soyisim }),
                            this.props.soyisim )}
                        {this.renderTextInput('Telefon Numarası',
                            telNo => this.props.registerInputChange({ props: 'telNo', value: telNo }),
                            this.props.telNo)}
                        {this.renderTextInput('Parola',
                            parola => this.props.registerInputChange({ props: 'parola', value: parola }),
                            this.props.parola )}
                        {this.renderTextInput('Parola tekrar',
                            parolatkr => this.props.registerInputChange({ props: 'parolatkr', value: parolatkr }),
                            this.props.parolatkr )}
                    </View>
                    
                    <View style={{ paddingHorizontal: 145, paddingTop: 120, flex: 1 }}>
                        <Button onPress={this.clickSingUp.bind(this)}>Kayıt Ol</Button>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = {
    textInput:{
        width: width*0.65,
        textAlign: 'center',
        fontSize: 20,
        color:'#cccccc'
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 130,
        width: width * 0.30,
        height: height * 0.05,
    },
    txtKyt: {
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
        flex: 2, 
    },
    txtOl:{ 
        flex: 1, 
        textAlign: 'center',
        width: width*0.10,
        height: height*0.05,
        fontFamily: "SitkaSmall",
        fontSize: 23,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 36,
        letterSpacing: 0,
        color: "#ffffff"
    },
    PickerView: { 
        width: width * 0.65, 
        borderBottomWidth: 1, 
        borderBottomColor: '#f8e71c', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    Picker: { 
        marginLeft: 35, 
        color: '#cccccc',
        width: width * 0.28 
    }
};

const mapToStateProps = ({ registerResponse }) => {
    const { 
        sehir,
        email,
        isim,
        soyisim,
        telNo,
        parola,
        parolatkr,
        cities
    } = registerResponse;

    return {
        sehir,
        email,
        isim,
        soyisim,
        telNo,
        parola,
        parolatkr,
        cities
    };
}

export default connect(mapToStateProps, { registerInputChange, createUser, ListCity })(Register);