import React, { Component } from 'react';
import { View, TextInput, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Button from '../common/Button';
import { inputChange, createCar } from '../actions';

const { width, height } = Dimensions.get('window');

class CarCreate extends Component {

clickCarCreate() {
    const { plate, carColor, carType } = this.props;
    this.props.createCar ({ plate, carColor, carType });
}
    render() {  
        return(
            <View>
                <View style={ styles.imgView }>
                    <Image source={require('../img/circle.png')}
                        style={{ width: width * 1.15, height: height * 0.70 }} />
                </View>
                <View style={{ alignItems:'center', justifyContent:'center', paddingVertical:30 }}>
                    <Text style={ styles.txt }>
                        Araç Bilgilerini Giriniz
                    </Text>
                </View>
                <View style={ styles.container }>                 
                    <TextInput style={ styles.txtInput }
                        underlineColorAndroid='transparent'
                        placeholder='Plaka'
                        value= { this.props.plate }
                        onChangeText={ plate => this.props.inputChange({ props: 'plate', value: plate }) } />
                    <TextInput style={ styles.txtInput }
                        underlineColorAndroid='transparent'
                        placeholder='Renk'
                        value= { this.props.carColor }
                        onChangeText={carColor => this.props.inputChange({ props: 'carColor', value: carColor }) } />
                    <TextInput style={ styles.txtInput }
                        underlineColorAndroid='transparent'
                        placeholder='Araç Tipi'
                        value={ this.props.carType }
                        onChangeText={carType => this.props.inputChange({ props: 'carType', value: carType }) } />
                    <View style={{ marginTop: 25 }}>
                        <Button onPress={this.clickCarCreate.bind(this)}>Araç Ekle</Button>
                    </View>
                </View>               
            </View>
        );
    }
}

const styles = {
    txt: {
        paddingVertical:10,
        width: width*0.60,
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
        elevation: 5,
        textAlign: 'center',
        borderRadius: 12,
        elevation: 5,
        fontSize: 20,
        marginTop: 20
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
        height: height * 0.70 
    }

};

const mapToStateProps= ({ carResponse }) => {
    const {
        plate,
        carColor,
        carType
    } = carResponse;

    return {
        plate,
        carColor,
        carType
    };
};

export default connect(mapToStateProps, { inputChange, createCar })(CarCreate);