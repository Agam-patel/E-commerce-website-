import { createContext, useEffect, useReducer } from "react";
import {
    onAuthStatechangelisten,
    creatUserDocumentfromauth,
} from "../../utils/firebase.utils.js";
//as the actual value you want to access.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//here we store the object
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};
const userReducer = (state, action) => {
    console.log('dispatch')
    console.log(action)
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
      
        default:
            throw new Error("unhandled type with user reducer");
    }
};
const INTIAL_STATE = {
    currentUser: null,
};
export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INTIAL_STATE);
    console.log(currentUser)
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    };
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStatechangelisten((user) => {
            if (user) {
                creatUserDocumentfromauth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
