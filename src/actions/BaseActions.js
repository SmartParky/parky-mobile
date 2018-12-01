import { AsyncStorage } from 'react-native';
const request = require("superagent");
// Api
const url = "http://10.0.3.2:8000";
const api_url = url + "/v1";
const api_auth_login_url = url + "/auth/login/";
const api_users_url = api_url + "/users/";
const api_cars_url = api_url + "/cars/";
const api_cities_url = api_url + "/cities/";
const api_parks_url = api_url + "/parks/";
const api_rezervations_url = api_url + "/rezervations/";
const api_workinghours_url = api_url + "/workinghours/";

// Status Codes
const HTTP_200_OK = 200;
const HTTP_201_CREATED = 201;
const HTTP_204_NO_CONTENT = 204;
const HTTP_400_BAD_REQUEST = 400;


async function getAuthInformations  () {
    const auth_informations = {
        "auth_token": await AsyncStorage.getItem("auth_token"),
        "user_id": await AsyncStorage.getItem("user_id")
    }   
    return auth_informations
};

async function retrieveUser(onComplete) {
    const auth_informations = await getAuthInformations();

    const req = request
        .get(api_users_url + auth_informations.user_id + '/')
        .set("Authorization", "token " + auth_informations.auth_token)
        .type("application/json")
        .accept("application/json");

    req.end((err, res) => {
        if (err || res.statusCode !== HTTP_200_OK) {
            Alert.alert("An unexpected error has occurred and try again later.");
        } else {
            onComplete(res.body);
        }
    });
}

module.exports = {
    request,
    url,
    api_url,
    api_auth_login_url,
    api_users_url,
    api_cars_url,
    api_cities_url,
    api_parks_url,
    api_rezervations_url,
    api_workinghours_url,
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    getAuthInformations,
    retrieveUser
}