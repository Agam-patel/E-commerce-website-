import { USER_ACTION_TYPES } from "./user.type";
const INTIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};
export const userReducer = (state = INTIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
            };
        case USER_ACTION_TYPES.SIGN_OUT_success:
            return {...state,currentUser:null}
        case USER_ACTION_TYPES.SIGN_OUT_failed:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};
