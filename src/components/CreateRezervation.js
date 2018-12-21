import _ from 'lodash';
import React, { Component } from 'react';
import { View, Image, Dimensions, Text, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';

import Button from '../common/Button';
import { createRezervation, rezInputChange, ListPark, ListCar } from '../actions';

const { width, height } = Dimensions.get('window');

class CreateRezervation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baslangicSaati: "2019-01-05 12:00",
            bitisSaati: "2019-01-05 13:00"
        }
    }
    componentWillMount() {
        this.props.ListPark();
        this.props.ListCar();
    }

    clickRezervationCreate() {
        const { otopark, arac } = this.props;
        const { baslangicSaati, bitisSaati } = this.state;
        this.props.createRezervation({ otopark, arac, baslangicSaati, bitisSaati });
    }

    render() {     
        return (
           <View>
                <View style={styles.imgView}>
                    <Image source={require('../img/circle.png')}
                        style={{ width: width * 1.15, height: height * 0.70 }} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 30 }}>
                    <Text style={styles.txt}>
                        Rezervasyon Bilgilerini Giriniz
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={{ paddingHorizontal: 128, paddingTop: 20, flex: 1 }}>
                        <View style={styles.PickerView}>
                            <Picker
                                style={styles.Picker}
                                selectedValue={this.props.otopark}
                                onValueChange={otopark => this.props.rezInputChange({ props: 'otopark', value: otopark })}
                            >
                                {_.map(this.props.parks, park =>
                                    <Picker.Item key={park.id} label={park.name} value={park.id} />
                                )}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 128, paddingTop: 10, flex: 1 }}>
                        <View style={styles.PickerCar}>
                            <Picker
                                style={styles.Picker}
                                selectedValue={this.props.arac}
                                onValueChange={arac => this.props.rezInputChange({ props: 'arac', value: arac })}
                            >
                                {_.map(this.props.cars, plate =>
                                    <Picker.Item key={plate.id} label={plate.plate} value={plate.id} />
                                )}
                            </Picker>
                        </View>
                    </View>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.baslangicSaati}
                        mode="datetime"
                        placeholder="select date"
                        format="YYYY-MM-DD hh:mm"
                        minDate="2019-01-05"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(baslangicSaati) => { this.setState({ baslangicSaati: baslangicSaati }) }}
                    />

                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.bitisSaati}
                        mode="datetime"
                        placeholder="select date"
                        format="YYYY-MM-DD hh:mm"
                        minDate="2019-01-05"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                marginTop: 20
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(bitisSaati) => { this.setState({ bitisSaati: bitisSaati }) }}
                    />

                    <View style={{ marginTop: 25 }}>
                        <Button onPress={this.clickRezervationCreate.bind(this)}>Kaydet</Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    txt: {
        paddingVertical: 10,
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
    },
    PickerView: {
        width: width * 0.65,
        height: height * 0.07,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 12,
        elevation: 5,
        marginTop: 90
    },
    PickerCar: {
        width: width * 0.65,
        height: height * 0.07,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 12,
        elevation: 5,
        marginTop: 50
    },
    Picker: {
        paddingVertical: 10,
        width: width * 0.60,
        height: 40,
        color: "#000000"
    }
};

const mapToStateProps = ({ rezervationResponse }) => {
    const {
        otopark,
        arac,
        baslangicSaati,
        bitisSaati,
        parks,
        cars
    } = rezervationResponse;

    return {
        otopark,
        arac,
        baslangicSaati,
        bitisSaati,
        parks,
        cars
    };
}

export default connect(mapToStateProps, { createRezervation, rezInputChange, ListPark, ListCar })(CreateRezervation);