import { REZRV_INPUT_CHANGE, REZRV_CREATE_REQUEST, PARK_LIST_SUCCESS, CAR_LIST_SUCCESS } from '../actions/types';

INITIAL_STATE = {
    otopark: '',
    arac: '',
    baslangicSaati: '',
    bitisSaati: '',
    parks: '',
    cars: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REZRV_INPUT_CHANGE:
            return { ...state, [action.payload.props]: action.payload.value };
        case REZRV_CREATE_REQUEST:
            return { ...state };
        case PARK_LIST_SUCCESS:
            return { ...state, parks: action.payload };
        case CAR_LIST_SUCCESS:
            return { ...state, cars: action.payload };
        default:
            return state;
    }
};