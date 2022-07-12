import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.componenet.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import {  useEffect } from "react";
import {
    onAuthStatechangelisten,
    creatUserDocumentfromauth,
} from "./utils/firebase.utils.js";
import {useDispatch}from 'react-redux'
import { setCurrentUser } from "./store/user/user.action.js";
const App = () => {
    const dispatch=useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStatechangelisten((user) => {
            if (user) {
                creatUserDocumentfromauth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, [dispatch]);
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />}></Route>
                <Route path='shop/*' element={<Shop/>}/>
                <Route path='auth' element={<Authentication/>}/>
                <Route path='checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    );
};
export default App;
