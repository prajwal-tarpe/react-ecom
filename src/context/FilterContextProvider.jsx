import { createContext, useContext, useEffect, useReducer } from "react";
import { useProdContext } from "./ProductContextProvider";
import reducer from "../reducer/FilterReducer";

const initialState = {
    filterProducts: [],
    allProducts: [],
    sortingValue: "lowest",
    filters:{
        text:"",
        category:"all"
    }
};

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    const { products } = useProdContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const sortData = (event) => {
        const sortValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
        dispatch({ type: "SORTING_PRODUCTS" });
    };
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}});
    }

    useEffect(() => {
        dispatch({ type: "LOAD_PRODUCTS", payload: products });
    }, [products]);

    useEffect(() => {
        dispatch({type:"FILTER_PRODUCTS"});
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [state.sortingValue, products,state.filters]);

    return (
        <FilterContext.Provider value={{ ...state, sortData,updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
