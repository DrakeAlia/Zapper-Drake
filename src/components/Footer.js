import React from "react";
import styled from "styled-components";
import twitter from "../media/download2.png";
import discord from "../media/download.png";
import weChat from "../media/download3.png";
import banner from "../media/download4.png";

// Footer of the Landing Page
const Footer = () => {
  return (
    <FooterContainer>
      <FooterZapperBox>
        <FooterImg src={banner}></FooterImg>
        <FooterZapper>Zapper</FooterZapper>
        <FooterCopyright>© Zapper 2021</FooterCopyright>
      </FooterZapperBox>
      <FooterCompany>
      <FooterCompanyHeader>Company</FooterCompanyHeader>
        <FooterItem isLink>Docs</FooterItem>
        <FooterItem isLink>Careers</FooterItem>
        <FooterItem isLink>Learn</FooterItem>
        <FooterItem isLink>Privacy Policy</FooterItem>
        <FooterItem isLink>Cookie Notice</FooterItem>
        <FooterItem isLink>Terms of Service</FooterItem>
      </FooterCompany>
      <FooterSupport>
      <FooterSupportHeader>Support</FooterSupportHeader>
        <FooterItem isLink>FAQ</FooterItem>
        <FooterItem isLink>Contact Support</FooterItem>
        <FooterItem isLink>Supported Platforms</FooterItem>
      </FooterSupport>
      <FooterSocial>
      <FooterSocialHeader>Social</FooterSocialHeader>
        <FooterIcon src={twitter}></FooterIcon>
        <FooterIcon src={discord}></FooterIcon>
        <FooterIcon src={weChat}></FooterIcon>
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
  margin: 20% auto;
  padding-right: 10%;
  -webkit-font-smoothing: antialiased;
  border: 1px solid #2d3237;
`;


// Zapper Box ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterZapperBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Zapper Icon //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterImg = styled.img`
  display: flex;
  width: 50px;
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
  margin-top: 32px;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Footer Items //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterItem= styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Company Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCompany = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Company Header //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCompanyHeader = styled.div`
  display: flex;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Support Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSupport = styled.div`
  display: block;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Support Header //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSupportHeader = styled.div`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Social Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  padding: 0 45px;
  margin-bottom: 16px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Social Header //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSocialHeader = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
  padding: 0 45px;
  margin-bottom: 16px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Image Icons //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterIcon = styled.img`
  display: flex;
  width: 25px;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;


export default Footer;
