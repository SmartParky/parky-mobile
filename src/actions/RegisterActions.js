import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { REGISTER_INPUT_CHANGE, REGISTER_USER_REQUEST, CITY_LIST_SUCCESS } from './types';
import {
    request,
    api_users_url,
    api_cities_url,
    HTTP_200_OK,
    HTTP_201_CREATED } from './BaseActions';

export const registerInputChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: REGISTER_INPUT_CHANGE,
            payload: { props, value }
        });
    };
};

export const createUser = ({ sehir, email, isim, soyisim, telNo, parola, parolatkr }) => {   
      data = {
          city: sehir,
          email: email,
          first_name: isim,
          last_name: soyisim,
          phone_number: telNo,
          password: parola,
          confirm_password: parolatkr
    }
    return (dispatch) => {
        dispatch({ type: REGISTER_USER_REQUEST });  
        request
        .post(api_users_url)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .end((error, response) => {
            if (error || response.statusCode !== HTTP_201_CREATED) {
                Alert.alert('Lütfen bilgilerinizi doğru girip tekrar deneyiniz.');
            } else {
                Alert.alert('Kaydınız başarıyla alınmıştır');
                Actions.openingScreen() 
            }
        })
    };    
}

export const ListCity = () => {
    return (dispatch) => {
    request
        .get(api_cities_url)
        .type("application/json")
        .accept("application/json")
        .end((error, response) => {
            if (error || response.statusCode !== HTTP_200_OK) {
                Alert.alert('An unexpected error has occurred and try again later.');
            } else { 
                dispatch({ type: CITY_LIST_SUCCESS, payload: response.body })              
            }           
        });  
    }  
}