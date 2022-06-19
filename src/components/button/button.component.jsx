import './button.styles.scss'
const Button_Type_classe={
    google:'google-sign-in',
    inverted:'inverted'
}
const Button=({children,buttontype,...otherprops})=>{
    return(
        <button className={`button-container ${ Button_Type_classe[buttontype]} ${otherprops}`}>
{children}
        </button>
    )
}
export default Button;