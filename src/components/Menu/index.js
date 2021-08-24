import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import { useDispatch } from 'react-redux'


import logo from '../../assets/logo.png'

import { NavMenu } from './styles'
import { getMainMenu } from '../../store/Fetch/fetch.action';
import { getFavorite } from '../../store/Fetch/fetch.action';


function Menu({handleListChange}){
  const dispatch = useDispatch()
    
  function handleIndex(){
    dispatch(getMainMenu());
    handleListChange(true);
  }
  
  function handleFavorite(){
    dispatch(getFavorite());
    handleListChange(false)
  }

  return(
    <NavMenu>
      <img src={logo} alt="Logo da página" />
      <div>
        <button  
          onClick={handleIndex}>
            <HomeRoundedIcon/>
            <p>Início</p>
        </button>
        <button
          onClick={handleFavorite}
        >
            <FavoriteIcon /> 
            <p>Favoritos</p>
        </button>
      </div>
    </NavMenu>
  );
}

export default Menu;