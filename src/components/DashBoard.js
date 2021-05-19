import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import compound from "../media/download5.png";
import synthetix from "../media/download6.png";
import cream from "../media/download7.png";

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
      <DashGridContainer>
        <DashGridBox>
          {/* <GridImg src={}></GridImg> */}
          <DashGridItem>Wallet</DashGridItem>
          <DashMoney>$963,441.92</DashMoney>
        </DashGridBox>
        <DashGridBox>
          {/* <GridImg src={}></GridImg> */}
          <DashGridItem>Deposits</DashGridItem>
          <DashMoney>$711,368.91</DashMoney>
        </DashGridBox>
        <DashGridBox>
          {/* <GridImg src={}></GridImg> */}
          <DashGridItem>NFTs</DashGridItem>
        </DashGridBox>
        <DashGridBox>
          {/* <GridImg src={}></GridImg> */}
          <DashGridItem>Yield Farming</DashGridItem>
          <DashMoney>$566.11</DashMoney>
        </DashGridBox>
        <DashGridBox>
          {/* <GridImg src={}></GridImg> */}
          <DashGridItem>Debt</DashGridItem>
          <DashMoney>$63,543.62</DashMoney>
        </DashGridBox>
      </DashGridContainer>
      <DashPlatforms>Platforms</DashPlatforms>
      <DashGridContainer>
        <DashGridBox>
          <GridImg src={compound}></GridImg>
          <DashGridItem>Compound</DashGridItem>
          <DashMoney>$63,543.62</DashMoney>
        </DashGridBox>
        <DashGridBox>
          <GridImg src={synthetix}></GridImg>
          <DashGridItem>Synthetix</DashGridItem>
          <DashMoney>$20,872.65</DashMoney>
        </DashGridBox>
        <DashGridBox>
          <GridImg src={cream}></GridImg>
          <DashGridItem>Cream</DashGridItem>
          <DashMoney>$20,872.65</DashMoney>
        </DashGridBox>
      </DashGridContainer>
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
  border: 1px solid #2d3237;
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
  border: 1px solid #2d3237;
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
  border: 1px solid #2d3237;
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
  border: 1px solid #2d3237;
`;

// Assets & Debt //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashSubtitle = styled.div`
  display: flex;
  color: #9cabbb;
  width: 20%;
  font-size: 14px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 1px solid #2d3237;
`;

// Controls Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashControls = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #141a1e;
  color: #fff;
  padding: 22px 0;
  padding-right: 20%;
  margin-left: 30%;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 1px solid #2d3237;
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
  border: 1px solid #2d3237;
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
  border: 1px solid #2d3237;
`;

// Grid Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* justify-content: center; */
  background: #141a1e;
  color: #fff;
  width: 100%;
  margin-bottom: 32px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 1px solid #2d3237;
`;

// Grid Box with items ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGridBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #141a1e;
  color: #fff;
  /* width: 20%; */
  padding: 16px;
  margin: 40px;
  border-radius: 4px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 1px solid #2d3237;
`;

// Grid Icon ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const GridImg = styled.img`
  display: flex;
  width: 70px;
`;

// Grid Items ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGridItem = styled.div`
  display: flex;
  align-items: baseline;
  background: #141a1e;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 1px solid #2d3237;
`;

// Grid Item Money ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashMoney = styled.div`
  display: flex;
  background: #141a1e;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  padding: 16px;
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
  border: 1px solid #2d3237;
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
