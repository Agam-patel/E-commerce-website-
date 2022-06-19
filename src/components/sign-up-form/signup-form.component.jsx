import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
    createuserwithemai,
    creatUserDocumentfromauth,
} from "../../utils/firebase.utils";
import './sign-upform.styles.scss'
import Button from "../button/button.component";
const defaultformfields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultformfields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);
    const resetformfields = () => {
        setFormFields(defaultformfields);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password not match");
            return;
        }
        try {
            const { user } = await createuserwithemai(email, password);
            console.log(user);
            await creatUserDocumentfromauth(user, { displayName });
            resetformfields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("cannot create user email already in use");
            }
            console.log("email password ", error);
        }
    };
    const hadlechange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label></label>
                <FormInput
                    label="Display Name"
                    type="text"
                    onChange={hadlechange}
                    name="displayName"
                    value={displayName}
                    required
                />
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    onChange={hadlechange}
                    value={confirmPassword}
                    name="confirmPassword"
                    required
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};
export default SignUpForm;
