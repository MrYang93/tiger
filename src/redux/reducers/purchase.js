function purchaseReducer(state = [], action) {
  switch(action.type){
    case 'PURCHASE':
      return action.purchase
    default:
    return state;
  }
}

export default purchaseReducer;
