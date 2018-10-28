import { Actions } from 'react-native-router-flux';
import { LOGIN_INPUT_CHANGE, LOGIN_USER_REQUEST } from './types';
import { Alert } from 'react-native';
import {
        request,
        url,
        HTTP_201_CREATED,
        HTTP_200_OK,
        setAuthInformations,
        api_users_url
      } from './BaseActions';
const api_auth_login_url = url + '/auth/login/';

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
            "password": password,
            "email": email
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
