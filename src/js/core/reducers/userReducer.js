import { CONSTANTS } from '../constants'
import { initialState } from '../initialState'

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {

        /*
        case CONSTANTS.SELECT_LANGUAGE:
            var newState = Object.assign({}, state, {
                language: action.payload
            });

            return newState;
        */
        
        default:
            return state;
    }
}