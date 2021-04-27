import React from "react";
import styled from "styled-components";
import twitter from "../media/download2.png";
import discord from "../media/download.png";
import message from "../media/download3.png";

// Footer of the Landing Page
const Footer = () => {
  return (
    <FooterContainer>
      <FooterCopyright>© Zapper 2021</FooterCopyright>
      <FooterCompany>
        <FooterDocs isLink>Docs</FooterDocs>
        <FooterCareers isLink>Careers</FooterCareers>
        <FooterLearn isLink>Learn</FooterLearn>
        <FooterPolicy isLink>Privacy Policy</FooterPolicy>
        <FooterCookie isLink>Cookie Notice</FooterCookie>
        <FooterTerms isLink>Terms of Service</FooterTerms>
      </FooterCompany>
      <FooterSupport>
        <FooterFaq isLink>FAQ</FooterFaq>
        <FooterContact isLink>Contact Support</FooterContact>
        <FooterPlatform isLink>Supported Platforms</FooterPlatform>
      </FooterSupport>
      <FooterSocial>
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
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 72px 0;
  width: 100%;
  /* max-width: 1200px; */
  box-sizing: border-box;
  margin: 0 auto;
  border-top: 1px solid #2d3237;
  -webkit-font-smoothing: antialiased;
`;

// Copyright
const FooterCopyright = styled.div`
  display: flex;
  color: #9cabbb;
  margin-right: 15px;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Company //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterCompany = styled.div`
  display: block;
  flex-direction: column;
  align-items: stretch;
  margin-right: 8px;
  padding: 0 16px;
`;

// Docs
const FooterDocs = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Careers
const FooterCareers = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Learn
const FooterLearn = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Privacy Policy
const FooterPolicy = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Cookie Notice
const FooterCookie = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Terms of Service 
const FooterTerms = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Support //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSupport = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  padding: 0 16px;
`;

// FAQ
const FooterFaq = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  margin-left: 8px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Contact Support
const FooterContact = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Supported Platforms
const FooterPlatform = styled.div`
  display: flex;
  color: #9cabbb;
  font-size: 14px;
  margin-right: 12px;
  font-family: Avenir Next, Arial, sans-serif;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  cursor: pointer;
`;

// Social //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  padding: 0 45px;
`;

// Twitter Icon
const FooterImg1 = styled.img`
  display: flex;
  width: 25px;
  margin-right: 8px;
  margin-left: 15px;
  cursor: pointer;
`;

// Discord Icon
const FooterImg2 = styled.img`
  display: flex;
  width: 25px;
  margin-right: 8px;
  cursor: pointer;
`;

// WeChat Icon
const FooterImg3 = styled.img`
  display: flex;
  width: 25px;
  margin-right: 8px;
  cursor: pointer;
`;

export default Footer;
