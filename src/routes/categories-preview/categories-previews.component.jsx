import { useContext, } from "react";
import { CategoriesContext } from "../../components/contexts/categoriesContext";


import CategoryPreview from "../../components/category-preview/categorypreview.component";
const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((title) =>{
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
