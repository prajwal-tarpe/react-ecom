import { useContext, useEffect, useReducer } from "react";
import ProdContext from "./ProductContext";
import axios from "axios";
import reducer from "../reducer/ProductReducer"

const initialState = {
    isLoading:false,
    products:[],
    featuredProducts:[],
    isError:false,
    isSingleLoading:false,
    singleProduct:{},
    isSingleError:false,
    pages:1
}

const API = "https://fakestoreapi.com/products"

const ProdContextProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState);

    // For Products data.
    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(res);
            console.log(products);
            dispatch({type:"SET_PRODUCT_DATA",payload:products});
        } catch (error) {
            dispatch({type:"SET_ERROR"});            
        }
    }

    // For SingleProduct data.
    const getSingleProduct =async (url,id) => {
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const res = await axios.get(url);
            const products = await res.data;
            const singleProduct = products[id];
            // console.log(singleProduct);
            dispatch({type:"SET_SINGLE_DATA",payload:singleProduct});
        }
        catch(error){
            dispatch({type:"SET_SINGLE_ERROR"});
        }
    }
    const nextPage = () => {
        dispatch({type:"SET_NEXT_PAGE"});
    }
    const prevPage = () => {
        dispatch({type:"SET_PREV_PAGE"});
    }

    useEffect(
        ()=> {
            getProducts(API);
        },[state.pages]
    );

    return <ProdContext.Provider value={{...state,getSingleProduct,nextPage,prevPage}}>{children}</ProdContext.Provider>
}
const useProdContext = () => {
    return useContext(ProdContext);
}
export {ProdContextProvider,useProdContext};