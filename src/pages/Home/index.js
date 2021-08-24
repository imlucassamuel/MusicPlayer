import React, { useState } from 'react';

import ListMusics from '../../components/List';
import Menu from '../../components/Menu'
import { Wrapper } from './styles';

function Home() {
  const [isHomeClicked, setIsHomeClicked] = useState(true);

  return (
    <Wrapper> 
      <Menu handleListChange={setIsHomeClicked}/>
      <ListMusics isClicked={isHomeClicked} />
    </Wrapper>
  );
}

export default Home;
