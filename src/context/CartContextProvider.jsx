import React, { useContext,useEffect,useReducer } from "react";
import { CartContext } from "./CartContext";
import reducer from "../reducer/CartReducer";

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("Prajwal");
    if(newCartData == []){
        return [];
    }else{
        return JSON.parse(newCartData);
    }
}

const initialState = {
    
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_count: "",
    total_price: "",
    shipping_fee: 5000
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id,count, singleProduct) => {
        console.log("From CartContext: ",singleProduct);
        dispatch({ type: "ADD_TO_CART", payload: { id,count, singleProduct } });
    };
    const removeItem = (id) => {
        console.log("Removing item with id:",id);
        dispatch({type:"REMOVE_ITEM", payload:id});
    }

    const setIncrease = (id) => {
        dispatch({type:"SET_INCREMENT",payload:id});
    }
    const setDecrease = (id) => {
        dispatch({type:"SET_DECREMENT",payload:id});
    }
    const clearCart = () => {
        dispatch({type:"CLEAR_CART"})
    }

    // To add data in localStorage.
    useEffect(() => {
        dispatch({type:"TOTAL_CART_ITEM"});
        dispatch({type: "TOTAL_PRICE"});
        localStorage.setItem("Prajwal",JSON.stringify(state.cart));
    },[state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart,removeItem,clearCart,setIncrease,setDecrease}}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
    return useContext(CartContext);
};
