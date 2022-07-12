import Spinner from '../../components/spinner/spinner.component';
import {useSelector}from 'react-redux'
import {selectCategoriesMap,selectCategoriesIsLoading}from './../../store/categories/category.selector'
import CategoryPreview from "../../components/category-preview/categorypreview.component";
const CategoriesPreview = () => {
    const isLoading=useSelector(selectCategoriesIsLoading)
    const categoriesMap=useSelector(selectCategoriesMap) 
    return (
        <>
            {
                isLoading?(<Spinner/>):Object.keys(categoriesMap).map((title) =>{
                const products=categoriesMap[title];
                return(
                    <CategoryPreview key={title} title={title} products={products}/>
                )
            }                                
                     
            )}
        </>
    );

};
export default CategoriesPreview;
