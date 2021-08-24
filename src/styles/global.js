import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  input,
  button{
    border: none;
  }

  a, li{ 
    text-decoration: none;
    list-style: none;
  }
`