function cartReducer(state = [], action) {
  switch(action.type){
    case 'CART':
      return [
        ...state,
        action.products
      ]
    case 'BUY':
    return []
    default:
    return state;
  }
}

export default cartReducer;
