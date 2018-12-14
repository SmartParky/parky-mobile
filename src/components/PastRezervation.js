import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { View, TextInput, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ListRezervation, DeleteRezervation } from '../actions';
import CreateRezvButton from '../common/CreateRezvButton';
import Button from '../common/Button';

const { width, height } = Dimensions.get('window');

class PastRezervation extends Component {

  componentWillMount() {
    this.props.ListRezervation();

  }

  clickRezervationDelete() {

    const { id } = this.props.rezervations
    _.map(this.props.rezervations, rezervations =>
    this.props.DeleteRezervation(id)
  )
  }

  clickRezervationCreate() {
    Actions.rezervationCreatePage()
  }
    render() {
        return(
            <View style={{flex: 1}}>
              <Text style={ styles.txt }>
                Rezervasyonlarım
              </Text>
                <ScrollView>
                  {_.map(this.props.rezervations, rezervations =>
                  <View style={{ alignItems:'center', justifyContent:'center', paddingVertical:30 }}>

                      <View style={styles.cardStyle}>
                        <Image source={require('../img/logo.png')}
                            style={ styles.imgStyle} />

                        <View style={styles.content}>
                          <Text style={styles.nameStyle}>{rezervations.park.name}</Text>
                            <View style={styles.contentView}>
                              <View>
                                <Image source={require('../img/date.png')}
                                    style={ styles.dateImgStyle } />
                                <Image source={require('../img/date.png')}
                                    style={ styles.dateImgStyle } />
                              </View>
                              <View>
                              <Text style={ styles.dateStyle }>{rezervations.start_time}</Text>
                              <Text style={ styles.dateStyle }>{rezervations.end_time}</Text>
                              </View>
                              <TouchableOpacity onPress={this.clickRezervationDelete.bind(this)}>
                                <Image source={require('../img/delete.png')}
                                  style={ styles.deleteImgStyle } />
                              </TouchableOpacity>

                            </View>

                        </View>

                      </View>

                  </View>
                )}
                <CreateRezvButton onPress={this.clickRezervationCreate.bind(this)}> + </CreateRezvButton>
              </ScrollView>
            </View>
        );
    }
}

const styles = {
    txt: {
        paddingVertical:10,
        height: 40,
        fontFamily: "Cambria",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic",
        lineHeight: 13,
        letterSpacing: 0.63,
        textAlign: 'center',
        justifyContent: 'center',
        color: "#000000"
    },
    cardStyle: {
      flexDirection: 'row',
    },
    imgStyle: {
      width: width * 0.31,
      height: height * 0.12,
      borderRadius: 30,
      zIndex: 30,
      marginRight: -30,
      marginTop: 10
    },
    content: {
      width: width * 0.73,
      height: height * 0.15,
      backgroundColor: '#fff',
      borderRadius: 12,
      zIndex: -1

    },
    contentView:{
      flexDirection: 'row'
    },
    nameStyle: {
      height: 22,
      fontFamily: "Cambria",
      fontSize: 14,
      fontWeight: "bold",
      fontStyle: "italic",
      lineHeight: 13,
      letterSpacing: 0.24,
      textAlign: "center",
      color: "#f8e71c",
      marginTop: 10
    },
    dateImgStyle: {
      width: width * 0.04,
      height: height * 0.02,
      marginLeft: 20,
      marginBottom: 15,
      flexDirection: 'row'
    },
    deleteImgStyle: {
      width: 17.7,
      height: 15.7,
      marginTop: 30,
      marginLeft: 20
    },
    dateStyle: {
      height: 20,
      width: 150,
      fontFamily: "Cambria",
      fontSize: 14,
      fontWeight: "bold",
      fontStyle: "italic",
      lineHeight: 10,
      letterSpacing: 0.23,
      textAlign: "center",
      color: "#242424",
      marginLeft: 30,
      padding: 6
    }
};

const mapToStateProps = ({ pastRezervResponse }) => {
    const {
      rezervations,
    } = pastRezervResponse;

    return {
      rezervations
    };
}

export default connect(mapToStateProps, { ListRezervation, DeleteRezervation })(PastRezervation);
