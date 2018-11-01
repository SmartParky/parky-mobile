import { Actions } from 'react-native-router-flux';
import { CAR_INPUT_CHANGE, CAR_CREATE_REQUEST } from './types'
 
import {
    request,
    api_cars_url,
    HTTP_200_OK,
    getAuthInformations 
    }from './BaseActions';
 
 export const inputChange = ({ props, value }) => {
     return(dispatch) => {      
         dispatch({
             type: CAR_INPUT_CHANGE,
             payload: { props, value }
         });
     };
 };

export const createCar = ({ plate, carColor, carType }) => {
    data = {
        plate: plate,
        color: carColor,
        type: carType
    };
    return async (dispatch) => {
        const auth_informations = await getAuthInformations()
        dispatch({ type: CAR_CREATE_REQUEST })
        request
        .post(api_cars_url)
        .set("Authorization", "TOKEN " + auth_informations.auth_token)
        .type("application/json")
        .accept("application/json")
        .send(data)
        .then((res) => console.log(res),
            Actions.opening())
        .catch((err) => console.log(err))
    }
}