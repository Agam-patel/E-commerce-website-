import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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
    if (existingCartItem.quantity === 1) {
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

export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItme(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const removeItemToCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const clearItemFromCart = (cartItems,cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const setIsCartOpen = (bool) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};
