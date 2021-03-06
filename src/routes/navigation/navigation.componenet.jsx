import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as Crownlogo} from '../../assets/crown.svg'
import {selectIsCartOpen}from './../../store/cart/cart.selector'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavigationContainer,NavLinks,NavLink,LogoContainer} from './navigation.styles.jsx'
import {useSelector,useDispatch} from 'react-redux'
import {selectCurrentUser} from './../../store/user/user.selector.js'
import { signoutstart } from "../../store/user/user.action";

const Navigation = () => {
const dispatch=useDispatch();
   const currentUser= useSelector(selectCurrentUser)


  const isCartOpen=useSelector(selectIsCartOpen)
  const signOutUser=()=>dispatch(signoutstart());
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