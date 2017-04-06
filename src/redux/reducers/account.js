function accountReducer(state = {}, action) {
  switch(action.type){
    case 'SIGNIN':
      return {
        ...state,
        userName: action.userName,
        out: '注销',
        userId: action.userId
      }
    case 'OUT':
      return {
        ...state,
        userName: '请登录',
        out: ''
      }
    case 'REFREFSH':
      return {
        ...state,
        userName: action.userName,
        out: '注销'
      }
    default:
    return state;
  }
}

export default accountReducer;
