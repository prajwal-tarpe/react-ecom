function CartReducer(state, action) {
  switch (action.type) {
      case "ADD_TO_CART":
          let { id, count, singleProduct } = action.payload;
          let existingProduct = state.cart.find(item => item.id === id);

          if (existingProduct) {
              let updatedCart = state.cart.map(item =>
                  item.id === id ? { ...item, count: item.count + 1 } : item
              );
              return { ...state, cart: updatedCart };
          } else {
              let newProduct = {
                  id: singleProduct.id,
                  title: singleProduct.title,
                  price: singleProduct.price,
                  count,
                  image: singleProduct.image,
                  max: 30
              };
              return { ...state, cart: [...state.cart, newProduct] };
          }

      case "REMOVE_ITEM":
          return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

      case "CLEAR_CART":
          return { ...state, cart: [] };

          
      case "SET_INCREMENT":
          return {
              ...state,
              cart: state.cart.map(item =>
                  item.id === action.payload ? {...item,count: item.count+1} : item
              )
          };

      case "SET_DECREMENT":
        const setCount = (cnt) => {
            return cnt>=2?cnt-1:1;
        }
          return {
              ...state,
              cart: state.cart.map(item =>
                  item.id === action.payload ? {...item, count:setCount(item.count)} : item
              )
          };
      case "TOTAL_CART_ITEM":
        let updatedItemVal = state.cart.reduce((initialVal,curElem) => {
            let {count} = curElem;
            initialVal += count;
            return initialVal;
        },0);
        return{
            ...state,
            total_count: updatedItemVal
        };
      case "TOTAL_PRICE":
        let price = state.cart.reduce((initialVal,curItem) => {
            let {price,count} = curItem;
            initialVal += (count*price);
            return initialVal;
        },0);
        return{
            ...state,
            total_price: price
        }
      

      default:
          return state;
  }
}

export default CartReducer;