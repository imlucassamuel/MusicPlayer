import React, { useEffect, useState } from 'react';

import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'

import store from './store'
import Home from "./pages/Home";
import Login from "./pages/Login";

import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
    }
    
  }, []);

  return (
    <>
    <Provider store={store}>
      <GlobalStyle />
      {
        token ? (
          <Home />
        ) : (
          <Login />
        )
      }
    </Provider>
    </>
  );
}

export default App;
