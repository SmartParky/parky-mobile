import { REZERV_LIST_SUCCESS } from '../actions/types';

INITIAL_STATE = {
  rezervations: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REZERV_LIST_SUCCESS:
            return { ...state, rezervations: action.payload };
        case REZERV_LIST_SUCCESS:
            return { ...state };
        default:
            return state;

    }
};
