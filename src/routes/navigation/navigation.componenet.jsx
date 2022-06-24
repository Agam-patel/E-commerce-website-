import { Fragment ,useContext} from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as Crownlogo} from '../../assets/crown.svg'
import { UserContext } from "../../components/contexts/user.contexts";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/contexts/cart.context";
import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles.jsx'
const Navigation = () => {
    const {currentUser}=useContext(UserContext);
    // console.log(currentUser);

    const {isCartOpen}=useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>

                <Crownlogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser?(<NavLink onClick={signOutUser} as="span">SIGN OUT</NavLink>):( <NavLink to='/auth'>SIGN IN</NavLink>)}
                   <CartIcon/>
                </NavLinks>
               {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;