function FilterReducer(state, action) {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload]
            };
        case "GET_SORT_VALUE":
            return {
                ...state,
                sortingValue: action.payload
            };
        case "SORTING_PRODUCTS":
            let newSortData = [...state.filterProducts];
            if (state.sortingValue === 'A-Z') {
                newSortData = newSortData.sort((a, b) => a.title.localeCompare(b.title));
            } else if (state.sortingValue === 'Z-A') {
                newSortData = newSortData.sort((a, b) => b.title.localeCompare(a.title));
            } else if (state.sortingValue === 'lowest') {
                newSortData = newSortData.sort((a, b) => a.price - b.price);
            } else if (state.sortingValue === 'highest') {
                newSortData = newSortData.sort((a, b) => b.price - a.price);
            }
            return {
                ...state,
                filterProducts: newSortData
            };
        case "UPDATE_FILTER_VALUE":
            const {name,value} = action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value
                }
            }
        case "FILTER_PRODUCTS":
            let {allProducts} = state;
            let tempFilterProducts = [...allProducts];
            const {text,category} = state.filters;
            if(text){
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.title.toLowerCase().includes(text);
                })
            }
            if(category=="all"){
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return category;
                })
            }
            else{
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.category===category;
                })
            }
            return{
                ...state,
                filterProducts: tempFilterProducts
            }
        default:
            return state;
    }
}

export default FilterReducer;