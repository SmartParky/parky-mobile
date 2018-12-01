import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import RegisterReducers from './RegisterReducers';
import RezervationReducers from './RezervationReducers';

export default combineReducers({
    loginResponse: LoginReducers,
    registerResponse: RegisterReducers,
    rezervationResponse: RezervationReducers
})
