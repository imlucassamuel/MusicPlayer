import api from '../../services/api'

export const getMainMenu =  () => async (dispatch) => {
  
  const { data } = await api.get('/me/top/tracks');

  
  dispatch({
    type: 'FETCH_POSTS',
    payload: data.items
  })
}

export const searchItem =  (track) => async (dispatch) => {
  
  const { data } = await api.get(`/search?q=${track}&type=track%2Cartist`);


  dispatch({
    type: 'SEARCH_TRACKS',
    payload: data.tracks.items
  })
}


export const getFavorite =  () => async (dispatch) => {
  
  const { data } = await api.get(`me/tracks`);

  dispatch({
    type: 'GET_FAVORITE',
    payload: data.items.map(tracks => tracks.track)
  })
}



export const addFavorite =  (track) => async (dispatch) => {
  const {action: favoritesSongs} = track

  const { data } = await api.put(`/me/tracks?ids=${favoritesSongs}`);
 
  dispatch({
    type: 'PUT_FAVORITE',
    payload: data
  })
}



export const removeFavorite =  (track) => async (dispatch) => {
  const {action: removeTracks} = track

  const { data } = await api.delete(`/me/tracks?ids=${removeTracks}`);

  dispatch({
    type: 'DELETE_FAVORITE',
    payload:  data
  })
}
