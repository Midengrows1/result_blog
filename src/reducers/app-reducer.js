import { ACTION_TYPE } from "../actions";

const intialAppState = {
    wasLogout: false
}

export const appReducer = (state = intialAppState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGOUT :
            return {
                ...state,
                wasLogout: !state.wasLogout
            }
        default: return state;
    }
}