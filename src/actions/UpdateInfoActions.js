import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UPDATE_USER_REQUEST} from './types'

import {
    request,
    api_users_url,
    HTTP_200_OK,
    getAuthInformations
} from './BaseActions';

export const userUpdate = ({ email, isim, soyisim, telno }) => {
    data = {
        email: email,
        first_name: isim,
        last_name: soyisim,
        phone_number: telno
    }
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: UPDATE_USER_REQUEST });
        request
        .put(api_users_url + auth_informations.user_id + '/')
        .set("Authorization", "TOKEN " + auth_informations.auth_token)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .end((error, response) => {
            if (error || response.statusCode !== HTTP_200_OK) {
                Alert.alert('An unexpected error has occurred and try again later.');
            } else {
                Alert.alert('Kullanıcı başarıyla güncenlenmiştir.');
            }
        });
    }
};