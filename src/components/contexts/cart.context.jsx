
import {  createContext, useReducer } from "react";
import {createAction} from './../../utils/reducer/reducer.utils.js'

const addCartItme = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItems) => cartItems.id === productToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
    //fidn the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItems) => cartItems.id === cartItemToRemove.id
    );
    //check if quantity is 1
    if (existingCartItem.quantity == 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );

    //return bakc car
};
const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    removeItemToCart: () => {},
    addItemToCart: () => {},
    cartCount: 0,
    clearItemFromCart: () => {},
    cartTotal: 0,
});
const CART_ACTION_TYPES={
    SET_CART_ITEMS:"SET_CART_ITEMS",
    SET_IS_CART_OPEN:"SET_IS_CART_OPEN"

}
const INTIAL_STATE = {
    cartTotal: 0,
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
};
const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen:payload
            }
        default:
            throw new Error(`unHanderldtype of ${type} in cartReducer`);
    }
};

const AddTOCartAction = () => {};
export const CartProvider = ({ children }) => {
    const [{ cartTotal, isCartOpen, cartItems, cartCount }, dispatch] =
        useReducer(cartReducer, INTIAL_STATE);
    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
            cartTotal: newCartTotal,
            cartCount: newCartCount,
        }));
    };
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItme(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    };
    const setIsCartOpen=(bool)=>{
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool))
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemToCart,
        clearItemFromCart,
        cartTotal,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
