import React from 'react';
import styled from 'styled-components';
import twitter from '../media/download2.png';
import discord from '../media/download.png';
import message from '../media/download3.png';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterImg1 src={twitter}></FooterImg1>
            <FooterImg2 src={discord}></FooterImg2>
            <FooterImg3 src={message}></FooterImg3>
            <FooterFaq isLink>FAQ</FooterFaq>
            <FooterDocs isLink>Docs</FooterDocs>
            <FooterContact isLink>Contact Support</FooterContact>
            <FooterPlatform isLink>Supported Platforms</FooterPlatform>
            <FooterPolicy isLink>Privacy Policy</FooterPolicy>
            <FooterCookie isLink>Cookie Notice</FooterCookie>
            {/* <FooterLanguage></FooterLanguage> */}
            <FooterSpace></FooterSpace>
            <FooterCopyright>© Zapper 2021</FooterCopyright>
        </FooterContainer>
    );
};

// Footer Container
const FooterContainer = styled.div`
	display: flex;
	background: #141a1e;
	flex: 1;
	flex-direction: row;
	align-items: center;
    padding: 22px;
    width: 100%;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
`;

// Twitter Icon
const FooterImg1 = styled.img`
	width: 30px;
`; 

// Discord Icon
const FooterImg2 = styled.img`
	width: 30px;
`; 


// Zapper Barcode Icon
const FooterImg3 = styled.img`
	width: 30px;
`; 

// FAQ
const FooterFaq = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
	font-family: Avenir Next,Arial,sans-serif;
    text-decoration: ${props => props.isLink ? "underline" : "none" };
    cursor: pointer;
`;

// Docs
const FooterDocs = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
	font-family: Avenir Next,Arial,sans-serif;
    text-decoration: ${props => props.isLink ? "underline" : "none" };
    cursor: pointer;
`;

// Contact
const FooterContact = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
	font-family: Avenir Next,Arial,sans-serif;
    text-decoration: ${props => props.isLink ? "underline" : "none" };
    cursor: pointer;
`;

// Platforms
const FooterPlatform = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
	font-family: Avenir Next,Arial,sans-serif;
    text-decoration: ${props => props.isLink ? "underline" : "none" };
    cursor: pointer;
`;

// Policy
const FooterPolicy = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
	font-family: Avenir Next,Arial,sans-serif;
    text-decoration: ${props => props.isLink ? "underline" : "none" };
    cursor: pointer;
`;

// Cookie
const FooterCookie = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
	font-family: Avenir Next,Arial,sans-serif;
    text-decoration: ${props => props.isLink ? "underline" : "none" };
    cursor: pointer;
`;

// Language
// const FooterLanguage = styled.div`
// 	display: flex;
// 	color: #fff;
// 	font-family: Avenir Next,Arial,sans-serif;
// `;

// BigSpace
const FooterSpace = styled.div`
	display: flex;
	background:  #fff;
	flex: 45;
	/* border: 5px solid purple; */
`;

// Copyright
const FooterCopyright = styled.div`
	display: flex;
	color: #9cabbb;
	font-family: Avenir Next,Arial,sans-serif;
`;



export default Footer;