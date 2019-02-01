import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { REZRV_INPUT_CHANGE, REZRV_CREATE_REQUEST, PARK_LIST_SUCCESS, CAR_LIST_SUCCESS, REZERV_LIST_SUCCESS_NOTFY} from './types'
import {
    request,
    api_parks_url,
    api_cars_url,
    api_rezervations_url,
    HTTP_201_Created,
    HTTP_200_OK,
    getAuthInformations,
} from './BaseActions';

export const rezInputChange = ({ props, value }) => {
    return (dispatch) => {   
        dispatch({         
            type: REZRV_INPUT_CHANGE,
            payload: { props, value }
        });
    };
};

export const createRezervation = ({ otopark, arac, baslangicSaati, bitisSaati }) => {
    data = {
        park: otopark,
        car: arac,
        start_time: baslangicSaati,
        end_time: bitisSaati
    };

    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: REZRV_CREATE_REQUEST })
         const req =request
            .post(api_rezervations_url)
            .set("Authorization", "TOKEN " + auth_informations.auth_token)
        for (var field in data) {
            req.field(field, data[field])
        }
            req.end((error, response) => {
                if (error || response.statusCode !== HTTP_201_Created) {
                } else {  
                    Alert.alert("Rezervasyonunuz başarıyla oluşturuldu.");              
                    Actions.HomepageScrn();                  
                }
            });  
    }
} 
export const createRezervationFav = ({ max_park_id, arac, baslangicSaati, bitisSaati }) => {
    data = {
        park: max_park_id,
        car: arac,
        start_time: baslangicSaati,
        end_time: bitisSaati
    };

    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: REZRV_CREATE_REQUEST })
        const req = request
            .post(api_rezervations_url)
            .set("Authorization", "TOKEN " + auth_informations.auth_token)
        for (var field in data) {
            req.field(field, data[field])
        }
        req.end((error, response) => {
            if (error || response.statusCode !== HTTP_201_Created) {
            } else {
                Alert.alert("Rezervasyonunuz başarıyla oluşturuldu.");                
                Actions.HomepageScrn();
            }
        });
    }
}   

export const ListPark = () => {
    return (dispatch) => {
        request
            .get(api_parks_url)
            .type("application/json")
            .accept("application/json")
            .end((error, response) => {
                if (error || response.statusCode !== HTTP_200_OK) {
                    Alert.alert('An unexpected error has occurred and try again later.');
                } else {                
                    dispatch({ type: PARK_LIST_SUCCESS, payload: response.body })
                }
            });
    }
}

export const ListCar = () => {
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        request
            .get(api_cars_url)
            .set("Authorization", "TOKEN " + auth_informations.auth_token)
            .type("application/json")
            .accept("application/json")
            .end((error, response) => {
                if (error || response.statusCode !== HTTP_200_OK) {
                    Alert.alert('An unexpected error has occurred and try again later.');
                } else {
                    dispatch({ type: CAR_LIST_SUCCESS, payload: response.body })
                }
            });
    }
}
export const ListRezervations = () => {
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
                    //console.log(response.body);
                    dispatch({ type: REZERV_LIST_SUCCESS_NOTFY, payload: response.body })
                }
            });
    }
}