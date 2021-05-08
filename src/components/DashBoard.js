import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const DashBoard = () => {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//     );
// };

const DashBoard = () => {
  const [dash, setDash] = useState("");

  useEffect(() => {
    console.log(DashBoard);
  }, [DashBoard]);

  return (
    <Dash>
      {/* <DashHeader>Test</DashHeader>
      <DashNav>Test</DashNav> */}
      {/* <DashBody> */}
        <DashNet>Net Worth</DashNet>
        <DashAmt>$1,688,512.22</DashAmt>
        <DashSubtitle>Assets: $1,751,735.84 Debt: $63,223.61</DashSubtitle>
        <DashSpace>Test</DashSpace>
        <DashAcc>Test</DashAcc>
        <DashPlat>Test</DashPlat>
        <DashAsset>Test</DashAsset>
      {/* </DashBody> */}
    </Dash>
  );
};

const Dash = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  /* padding: 0 16px; */
  padding: 32px 0;
  font-family: Avenir Next,Arial,sans-serif;
  width: 100%;
	margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
`;

// const DashHeader = styled.div`
// border: 5px solid yellow;
// `;

// const DashNav = styled.div`
// border: 5px solid violent;
// `;

// const DashBody = styled.div`
// display: flex;
// background: #141a1e;
// flex-direction: column;
// color: #fff;
// justify-content: space-around;
// /* padding: 0 16px; */
// padding: 32px 0;
// font-family: Avenir Next,Arial,sans-serif;
// width: 100%;
// margin: 0 auto;
// border: 5px solid blue;
// -webkit-font-smoothing: antialiased;
// `;

const DashNet = styled.div`
display: flex;
background: #141a1e;
flex-direction: column;
color: #9cabbb;
justify-content: space-around;
/* padding: 0 16px; */
padding: 32px 0;
font-family: Avenir Next,Arial,sans-serif;
font-size: 16px;
width: 6%;
margin-top: 8px;
margin-bottom: 32px;
margin-left: 0px;
border: 5px solid blue;
-webkit-font-smoothing: antialiased;
border: 5px solid yellow;
`;

const DashAmt = styled.div`
  border: 5px solid green;
`;

const DashSubtitle = styled.div`
  border: 5px solid teal;
`;

// BigSpace in between
const DashSpace = styled.div`
  display: flex;
  background: #fff;
  flex: 45;
  /* border: 5px solid purple; */
`;

const DashAcc = styled.div`
display: flex;
background: #141a1e;
flex-direction: column;
color: #fff;
justify-content: space-around;
/* padding: 0 16px; */
padding: 32px 0;
font-family: Avenir Next,Arial,sans-serif;
width: 100%;
margin: 0 auto;
border: 5px solid blue;
-webkit-font-smoothing: antialiased;
border: 5px solid green;
`;

const DashPlat = styled.div`
display: flex;
background: #141a1e;
flex-direction: column;
color: #fff;
justify-content: space-around;
/* padding: 0 16px; */
padding: 32px 0;
font-family: Avenir Next,Arial,sans-serif;
width: 100%;
margin: 0 auto;
border: 5px solid blue;
-webkit-font-smoothing: antialiased;
border: 5px solid pink;
`;

const DashAsset = styled.div`
display: flex;
background: #141a1e;
flex-direction: column;
color: #fff;
justify-content: space-around;
/* padding: 0 16px; */
padding: 32px 0;
font-family: Avenir Next,Arial,sans-serif;
width: 100%;
margin: 0 auto;
border: 5px solid blue;
-webkit-font-smoothing: antialiased;
border: 5px solid purple;
`;

export default DashBoard;


// OLD:
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// // const DashBoard = () => {
// //     return (
// //         <div>
// //             <h1>Dashboard</h1>
// //         </div>
// //     );
// // };

// const DashBoard = () => {
//   const [dash, setDash] = useState("");

//   useEffect(() => {
//     console.log(DashBoard);
//   }, [DashBoard]);

//   return (
//     <Dash>
//       <DashHeader>
//         <DashTotal></DashTotal>
//         <DashNet>Net Worth</DashNet>
//         <DashAmt>$1,688,512.22</DashAmt>
//         <DashSubtitle>Assets: $1,751,735.84 Debt: $63,223.61</DashSubtitle>
//       </DashHeader>
//       <DashSpace>Test</DashSpace>
//       <DashAcc>Test</DashAcc>
//       <DashPlat>Test</DashPlat>
//       <DashAsset>Test</DashAsset>
//     </Dash>
//   );
// };

// const Dash = styled.div`
//   display: flex;
//   background: #141a1e;
//   flex-direction: column;
//   color: #fff;
//   justify-content: space-around;
//   /* padding: 0 16px; */
//   padding: 32px 0;
//   font-family: Avenir Next, Arial, sans-serif;
//   width: 100%;
//   margin: 0 auto;
//   border: 5px solid blue;
//   -webkit-font-smoothing: antialiased;
// `;

// const DashHeader = styled.div`
//   margin-top: 8px;
//   margin-bottom: 32px;
//   display: flex;
//   font-family: Avenir Next,Arial,sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid yellow;
// `;

// const DashTotal = styled.div`
//   display: block;
//   font-family: Avenir Next,Arial,sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid yellow;
// `;

// const DashNet = styled.div`
//   display: flex;
//   background: #141a1e;

//   color: #9cabbb;

//   /* padding: 0 16px; */

//   font-family: Avenir Next, Arial, sans-serif;
//   font-size: 16px;
 
//   margin-left: 0px;
//   border: 5px solid blue;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid yellow;
// `;

// const DashAmt = styled.div`
//   border: 5px solid yellow;
// `;

// const DashSubtitle = styled.div`
//   border: 5px solid yellow;
// `;

// // BigSpace in between
// const DashSpace = styled.div`
//   display: flex;
//   background: #fff;
//   flex: 45;
//   /* border: 5px solid purple; */
// `;

// const DashAcc = styled.div`
//   display: flex;
//   background: #141a1e;
//   flex-direction: column;
//   color: #fff;
//   justify-content: space-around;
//   /* padding: 0 16px; */
//   padding: 32px 0;
//   font-family: Avenir Next, Arial, sans-serif;
//   width: 100%;
//   margin: 0 auto;
//   border: 5px solid blue;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// const DashPlat = styled.div`
//   display: flex;
//   background: #141a1e;
//   flex-direction: column;
//   color: #fff;
//   justify-content: space-around;
//   /* padding: 0 16px; */
//   padding: 32px 0;
//   font-family: Avenir Next, Arial, sans-serif;
//   width: 100%;
//   margin: 0 auto;
//   border: 5px solid blue;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid pink;
// `;

// const DashAsset = styled.div`
//   display: flex;
//   background: #141a1e;
//   flex-direction: column;
//   color: #fff;
//   justify-content: space-around;
//   /* padding: 0 16px; */
//   padding: 32px 0;
//   font-family: Avenir Next, Arial, sans-serif;
//   width: 100%;
//   margin: 0 auto;
//   border: 5px solid blue;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid purple;
// `;

// export default DashBoard;
