import {
    auth,
    signinWInWithGoogleRedirect,
    signInWithGooglePopup,
    creatUserDocumentfromauth,
} from "../../utils/firebase.utils";

import SignUpForm from "../../components/sign-up-form/signup-form.component";
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocref = await creatUserDocumentfromauth(user);
    };

    return (
        <div>
            <h1>signIn page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm/>
        </div>
    );
};
export default SignIn;
