import { UPDATE_USER_REQUEST } from '../actions/types';

INITIAL_STATE = {
    email: '',
    isim: '',
    soyisim: '',
    telefon: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return { ...state };
        default:
            return state;
    }
};