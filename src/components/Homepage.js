import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import RNGooglePlaces from 'react-native-google-places';
import MapView, { Marker } from 'react-native-maps';

import { ListPark } from '../actions';

class Homepage extends Component {
    state = {
        region: {
            latitude: 36.48682975919446,
            longitude: 36.031581656249955,
            latitudeDelta: 10,
            longitudeDelta:10,
        },
    }
    componentWillMount() {
        this.props.ListPark();        
    }
    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                //console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }
    
    render() {
        const parks = _.map(this.props.parks, park => {
        const park_array = park.coordinate.split(',')
        return( { latitude: parseFloat(park_array[0]), longitude: parseFloat(park_array[1]), id:park.id, name:park.name })
        })
        return(
            <View style={{flex:1}}>
                <TouchableOpacity
                    onPress={() => this.openSearchModal()}
                >
                    <Text>Pick a Place</Text>
                </TouchableOpacity>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                >    
                {console.log(parks)}
                {_.map(parks, park =>              
                   <Marker key={park.id} 
                    coordinate={park}
                    title={park.name}
                    />               
                )}                  
                </MapView>
            </View>
        );
    }
}

const mapToStateProps = ({ rezervationResponse }) => {
    const  {parks} = rezervationResponse;

    return {
        parks,
    };
}
export default connect(mapToStateProps, { ListPark })(Homepage);