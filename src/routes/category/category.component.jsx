import "./category.styles.scss";
import {  useState, useEffect,Fragment } from "react";
import ProductCard from "./../../components/product-card/products-card.component";
import {useSelector}from 'react-redux'
import { selectCategoriesMap,selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

import { useParams } from "react-router-dom";
const Category = () => {
    const { category } = useParams();
    console.log('render/re-render category component');
    const categoriesMap=useSelector(selectCategoriesMap)
const isLoading=useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log('effect fired calling setProducts')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <Fragment>
             <h2 className="category-title">{category.toUpperCase()}</h2>
             {isLoading?(<Spinner/>): <div className="category-container">
           
           {products&&products.map((product) => (
               <ProductCard key={product.id} product={product} />
           ))}
       </div>}
       
        </Fragment>
    );
};
export default Category;
