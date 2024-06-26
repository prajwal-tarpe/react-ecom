
function ProductReducer(state,action) {
    switch(action.type){
        case "SER_LOADING":
            return{
                ...state,
                isLoading:true
            }
        case "SET_PRODUCT_DATA":
            const featured = action.payload.filter((curElem) => {
                return curElem.rating.rate>=4.7;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProducts: featured
            }
        case "SET_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        case "SET_SINGLE_LAODING":
            return{
                ...state,
                isSingleLoading:true
            }
        case "SET_SINGLE_DATA":
            return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload
            }
        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading:false,
                isSingleError:true
            }
        case "SET_NEXT_PAGE":
            return{
                ...state,
                pages: state.pages>=50?50:state.pages+1
            }
        case "SET_PREV_PAGE":
            return{
                ...state,
                pages: state.pages<=1?1:state.pages-1
            }
        default:
            return state;
    }
}

export default ProductReducer