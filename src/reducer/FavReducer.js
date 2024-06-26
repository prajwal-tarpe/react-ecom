function FavReducer(state,action) {
    switch(action.type){
        case "ADD_TO_FAV":
            let{id,singleProduct} = action.payload;
            let existingProduct = state.data.find(item => item.id===id);
            if(!existingProduct){
            let newProduct = {
                id:id,
                title: singleProduct.title,
                image: singleProduct.image,
                price: singleProduct.price
            }
            return {...state,data:[...state.data,newProduct]};
        }
        case "REMOVE_FROM_FAV":
            return {...state,data: state.data.filter(item => item.id!==action.payload)};
        default: 
            return state;
    }
}
export default FavReducer;