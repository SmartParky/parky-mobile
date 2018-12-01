import { REGISTER_INPUT_CHANGE, REGISTER_USER_REQUEST, CITY_LIST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    city: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    cities: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_INPUT_CHANGE:
            return { ...state, [action.payload.props]: action.payload.value };
        case REGISTER_USER_REQUEST:
            return { ...state }
        case CITY_LIST_SUCCESS:
            return { ...state, cities: action.payload};
        default:
            return state;
    }
};
