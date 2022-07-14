import { takeLatest, all, call, put, take } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.type";
import { signInSuccess, signInFailure, signupsuccess, signupfailed, signoutsuccess,signoutfailed } from "./user.action";
import {
    getCurrentUser,
    creatUserDocumentfromauth,
    signInWithGooglePopup,
    Signinauthuseremailandpassword,
    createuserwithemai,
    signOutUser
} from "../../utils/firebase.utils";

export function* getSnapshotfromuserauth(userauth, additionaldetails) {
    try {
        const userSnapshot = yield call(
            creatUserDocumentfromauth,
            userauth,
            additionaldetails
        );
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotfromuserauth, userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* signinwithemail({ payload: { email, password } }) {
    try {
        const { user } = yield call(
            Signinauthuseremailandpassword,
            email,
            password
        );
        yield call(getSnapshotfromuserauth, user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* signinwithgoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotfromuserauth, user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* signup({ payload: { email, password, displayName } }) {
    try {
        const {user}=yield call(createuserwithemai, email, password);
        yield put(signupsuccess(user,{displayName}))
    } catch (error) {
        yield put(signupfailed(error));
    }
}

export function*signinaftersignup({payload:{user,additionaldetails}}){
    yield call(getSnapshotfromuserauth,user,additionaldetails);

}
export function* signout(){
    try{
        yield call(signOutUser);
        yield put(signoutsuccess());
    }catch(error){
        yield put(signoutfailed(error))
    }
}
export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signinwithemail);
}
export function* onGoogleSignInstart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signinwithgoogle);
}
export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signup);
}
export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signinaftersignup)
}

export function* onsignoutstart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signout)
}
export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInstart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onsignoutstart)
    ]);
}
