
import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: cadetblue;
  display: flex;
  align-items : center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", "sans-serif";
  text-transform: uppercase;
  margin-left: 20px;
  &:hover{color : #0f0}
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.div`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility : ${(props) => props.show? "visible" : "hidden"};
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <Title>movie-app</Title>
          <CartIconContainer>
            <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" />
            <CartCount color="yellow" show={true}>0</CartCount>
          </CartIconContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;








// import { Component } from "react";
// import styled from "styled-components"
// // import "./styles.css"

// const Nav = styled.div`
// width: 100%;
// height: 70px;
// background-color: cadetblue;
// display: flex;
// justify-content: space-between;
// `

// const Title = styled.div`

//                         fontSize : 30,
//                         color : "#fff",
//                         fontWeight : 600,
//                         fontFamily : '"Montserrat", "sans-serif"',
//                         textTransform : "uppercase",
//                         marginLeft : 20

// `;

// const cartIconContainer = styled.div`

//                         position :" relative",
//                         cursor : "pointer"

// `;
// const cartImg = styled.img`
                        
//                         height : 48px ,
//                         margin-right : 20px,

// `;

// const cartCount = styled.div`
//                         background : "orange",
//                         border-radius : "50%",
//                         padding : "4px 8px",
//                         position : "absolute",
//                         right : 10,
//                         top : -5 ,
//                         font-size : 12,
//     }

// `

// class Navbar extends Component{
//     render(){
//         return(
//             <>
//             <Nav>
//                 <Title>movie-app</Title>
//                 <cartIconContainer>
//                     <cartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" />
//                     <cartCount>0</cartCount>
//                 </cartIconContainer>
//             </Nav>
//             </>
//         )
//     }
// }

// export default Navbar;

// const styles = {
//     nav : {
//                         width : "100%",
//                         height : "70px",
//                         backgroundColor : "cadetblue",
//                         display : "flex", 
//                         justifyContent : "space-between"
//     },
//     title : {
//                         fontSize : 30,
//                         color : "#fff",
//                         fontWeight : 600,
//                         fontFamily : '"Montserrat", "sans-serif"',
//                         textTransform : "uppercase",
//                         marginLeft : 20




//     },
//     cartContainer : {
//                         position :" relative",
//                         cursor : "pointer"
//     },
//     cartIcon : {
//                         height : 48 ,
//                         marginRight : 20
//     },
//     cartCount : {
//                         background : "orange",
//                         borderRadius : "50%",
//                         padding : "4px 8px",
//                         position : "absolute",
//                         right : 10,
//                         top : -5 ,
//                         fontSize : 12,
//     }
// }