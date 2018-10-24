import { Actions } from 'react-native-router-flux';
import { LOGIN_INPUT_CHANGE, LOGIN_USER_REQUEST } from './types';

import { request,
        api_auth_login_url,
        HTTP_201_CREATED,
        HTTP_200_OK,
        setAuthInformations,
    api_users_url } from './BaseActions';
import axios from 'axios';

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
            email: "beyzaaksoy@gmail.com",
            password: "123456c"
        };
        request
        .post(api_auth_login_url)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .end(function (error, response) {
            console.log(error);
            
        });
        console.log(email);
        console.log(password);
    };  
};
