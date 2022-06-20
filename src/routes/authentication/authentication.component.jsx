
import SignUpForm from "../../components/sign-up-form/signup-form.component";
import SigninForm from "../../components/sign-inform/signinform";
import './authentication.styles.scss'
const Authentication = () => {
 

    return (
        <div className="authentication-container">
            <SigninForm/>
            <SignUpForm/>
        </div>
    );
};
export default Authentication;
