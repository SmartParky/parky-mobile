import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import RNGooglePlaces from 'react-native-google-places';
import MapView from 'react-native-maps';

class Homepage extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
    }
  /*  componentWillMount() {
        console.log(this.props.data);
        const { yourLangLat } = this.props.data;

        this.setState({
            region: {
                latitude: yourLangLat[0],
                longitude: yourLangLat[1],
                latitudeDelta: 7,
                longitudeDelta: 7,
            },
        })
    }*/
    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }
    render() {
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
                </MapView>
            </View>

        );
    }
}
export default Homepage;