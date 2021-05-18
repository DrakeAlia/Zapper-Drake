import React from "react";
import styled from "styled-components";
import twitter from "../media/download2.png";
import discord from "../media/download.png";
import message from "../media/download3.png";
import banner from "../media/download4.png";

// Footer of the Landing Page
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterImg src={banner}></FooterImg>
        <FooterZapper>Zapper</FooterZapper>
        <FooterCopyright>© Zapper 2021</FooterCopyright>
      </FooterBox>
      <FooterCompany>
        <br /> Company
        <FooterDocs isLink>Docs</FooterDocs>
        <FooterCareers isLink>Careers</FooterCareers>
        <FooterLearn isLink>Learn</FooterLearn>
        <FooterPolicy isLink>Privacy Policy</FooterPolicy>
        <FooterCookie isLink>Cookie Notice</FooterCookie>
        <FooterTerms isLink>Terms of Service</FooterTerms>
      </FooterCompany>
      <FooterSupport>
        <br /> Support
        <FooterFaq isLink>FAQ</FooterFaq>
        <FooterContact isLink>Contact Support</FooterContact>
        <FooterPlatform isLink>Supported Platforms</FooterPlatform>
      </FooterSupport>
      <FooterSocial>
        <br /> Social
        <FooterImg1 src={twitter}></FooterImg1>
        <FooterImg2 src={discord}></FooterImg2>
        <FooterImg3 src={message}></FooterImg3>
      </FooterSocial>
    </FooterContainer>
  );
};

// Footer Container //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterContainer = styled.div`
  display: flex;
  background: #141a1e;
  margin: 20% auto;
  border-top: 1px solid #2d3237;
  -webkit-font-smoothing: antialiased;
  border-top: 1px solid #2d3237;
`;

// Title Box ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterBox = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Zapper Icon //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterImg = styled.img`
  display: flex;
  background: #141a1e;
  align-items: center;
  color: #fff;
  margin-inline-start: 10px;
  width: 50px;
`;

// Zapper //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterZapper = styled.div`
  display: flex;
  /* background: blueviolet; */
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-top: 2px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Copyright //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCopyright = styled.div`
  display: flex;
  color: #9cabbb;
  margin-top: 32px;
  text-align: left;
  flex: 1 1;
  font-size: 14px;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Company Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  color: #fff;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Docs //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterDocs = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-bottom: 8px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Careers //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCareers = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Learn //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterLearn = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Privacy Policy //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterPolicy = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Cookie Notice //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCookie = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Terms of Service //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterTerms = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Support Box //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSupport = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
  color: #fff;
  font-family: Avenir Next, Arial, sans-serif;
`;

// FAQ //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterFaq = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  margin-left: 8px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Contact Support //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterContact = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

// Supported Platforms //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterPlatform = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
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
  font-family: Avenir Next, Arial, sans-serif;
`;

// Twitter Icon //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterImg1 = styled.img`
  display: flex;
  width: 25px;
  margin-right: 8px;
  margin-left: 15px;
  cursor: pointer;
`;

// Discord Icon //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterImg2 = styled.img`
  display: flex;
  width: 25px;
  margin-right: 8px;
  cursor: pointer;
`;

// WeChat Icon //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterImg3 = styled.img`
  display: flex;
  width: 25px;
  margin-right: 8px;
  cursor: pointer;
`;

export default Footer;
