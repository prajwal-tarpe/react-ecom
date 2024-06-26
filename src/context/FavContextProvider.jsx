import { useContext, useReducer } from "react"
import { FavContext } from "./FavContext"
import reducer from "../reducer/FavReducer"
import { useEffect } from "react"

const getLocalFavData = () => {
    let newCartData = localStorage.getItem("FavData");
    if(newCartData==[]) return [];
    else return JSON.parse(newCartData);
}
const intialState = {
    data: getLocalFavData()
}
export const FavContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,intialState);
    const addToFav = (singleProduct,id) => {
        console.log("From FavContext",singleProduct);
        dispatch({type:"ADD_TO_FAV",payload:{singleProduct,id}})
    }
    const removeItem = (id) => {
        console.log("Item Removed from FavContext:", id);
        dispatch({type:"REMOVE_FROM_FAV",payload:id})
    }
    useEffect(() => {
        localStorage.setItem("FavData",JSON.stringify(state.data));
    },[state.data])
    return <FavContext.Provider value={{...state,addToFav,removeItem}}>{children}</FavContext.Provider>
}
export const useFavContext = () => {
    return useContext(FavContext);
}