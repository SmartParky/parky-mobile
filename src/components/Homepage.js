import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import RNGooglePlaces from 'react-native-google-places';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import OneSignal from 'react-native-onesignal';

import { ListPark, ListRezervations } from '../actions';

const { width, height } = Dimensions.get('window');

class Homepage extends Component {
    state = {
        region: {
            latitude: 40.992799436600535,
            longitude: 39.77554941012568,
            latitudeDelta: 0.2,
            longitudeDelta:0.2,
        },
        markerPosition: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2
        },
        destination: {
            latitude:0,
            longitude:0
        },
        favoritePark: {
            name: '',
            id: ''
        }
    }
    constructor(properties) {
        super(properties);
        OneSignal.init("a9207680-164d-4d47-aa7a-b76e30d9fc4e");
    
    }

    watchID = null
    componentDidMount(){
        this.setState({ favoritePark: { name: this.props.max_park_name, id: this.props.max_park_id } })
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = parseFloat(position.coords.latitude)
            const long = parseFloat(position.coords.longitude)

            const initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
            }

            this.setState({region: initialRegion })
            this.setState({markerPosition: initialRegion})
            
        }, 
        (error) => Alert.alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}) 
        
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lat = parseFloat(position.coords.latitude)
            const long = parseFloat(position.coords.longitude)

            const lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15,
            }
            
        this.setState({region: lastRegion})
        this.setState({ markerPosition: lastRegion })
        })
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }
    componentWillMount() {
        
        this.props.ListPark();  
        this.props.ListRezervations();
        OneSignal.addEventListener('opened', this.onOpened); 
    }
    onOpened(openResult) {
           
        Actions.favoriParkScrn()
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
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
        const GOOGLE_MAPS_APIKEY = 'AIzaSyAXoWKPTU-dgr9SzSFQoH_ts6oPEqW7F2I ';
        const parks = _.map(this.props.parks, park => {
        const park_array = park.coordinate.split(',')
        return( { latitude: parseFloat(park_array[0]), longitude: parseFloat(park_array[1]), id:park.id, name:park.name })
        })
        
        //console.log(this.props.max_park_name)
        //console.log(this.props.max_park_id)
        //console.log(this.state.favoritePark);
        
        return(
            
            <View style={{flex:1}}>
                <TouchableOpacity
                    onPress={() => this.openSearchModal()}
                >
                    <View style={styles.section}>
                        <View style={{
                            flex: 1, justifyContent: 'space-between',
                            flexDirection: 'row', alignItems: 'center'
                        }}>

                            <Text style={{ flex: 9, textAlign: 'center' }}>{'seçiniz'}</Text>
                            {/*<Image source={img} />*/}

                        </View>
                    </View>
                </TouchableOpacity>
                <MapView
                    style={{
                        flex: 1}}
                    region={this.state.region}
                >
                    {_.map(parks, park =>              
                    <Marker key={park.id} 
                        coordinate={park}
                        title={park.name}
                        onPress={() => this.setState({ destination: {latitude: park.latitude, longitude:park.longitude}}) }
                        />
                                 
                    )}
                    <Marker
                    coordinate={this.state.markerPosition} >

                    <View style = {styles.radius}>
                        <View style = {styles.marker} />
                    </View>
        
                    </Marker>                                                    
                    <MapViewDirections
                        origin={this.state.region}
                        destination={this.state.destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={6}
                        strokeColor="hotpink"
                        onReady={result => {
                            console.log('Distance:' + result.distance +'km')
                            console.log('Duration:' + result.duration + 'min')
                        }}
                    />                                             
                </MapView>
                
            </View>
        );
    }
}
const styles = {
    section: {
        position: 'absolute',
        zIndex: 1,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width: width * 0.59,
        height: height * 0.05,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: "hidden",
        backgroundColor: "rgba(0, 122, 255, 0.1)",
        borderWidth: 1,
        borderColor: "rgba(0, 112, 255, 0.3)",
        alignItems: "center",
        justifyContent: "center"

    },
    marker: {
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        overflow: "hidden",
        backgroundColor: "#007AFF",
        borderWidth: 3,
        borderColor: "white",
        alignItems: "center",
        justifyContent: "center",
    }
}
const mapToStateProps = ({ rezervationResponse }) => {
    const { parks, max_park_name, max_park_id} = rezervationResponse;

    return {
        parks,
        max_park_name,
        max_park_id
    };
}
export default connect(mapToStateProps, { ListPark, ListRezervations })(Homepage);