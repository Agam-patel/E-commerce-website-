import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpineer
} from "./button.styles";
export const Button_Type_classe = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};
const getButton = (buttonType = Button_Type_classe.base) => {
    return {
        [Button_Type_classe.base]: BaseButton,
        [Button_Type_classe.google]: GoogleSignInButton,
        [Button_Type_classe.inverted]: InvertedButton,
    }[buttonType];
};
const Button = ({ children, buttontype,isLoading, ...otherprops }) => {
    const CustomButton = getButton(buttontype);
    return <CustomButton disabled={isLoading} {...otherprops}>{ isLoading?<ButtonSpineer/>:children}</CustomButton>;
};
export default Button;
