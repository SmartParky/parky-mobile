//import React from 'react';
import { Actions } from 'react-native-router-flux';

import { LOGIN_INPUT_CHANGE, LOGIN_USER_REQUEST } from './types';
import { request,
        api_auth_login_url } from './BaseActions';

export const loginInputChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_INPUT_CHANGE,
            payload: { props, value }
        });
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_REQUEST });
        data = {
            password: password,
            email: email
        }; 
       request
        .post(api_auth_login_url)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .then((res) => console.log(res),
         Actions.opening())
            .catch((err) => console.log(err))
             console.log(data)
    };  
};
