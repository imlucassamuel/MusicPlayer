import React from 'react';

import { accesUrl } from '../../spotify';

import { LoginStyles } from './styles';

export default function Login(){

  return(
    <LoginStyles>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      
      <a href={accesUrl}>ENTRE NO SPOTIFY</a>
      
    </LoginStyles>
  );
}

