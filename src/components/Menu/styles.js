import styled from "styled-components";

export const NavMenu = styled.nav`
  padding: 1rem 1rem;
  background-color: #000000;

  img{
    margin: 1rem 1rem 0;
  }
  
  div{
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    button{
      display: flex;
      justify-content: flex-start;
      background: #000000;
      font-size: 1.2rem;
      color: #ffffff;
      cursor: pointer;
      padding: 1rem 2rem;
      border-radius: 1rem;
      transition: 0.2s;
      
      p{
        padding-left: 2rem;
      }
    }
    
    button:hover{
      background-color: #282828;
    }
  }

` 
