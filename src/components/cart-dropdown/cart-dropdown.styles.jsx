import styled from 'styled-components'
import {BaseButton,GoogleSignInButton,InvertedButton}from './../button/button.styles'
export const CartDropdownContainer=styled.div`
  position: absolute;
  width: 260px;
  height: 280px;
 
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  /* ::-webkit-scrollbar { */
    /* display: none; */
  /* }; */
  ${BaseButton},${GoogleSignInButton},${InvertedButton}{
    margin:auto;
  };


`;
export const EmptyMessage=styled.span`
  font-size: 18px;
    margin: 50px auto;
`;
export const CartItems=styled.div`
  height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`





// .cart-dropdown-container {
//   position: absolute;
//   width: 260px;
//   height: 280px;
 
//   display: flex;
//   flex-direction: column;
//   padding: 12px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//   ::-webkit-scrollbar {
//     display: none;
//   }


//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }

