import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { REZERV_LIST_SUCCESS, REZERV_DELETE_SUCCESS } from './types'
import {
    request,
    api_parks_url,
    api_rezervations_url,
    HTTP_200_OK,
    HTTP_204_NO_CONTENT,
    getAuthInformations
} from './BaseActions';
export const ListRezervation = () => {
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        request
            .get(api_rezervations_url)
            .set("Authorization", "TOKEN " + auth_informations.auth_token)
            .type("application/json")
            .accept("application/json")
            .end((error, response) => {
                if (error || response.statusCode !== HTTP_200_OK) {
                    Alert.alert('An unexpected error has occurred and try again later.');
                } else {
                    //console.log(response);
                    dispatch({ type: REZERV_LIST_SUCCESS, payload: response.body })
                }
            });
    }
}
export const DeleteRezervation = (rezervation_id) => {
    //console.log(rezervation_id);
    
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: REZERV_DELETE_SUCCESS });
        request
            .del(api_rezervations_url + rezervation_id + '/')
            .set("Authorization", "TOKEN " + auth_informations.auth_token)
            .type("application/json")
            .accept("application/json")
            .end((error, response) => {
                if (response) {
                    if (response.statusCode === HTTP_204_NO_CONTENT) {
                        Alert.alert("Task deleted.");
                        //window.location.reload()
                    } else {
                        Alert.alert("An unexpected error has occurred and try again later.");
                    }
                } else {
                    Alert.alert("An unexpected error has occurred and try again later.");
                }
            });
    }
}