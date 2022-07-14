import { useState } from "react";
import FormInput from "../form-input/form-input.component";


import {useDispatch} from 'react-redux';
import {googleSigninStart,emailSignInStart} from '../../store/user/user.action'
import Button, { Button_Type_classe } from "../button/button.component";
const defaultformfields = {
    email: "",
    password: "",
};
const SigninForm = () => {
    const dispatch=useDispatch();
    const [formFields, setFormFields] = useState(defaultformfields);
    const { email, password } = formFields;

    // console.log(formFields);
    const resetformfields = () => {
        setFormFields(defaultformfields);
    };
    const signInWithGoogle = async () => {
        dispatch(googleSigninStart());
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           dispatch(emailSignInStart(email,password));

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
                    <Button
                        type="button"
                        buttontype={Button_Type_classe.google}
                        onClick={signInWithGoogle}
                    >
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default SigninForm;
