import "./checkout-item.styles.scss";
import {useSelector,useDispatch}from 'react-redux'
import {addItemToCart,clearItemFromCart,removeItemToCart} from '../../store/cart/cart.action'
import { selectcartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch=useDispatch();
    const cartItems=useSelector(selectcartItems)
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
    const addItemhandler = () => dispatch(addItemToCart(cartItems,cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems,cartItem));
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="photo" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemhandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>
                {" "}
                &#10060;
            </div>
        </div>
    );
};
export default CheckoutItem;
