import {
    auth,
    signinWInWithGoogleRedirect,
    signInWithGooglePopup,
    creatUserDocumentfromauth,
} from "../../utils/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
const SignIn = () => {
    useEffect(() => {
        async function fetchdata() {
            const response = await getRedirectResult(auth);
            // console.log(response);
            if(response){
                const userdocref=await creatUserDocumentfromauth(response.user);
            }
        }
        fetchdata();
    }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocref = await creatUserDocumentfromauth(user);
    };
    // const loggoogleredirectuser=async()=>{
    //     const {user}=await signinWInWithGoogleRedirect();
    //     console.log(user);

    // }
    return (
        <div>
            <h1>signIn page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signinWInWithGoogleRedirect}>
                Sign in with Google Redurect
            </button>
        </div>
    );
};
export default SignIn;
