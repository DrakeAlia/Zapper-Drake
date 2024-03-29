import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import compound from "../media/download5.png";
import synthetix from "../media/download6.png";
import cream from "../media/download7.png";

// The Dashboard after logining in  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashBoard = () => {
  const [dash, setDash] = useState("");

  useEffect(() => {
    requestDash();
    console.log(DashBoard);
  }, []);

  async function requestDash() {
    const res = await fetch(
      `https://api.zapper.fi/api/json`
    );
    const json = await res.json();

    setDash(json.dash);
  }

  return (
    <Dash>
      <DashTotal>
        <DashNet>Net Worth</DashNet>
        <DashAmt>$1,688,512.22</DashAmt>
        <DashSubtitle>
          <DashSubtitleItem>Assets: $1,751,735.84</DashSubtitleItem>
          <DashSubtitleItem>Debt: $63,223.61</DashSubtitleItem>
        </DashSubtitle>
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
          <DashGridImgBox>
            <GridImg src={compound}></GridImg>
          </DashGridImgBox>
          <DashGridItem>Compound</DashGridItem>
          <DashMoney>$63,543.62</DashMoney>
        </DashGridBox>
        <DashGridBox>
          <DashGridImgBox>
            <GridImg src={synthetix}></GridImg>
          </DashGridImgBox>
          <DashGridItem>Synthetix</DashGridItem>
          <DashMoney>$20,872.65</DashMoney>
        </DashGridBox>
        <DashGridBox>
          <DashGridImgBox>
            <GridImg src={cream}></GridImg>
          </DashGridImgBox>
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

// Subtitle Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 80%;
  width: auto;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 1px solid #2d3237;
`;

// Subtitle Item //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashSubtitleItem = styled.div`
  display: flex;
  color: #9cabbb;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 1px solid #2d3237;
`;

// Controls Container ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashControls = styled.div`
  display: flex;
  flex-direction: row;
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
  flex-wrap: wrap;
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
  padding: 16px;
  margin: 40px;
  padding-top: 30px;
  border-radius: 4px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 1px solid #2d3237;
`;

// Grid Box with images ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DashGridImgBox = styled.div`
  display: flex;
  background: #141a1e;
  color: #fff;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  margin-top: 5px;
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  border: 1px solid #2d3237;
`;

// Grid Icon ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const GridImg = styled.img`
  display: flex;
  width: 100%;
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
  margin-right: 130px;
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


export default DashBoard;
