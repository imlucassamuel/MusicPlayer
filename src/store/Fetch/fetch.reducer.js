const INITIAL_VALUE = []

export const postReducer = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case 'FETCH_POSTS':
      return action.payload?.length > 0 ? action.payload : []
    case 'SEARCH_TRACKS':
      return action.payload
    default:
      return state
  }
}

