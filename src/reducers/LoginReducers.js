import { AsyncStorage } from 'react-native';
import { LOGIN_INPUT_CHANGE, LOGIN_USER_REQUEST, SAVE_USER_INFORMATION } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    auth_token: '',
    user_id: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_INPUT_CHANGE:
          return { ...state, [action.payload.props]: action.payload.value };   
        case LOGIN_USER_REQUEST:
            return { ...state };
        case SAVE_USER_INFORMATION:
            if (action.payload.auth_token && action.payload.user_id) {
                AsyncStorage.setItem('auth_token', action.payload.auth_token);
                AsyncStorage.setItem('user_id', JSON.stringify(action.payload.user_id));
            }
            return {
                ...state,
                auth_token: action.payload.auth_token || state.auth_token,
                user_id: action.payload.user_id || state.user
            }
        default:
           return state;
    }
};