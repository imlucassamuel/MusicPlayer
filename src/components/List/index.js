import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { addFavorite, getFavorite, getMainMenu, removeFavorite, searchItem } from "../../store/Fetch/fetch.action";

import { IndexItens, Search } from "./styles";

function ListMusics({isClicked}) {
  const trendings = useSelector((state) => state.postReducer);
  const listFavorites = useSelector((state) => state.favoriteReducer);
 
  const [searchList, setSearchList] = useState();

  const dispatch = useDispatch();

  function handleOnClickFavorite(itemId){
    if(listFavorites && listFavorites.length > 0 && listFavorites.find((favoriteSong) => favoriteSong.id === itemId)){
      dispatch(removeFavorite({type: 'DELETE_FAVORITE', action: itemId}))
    }else{ 
      dispatch(addFavorite({type: 'PUT_FAVORITE', action: itemId}))
    }

    dispatch(getFavorite());
  }

  useEffect(() => {
    dispatch(getMainMenu());
    dispatch(getFavorite());

  }, [dispatch]);


  function handleSearch() {
    dispatch(searchItem(searchList));
  }



  const listItems = isClicked ? trendings : listFavorites;
  
  return (
    <IndexItens>
      <Search>
        <button type="button" onClick={handleSearch}>
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearchList(e.target.value)}
        ></input>
      </Search>
      <h1>Em alta</h1>

      <div className="indexWrapper">
        
        { listFavorites && listItems && listItems.length > 0 && listItems.map((item) => (
            <div className="list" key={item.id}>
              <img
                src={item.album.images[1].url}
                alt="Logo"
              />

              <div className="buttonsStyle">
                <a
                  href={item.external_urls.spotify}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ouça completa
                </a>
                {listFavorites && listFavorites.length > 0 && listFavorites.find((favoriteSong) => favoriteSong.id === item.id) ? (
                  <button
                    type="button"
                    className='favorite'
                    onClick={() => handleOnClickFavorite(item.id)}
                  >
                    <DeleteIcon />
                  </button>

                ) : (
                  <button
                  type="button"
                  onClick={() => handleOnClickFavorite(item.id)}
                >
                  <FavoriteIcon />
                </button>
                )}

              </div>
              <audio src={item.preview_url} controls></audio>
              <ul>
                <li >{item.name}</li>
              </ul>
              <ul>
                {item.artists && item.artists.length > 0 && item.artists.map((artist) => (
                  <li key={artist.name}>{artist.name}</li>
                ))}
              </ul>
            </div>
          ))
        }
        
      </div>
    </IndexItens>
  );
}

export default ListMusics;
