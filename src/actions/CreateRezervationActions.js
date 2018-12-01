import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { REZRV_INPUT_CHANGE, REZRV_CREATE_REQUEST, PARK_LIST_SUCCESS, CAR_LIST_SUCCESS} from './types'

import {
    request,
    api_parks_url,
    api_cars_url,
    api_rezervations_url,
    HTTP_200_OK,
    getAuthInformations,
    } from './BaseActions';
  import { setAuthInformations } from './LoginActions';

 export const inputChange = ({ props, value }) => {
     return(dispatch) => {
         dispatch({
             type: REZRV_INPUT_CHANGE,
             payload: { props, value }
         });
     };
 };

export const createRezervation = ({ otopark, arac, baslangicSaati, bitisSaati }) => {
    data = {
        name: otopark,
        plate: arac,
        start_time: baslangicSaati,
        end_time: bitisSaati
    };
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: REZRV_CREATE_REQUEST })
        request
        .post(api_rezervations_url)
        .set("Authorization", "TOKEN " + auth_informations.auth_token)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .then((res) => console.log(res),
            Actions.opening())
        .catch((err) => console.log(err))
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
