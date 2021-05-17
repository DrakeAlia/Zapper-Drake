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

  //   return (
  //     <Dash>
  //       <DashNet>Net Worth</DashNet>
  //       <DashAmt>$1,688,512.22</DashAmt>
  //       <DashSettings>
  //       <DashCustom>Customize</DashCustom>
  //       <DashNetwork>Network Settings</DashNetwork>
  //       </DashSettings>
  //       <DashSpace>Space</DashSpace>
  //       <DashSubtitle>Assets: $1,751,735.84 Debt: $63,223.61</DashSubtitle>
  //       <DashAcc>Account Overview</DashAcc>
  //       <DashAccWall>Wallet</DashAccWall>
  //       <DashAccDep>Deposits</DashAccDep>
  //       <DashAccNTF>NFTs</DashAccNTF>
  //       <DashAccFar>Yield Farming</DashAccFar>
  //       <DashAccDebt>Debt</DashAccDebt>
  //       <DashPlat>Platforms</DashPlat>
  //       <DashPlatCom>Compound</DashPlatCom>
  //       <DashPlatSyn>Sythetix</DashPlatSyn>
  //       <DashPlatCr>Cream</DashPlatCr>
  //       <DashAssetAllo>Asset Allocation</DashAssetAllo>
  //       <DashAssetAlloWall>Wallet</DashAssetAlloWall>
  //       <DashAssetAlloDep>Deposits</DashAssetAlloDep>
  //       <DashAssetAlloFar>Yield Farming</DashAssetAlloFar>
  //       <DashPlatformAllo>Platform Allocation</DashPlatformAllo>
  //       <DashPlatformAlloCom>Compound</DashPlatformAlloCom>
  //       <DashPlatformAlloSyn>Synthetix</DashPlatformAlloSyn>
  //       <DashPlatformAlloCr>Cream</DashPlatformAlloCr>
  //     </Dash>
  //   );
  // };

  return (
    <Dash>
      <DashTotal>
        <DashNet>Net Worth</DashNet>
        <DashAmt>$1,688,512.22</DashAmt>
        <DashSubtitle>Assets: $1,751,735.84 Debt: $63,223.61</DashSubtitle>
      <DashControls>
        <DashControlItem>Customize</DashControlItem>
        <DashControlItem>Network Settings</DashControlItem>
      </DashControls>
      </DashTotal>
      <DashGridHeader>Account Overview</DashGridHeader>
      <DashGrid>
        <DashGridItem>Wallet</DashGridItem>
        <DashGridItem>Deposits</DashGridItem>
        <DashGridItem>NFTs</DashGridItem>
        <DashGridItem>Yield Farming</DashGridItem>
        <DashGridItem>Debt</DashGridItem>
      </DashGrid>
      <DashPlatforms>Platforms</DashPlatforms>
      <DashGrid>
      <DashGridItem>Compound</DashGridItem>
      <DashGridItem>Synthetix</DashGridItem>
      <DashGridItem>Cream</DashGridItem>
      </DashGrid>
    </Dash>
  );
};

// Dash Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Dash = styled.div`
  display: flex;
  flex-direction: column;
  background: #141a1e;
  color: #fff;
  padding: 32px 0;
  padding-left: 2%;
  padding-right: 12%;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid blue;
`;

// Total ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashTotal = styled.div`
  display: flex;
  flex-direction: column;
  background: #141a1e;
  color: #fff;
  padding: 32px 0;
  padding-left: 170px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid blue;
`;


// Net Worth //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashNet = styled.div`
  display: flex;
  color: #9cabbb;
  width: 6%;
  margin-top: 8px;
  margin-bottom: 2px;
  margin-left: 0px;
  font-size: 16px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid yellow;
`;

// Total Amount //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAmt = styled.div`
  display: flex;
  width: 15%;
  margin: 4px 0;
  font-size: 30px;
  font-weight: 500;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Assets & Debt //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashSubtitle = styled.div`
  display: flex;
  color: #9cabbb;
  width: 20%;
  font-size: 14px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid teal;
`;

// // BigSpace in between ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashSpace = styled.div`
//   display: flex;
//   margin-left: 20%;
//   margin-right: 40%;
//   border: 5px solid purple;
// `;

// Controls Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashControls = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  background: #141a1e;
  color: #fff;
  padding: 22px 0;
  padding-left: 40%;
  padding-right: 10%;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid yellow;
`;

// Control Items //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashControlItem = styled.div`
  display: flex;
  color: #fff;
  width: 190px;
  font-size: 14px;
  font-weight: 500;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 5px solid green;
`;

// Grid Header ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGridHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: #141a1e;
  color: #fff;
  height: 60px;
  font-size: 20px;
  font-weight: 400;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid limegreen;
`;

// Grid Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #141a1e;
  color: #fff;
  margin-bottom: 32px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid teal;
`;

// Grid Items ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGridItem = styled.div`
  display: flex;
  flex-direction: column;
  background: #141a1e;
  color: #fff;
  padding: 16px;
  padding-left: 90px;
  padding-right: 90px;
  margin: 40px;
  border-radius: 4px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 1px solid #2d3237;
`;

// Platforms Header ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatforms = styled.div`
  display: flex;
  flex-direction: column;
  background: #141a1e;
  color: #fff;
  height: 60px;
  font-size: 20px;
  font-weight: 400;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid limegreen;
`;


// Account Overview ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAcc = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 20px;
//   font-weight: 400;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// // Account Wallet ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAccWall = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   /* flex: 0 0 20%; */
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// // Account Deposits ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAccDep = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   color: #fff;
//   padding: 32px 0;
//   /* width: 100%; */
//   flex: 0 0 20%;
//   margin: 0 auto;
//   /* margin-right: 32px; */
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// // Account NTFs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAccNTF = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// // Account Yield Farming ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAccFar = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// // Account Debt ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAccDebt = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid green;
// `;

// // Platforms ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlat = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 20px;
//   font-weight: 400;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid pink;
// `;

// // Platforms Compound ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatCom = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid pink;
// `;

// // Platforms Synthetix ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatSyn = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid pink;
// `;

// // Platforms Cream ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatCr = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 16px;
//   font-weight: 500;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid pink;
// `;

// // Asset Allocation ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAssetAllo = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-size: 20px;
//   font-weight: 400;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid purple;
// `;

// // Asset Allocation Wallet ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAssetAlloWall = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid purple;
// `;

// // Asset Allocation Deposits ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAssetAlloDep = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid purple;
// `;

// // Asset Allocation Yield Farming ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashAssetAlloFar = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid purple;
// `;

// // Platform Allocation //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatformAllo = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   border: 5px solid blue;
//   font-size: 20px;
//   font-weight: 400;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid red;
// `;

// // Platform Allocation Compound //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatformAlloCom = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid red;
// `;

// // Platform Allocation Synthetix //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatformAlloSyn = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid red;
// `;

// // Platform Allocation Cream //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DashPlatformAlloCr = styled.div`
//   display: flex;
//   color: #fff;
//   padding: 32px 0;
//   width: 100%;
//   margin: 0 auto;
//   font-family: Avenir Next, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   border: 5px solid red;
// `;

export default DashBoard;
