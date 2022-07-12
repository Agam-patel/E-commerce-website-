import './product-card.syles.scss'
import Button,{Button_Type_classe} from '../button/button.component';
import {useDispatch,useSelector}from 'react-redux'
import {addItemToCart}from './../../store/cart/cart.action'
import {selectcartItems}from './../../store/cart/cart.selector'

const ProductCard=({product})=>{
    const dispatch=useDispatch();
const{name,price,imageUrl}=product;
const carttItems=useSelector(selectcartItems)
const addProductToCart=()=>dispatch(addItemToCart(carttItems,product));
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt="This is Image"/>
            <div className="footer">
                <span className="name">{name}</span>
   
                <span className="price">{price}</span>
            </div>
            <Button onClick={addProductToCart} buttontype={Button_Type_classe.inverted}>Add to card</Button>

        </div>
    )

}
export default ProductCard;