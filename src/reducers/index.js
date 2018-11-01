import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import RegisterReducers from './RegisterReducers';
import CarReducers from './CarReducers';

export default combineReducers({
    loginResponse: LoginReducers,
    registerResponse: RegisterReducers,
    carResponse: CarReducers
})