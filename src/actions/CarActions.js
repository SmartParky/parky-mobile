import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CAR_INPUT_CHANGE, CAR_CREATE_REQUEST, UPDATE_CAR_REQUEST } from './types'
 
import {
    request,
    api_cars_url,
    HTTP_200_OK,
    getAuthInformations 
    }from './BaseActions';
 
 export const inputChange = ({ props, value }) => {
     return(dispatch) => {      
         dispatch({
             type: CAR_INPUT_CHANGE,
             payload: { props, value }
         });
     };
 };

export const createCar = ({ plate, carColor, carType }) => {
    data = {
        plate: plate,
        color: carColor,
        type: carType
    };
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: CAR_CREATE_REQUEST })
        request
        .post(api_cars_url)
        .set("Authorization", "TOKEN " + auth_informations.auth_token)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .then((res) => console.log(res),
            Alert.alert("Araba başarıyla eklendi."),
            Actions.HomepageScrn())
        .catch((err) => console.log(err))
    }
}
export const carUpdate = ({ plate, carColor, carID }) => {
    console.log(plate);
    console.log(carColor);
    
    data = {
        plate: plate,
        color: carColor,
    }
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: UPDATE_CAR_REQUEST });
        request
            .put(api_cars_url + carID + '/')
            .set("Authorization", "TOKEN " + auth_informations.auth_token)
            .type("application/json")
            .accept("application/json")
            .send(data)
            .end((error, response) => {
                if (error || response.statusCode !== HTTP_200_OK) {
                    console.log(error);
                   
                    Alert.alert('An unexpected error has occurred and try again later.');
                } else {
                    Alert.alert('Kullanıcı başarıyla güncenlenmiştir.');
                }
            });
    }
};

export async function listCar(onComplete) {
    const auth_informations = await getAuthInformations();

    const req = request
        .get(api_cars_url)
        .set("Authorization", "token " + auth_informations.auth_token)
        .type("application/json")
        .accept("application/json");

    req.end((err, res) => {
        if (err || res.statusCode !== HTTP_200_OK) {
            console.log(err);

            Alert.alert("An unexpected error has occurred and try again later.");
        } else {
            //console.log(res.body);
            
            onComplete(res.body);
        }
    });
}