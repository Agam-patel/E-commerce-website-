import {CartDropdownContainer,EmptyMessage,CartItems}from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from 'react-router-dom'
import {useSelector}from 'react-redux'
import {selectcartItems} from '../../store/cart/cart.selector'
const CartDropdown = () => {
    const navigate=useNavigate()
    const gotocheckouthandler=()=>{
        navigate('/checkout');
    }
    const cartItems=useSelector(selectcartItems)
    return (
        <CartDropdownContainer>
            <CartItems>{cartItems.length?cartItems.map(item=><CartItem key={item.id} cartItem={item}/>):(
                <EmptyMessage>Your cart is empty.</EmptyMessage>
            )}
                {}
            </CartItems>
            <Button onClick={gotocheckouthandler} >GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};
export default CartDropdown;
