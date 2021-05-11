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
      {/* <DashBody> */}
      <DashNet>Net Worth</DashNet>
      <DashAmt>$1,688,512.22</DashAmt>
      <DashCustom>Customize</DashCustom>
      <DashSubtitle>Assets: $1,751,735.84 Debt: $63,223.61</DashSubtitle>
      <DashSpace>Test</DashSpace>
      <DashAcc>Account Overview</DashAcc>
      <DashAccWall>Wallet</DashAccWall>
      <DashAccDep>Deposits</DashAccDep>
      <DashAccNTF>NFTs</DashAccNTF>
      <DashAccFar>Yield Farming</DashAccFar>
      <DashAccDebt>Debt</DashAccDebt>
      <DashPlat>Platforms</DashPlat>
      <DashPlatCom>Compound</DashPlatCom>
      <DashPlatSyn>Sythetix</DashPlatSyn>
      <DashPlatCr>Cream</DashPlatCr>
      <DashPlatSw>Swerve</DashPlatSw>
      <DashAssetAllo>Asset Allocation</DashAssetAllo>
      <DashAssetAlloWall>Wallet</DashAssetAlloWall>
      <DashAssetAlloDep>Deposits</DashAssetAlloDep>
      <DashAssetAlloFar>Yield Farming</DashAssetAlloFar>
      <DashPlatformAllo>Platform Allocation</DashPlatformAllo>
      <DashPlatformAlloCom>Compound</DashPlatformAlloCom>
      <DashPlatformAlloSyn>Synthetix</DashPlatformAlloSyn>
      <DashPlatformAlloCr>Cream</DashPlatformAlloCr>
      <DashPlatformAlloSw>Swerve</DashPlatformAlloSw>
      {/* </DashBody> */}
    </Dash>
  );
};

// Dash Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Dash = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
`;

// Net Worth //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashNet = styled.div`
  display: flex;
  background: #141a1e;
  color: #9cabbb;
  font-family: Avenir Next, Arial, sans-serif;
  font-size: 16px;
  width: 6%;
  margin-top: 8px;
  margin-bottom: 2px;
  margin-left: 0px;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid yellow;
`;

// Total Amount //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAmt = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  width: 15%;
  margin: 4px 0;
  font-weight: 500;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// BigSpace in between ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashSpace = styled.div`
  display: flex;
  background: #141a1e;
  border: 5px solid purple;
`;

// Customize //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashCustom = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
  font-size: 14px;
  width: 5%;
  font-weight: 500;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 5px solid green;
`;

// Assets & Debt //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashSubtitle = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  width: 15%;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 5px solid teal;
`;

// Account Overview ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAcc = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Account Wallet ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAccWall = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Account Deposits ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAccDep = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Account NTFs ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAccNTF = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Account Yield Farming ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAccFar = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Account Debt ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAccDebt = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid green;
`;

// Platforms ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlat = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid pink;
`;

// Platforms Compound ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatCom = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid pink;
`;

// Platforms Synthetix ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatSyn = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid pink;
`;

// Platforms Cream ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatCr = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid pink;
`;

// Platforms Swerve ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatSw = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid pink;
`;

// Asset Allocation ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAssetAllo = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Asset Allocation Wallet ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAssetAlloWall = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Asset Allocation Deposits ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAssetAlloDep = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Asset Allocation Yield Farming ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashAssetAlloFar = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Platform Allocation //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatformAllo = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Platform Allocation Compound //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatformAlloCom = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Platform Allocation Synthetix //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatformAlloSyn = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Platform Allocation Cream //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatformAlloCr = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

// Platform Allocation Swerve //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashPlatformAlloSw = styled.div`
  display: flex;
  background: #141a1e;
  flex-direction: column;
  color: #fff;
  justify-content: space-around;
  padding: 32px 0;
  font-family: Avenir Next, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  border: 5px solid blue;
  -webkit-font-smoothing: antialiased;
  border: 5px solid purple;
`;

export default DashBoard;

