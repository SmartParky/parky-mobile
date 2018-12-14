import { CAR_INPUT_CHANGE, CAR_CREATE_REQUEST, UPDATE_CAR_REQUEST } from '../actions/types';

INITIAL_STATE = {
    plate: '',
    carColor: '',
    carType: '',
}

export default ( state= INITIAL_STATE, action ) => {
        switch (action.type) {
            case CAR_INPUT_CHANGE:
                return { ...state, [action.payload.props] : action.payload.value };
            case CAR_CREATE_REQUEST:
                return { ...state };
            case UPDATE_CAR_REQUEST:
            return{ ...state }       
            default:
                return state;
        }
};