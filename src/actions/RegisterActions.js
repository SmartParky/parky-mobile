import { Actions } from 'react-native-router-flux';

import { REGISTER_INPUT_CHANGE, REGISTER_USER_REQUEST } from './types';
import {
    request,
    api_users_url } from './BaseActions';

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
        .then((res) => console.log(res),
            Actions.opening())
        .catch((err) => console.log(err))
        console.log(data)
    };    
}