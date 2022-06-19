import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.componenet.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";
const Shop=()=>{
    return (
        <h1>I am the shop page</h1>
    )
}
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />}></Route>
                <Route path='shop' element={<Shop/>}/>
                <Route path='signin' element={<SignIn/>}/>
            </Route>
        </Routes>
    );
};
export default App;
