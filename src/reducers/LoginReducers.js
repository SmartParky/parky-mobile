import { LOGIN_INPUT_CHANGE, LOGIN_USER_REQUEST } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_INPUT_CHANGE:
          return { ...state, [action.payload.props]: action.payload.value };   
        case LOGIN_USER_REQUEST:
            return { ...state }
        default:
           return state;
    }
};