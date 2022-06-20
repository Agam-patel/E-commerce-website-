import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
    signInWithGooglePopup,
    creatUserDocumentfromauth,
    Signinauthuseremailandpassword,
} from "../../utils/firebase.utils";

import "./signinform.scss";
import Button from "../button/button.component";
const defaultformfields = {
    email: "",
    password: "",
};
const SigninForm = () => {
    const [formFields, setFormFields] = useState(defaultformfields);
    const { email, password } = formFields;
    console.log(formFields);
    const resetformfields = () => {
        setFormFields(defaultformfields);
    };
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await creatUserDocumentfromauth(user);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Signinauthuseremailandpassword(
                email,
                password
            );
            console.log(response);
            resetformfields();
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Incorrect password");
            } else if (error.code === "auth/user-not-found") {
                alert("NO user associate with this email address");
            }
        }
    };
    const hadlechange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    onChange={hadlechange}
                    name="email"
                    value={email}
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    onChange={hadlechange}
                    name="password"
                    value={password}
                    required
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button'buttontype="google" onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default SigninForm;
