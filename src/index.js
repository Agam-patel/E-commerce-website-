import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/contexts/user.contexts.jsx";
import {CategoriesProvider  } from "./components/contexts/categoriesContext";
import { CartProvider } from "./components/contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                {/* inside UserProvide every component access context  */}
                <CategoriesProvider>
                    <CartProvider>
                        <App></App>
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
