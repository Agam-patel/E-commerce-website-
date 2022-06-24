import './product-card.syles.scss'
import Button,{Button_Type_classe} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const ProductCard=({product})=>{
const{name,price,imageUrl}=product;
const {addItemToCart}=useContext(CartContext)
const addProductToCart=()=>addItemToCart(product);
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