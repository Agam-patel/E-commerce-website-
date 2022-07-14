import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles'

import {useDispatch,useSelector}from 'react-redux'
import {selectCartCount,selectIsCartOpen} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'
const CartIcon=()=>{
  
    const dispatch=useDispatch();
    const cartCount=useSelector(selectCartCount)
    const isCartOpen=useSelector(selectIsCartOpen)


    const toggleIscartoope=()=> dispatch(setIsCartOpen(!isCartOpen))
return (
    <CartIconContainer onClick={toggleIscartoope}>
        <ShoppingIcon className='shoppin-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
)

}
export default CartIcon;