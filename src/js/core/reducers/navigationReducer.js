import { CONSTANTS } from '../constants'
import { initialState } from '../initialState'

export default function navigationReducer(state = initialState.navigation, action) {
    switch (action.type) {

        /*
        case CONSTANTS.SET_FOOTER_INDEX:
            var newState = Object.assign({}, state, {
                footerIndex: action.payload
            });
            return newState;
            */

        default:
            return state;
    }
}