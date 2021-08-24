import { combineReducers } from "redux";
import { postReducer} from './fetch.reducer'
import {  favoriteReducer} from './favorite.reducer'


export default combineReducers({
  postReducer,
  favoriteReducer
})