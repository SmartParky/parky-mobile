import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import RNGooglePlaces from 'react-native-google-places';

class Homepage extends Component {
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
            </View>

        );
    }
}
export default Homepage;