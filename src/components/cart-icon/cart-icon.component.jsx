import {ShoppingIcon,CartIconContainer,ItemCount}from'./cart-icon.styles'

import { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'
const CartIcon=()=>{
    const{isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    const toggleIscartoope=()=>{setIsCartOpen(!isCartOpen)}
return (
    <CartIconContainer onClick={toggleIscartoope}>
        <ShoppingIcon/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
)

}
export default CartIcon;