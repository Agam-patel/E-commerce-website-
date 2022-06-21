import { useContext } from "react";
import { ProductsContext } from "../../components/contexts/products.context";
import ProductCard from "../../components/product-card/products-card.component";
import './shop.style.scss'

const Shop=()=>{
    const {products}=useContext(ProductsContext)
    return(
        <div className="products-container">
            {products.map((product)=>{
                return(
                    <ProductCard key={product.id} product={product}/>
            
                )
            })
            
            

            }
        </div>
    )

}
export default Shop;