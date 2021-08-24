import styled from "styled-components";

export const Search = styled.header`
  padding: 0.5rem 1rem 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #212121;

  button{
    background-color: #212121;
    color: #ffffff;
    cursor: pointer;
  }

  input{
    background-color: #212121;
    font-size: 1.2rem;
    color: #ffffff;
    text-align: start;
    padding: 0.5rem 20rem 0.5rem 0.5rem;
    margin-left: 1rem;
    
  }
` 

export const IndexItens = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #ffffff;
  background: linear-gradient(to bottom left, #212121, #121212);

  h1 {
    margin: 2rem 0 2rem 2rem;
    
  }

  .indexWrapper {
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100vh;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #626262;
      width: 10px;
    }
  }

  .list {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 4rem 2rem;
    
    img{
      width: 300px;
      height: 300px;
      border-radius: 2rem 2rem 0 0;
    }

    .buttonsStyle{
      display: flex;
      flex-direction: column;
      justify-content: end;

      a{
        width: 300px;
        text-align: center;
        color: #ffffff;
        background-color: black;
        padding: 1rem 0;

      }
      
      button{
        width: 300px;
        cursor: pointer;
        border-radius:  0 0 2rem 2rem;
        transition: 0.2s;

        &.favorite {
          background-color: #212121;
        }
      }
      
      button:hover{
        color: #ffffff;
        background-color: #212121
      }

    }  

    audio{
      margin-top: 1rem;

    }

    ul{
      display: flex;
      justify-content: space-around;
        max-width: 30ch;   
    }

    li {
      padding: 1rem 0.5rem;
      max-width: 30ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; 
    }
    
  
  }
`
