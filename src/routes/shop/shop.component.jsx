import { Routes, Route } from "react-router-dom";
import "./shop.style.scss";
import CategoriesPreview from "../categories-preview/categories-previews.component";
import Category from "../category/category.component";
import { useEffect } from "react";

import { fetchCategoriesAsync,fetchCategoriesSuccess } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
import {getCategoriesAndDocuments} from '../../utils/firebase.utils'
const Shop = () => {
    const dispatch=useDispatch();
    useEffect(() => {
        console.log('render');
        // const getCategoriesMap = async () => {
        //     const categoriesArray = await getCategoriesAndDocuments();
        //     // console.log(categoryMap);
        //     dispatch(fetchCategoriesSuccess(categoriesArray))
        // };
        // getCategoriesMap();
  
       dispatch(fetchCategoriesAsync());
    },[]);
    return (
           <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
       
    );
};
export default Shop;
