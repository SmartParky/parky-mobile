import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

import { LOGIN_INPUT_CHANGE, LOGIN_USER_REQUEST, SAVE_USER_INFORMATION } from './types';
import { request, api_auth_login_url } from './BaseActions';

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
        .then((res) => setAuthInformations( dispatch, res.body.auth_token, res.body.user_id),
            Actions.HomepageScrn())
        .catch((err) => console.log(err))           
    };  
};

export const setAuthInformations = (dispatch, auth_token, user_id ) => {
        dispatch({
            type: SAVE_USER_INFORMATION,
            payload: { auth_token, user_id }
        });
};
