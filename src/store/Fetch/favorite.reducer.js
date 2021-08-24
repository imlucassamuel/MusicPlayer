const INITIAL_VALUE = []

export const favoriteReducer = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case 'PUT_FAVORITE':
      return action.payload?.length > 0 ? action.payload : []
    case 'DELETE_FAVORITE':
      return action.payload?.length > 0 ? action.payload : []
    case 'GET_FAVORITE':
      return action.payload?.length > 0 ? action.payload : []
    default:
      return state
  }
}

