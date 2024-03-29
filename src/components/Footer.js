import React from "react";
import styled from "styled-components";
import twitter from "../media/download2.png";
import discord from "../media/download.png";
import weChat from "../media/download3.png";
import banner from "../media/download4.png";

// Footer of the Landing Page //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Footer = () => {
  return (
    <FooterContainer>
      <FooterZapperBox>
        <FooterBanner>
          <FooterImg src={banner}></FooterImg>
          <FooterZapper>Zapper</FooterZapper>
        </FooterBanner>
        <FooterCopyright>© Zapper 2021</FooterCopyright>
      </FooterZapperBox>
      <FooterCompany>
        <FooterTitle>Company</FooterTitle>
        <FooterItem isLink>Docs</FooterItem>
        <FooterItem isLink>Careers</FooterItem>
        <FooterItem isLink>Learn</FooterItem>
        <FooterItem isLink>Privacy Policy</FooterItem>
        <FooterItem isLink>Cookie Notice</FooterItem>
        <FooterItem isLink>Terms of Service</FooterItem>
      </FooterCompany>
      <FooterSupport>
        <FooterTitle>Support</FooterTitle>
        <FooterItem isLink>FAQ</FooterItem>
        <FooterItem isLink>Contact Support</FooterItem>
        <FooterItem isLink>Supported Platforms</FooterItem>
      </FooterSupport>
      <FooterSocial>
        <FooterTitle>Social</FooterTitle>
        <FooterIconText>
          <FooterIcon src={twitter}></FooterIcon>
          Twitter
        </FooterIconText>
        <FooterIconText>
          <FooterIcon src={discord}></FooterIcon>
          Discord
        </FooterIconText>
        <FooterIconText>
          <FooterIcon src={weChat}></FooterIcon>
          Wechat
        </FooterIconText>
      </FooterSocial>
    </FooterContainer>
  );
};


// Footer Container //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #141a1e;
  padding: 72px 0;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
  border: 1px solid #2d3237;
`;


// Zapper Box ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterZapperBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 10%;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
  border: 1px solid #2d3237;
`;


// Zapper Icon & Name //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #2d3237;
`;


// Zapper Icon //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterImg = styled.img`
  display: flex;
  width: 25%;
  cursor: pointer;
`;

// Zapper //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterZapper = styled.div`
  display: flex;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-top: 2px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Zapper Copyright //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCopyright = styled.div`
  display: flex;
  color: #9cabbb;
  margin-top: 40%;
  padding-left: 2%;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Footer Titles //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterTitle = styled.div`
  display: flex;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-left: 10%;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Footer Items //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 14px;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 6px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Company Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCompany = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 14px;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Support Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSupport = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Social Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-right: 8px;
  padding: 0 45px;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Icon Text //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterIconText = styled.div`
  display: flex;
  margin-bottom: 20%;
  width: 25px;
  cursor: pointer;
`;

// Image Icons //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterIcon = styled.img`
  display: flex;
  margin-bottom: 20%;
  width: 25px;
  cursor: pointer;
`;

export default Footer;
