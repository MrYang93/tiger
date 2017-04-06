function productsReducer(state = [], action) {
  switch(action.type){
    case 'PRODUCTS':
      return action.products
    default:
    return state;
  }
}

export default productsReducer;
