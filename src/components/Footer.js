import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTwitter></FooterTwitter>
            <FooterDiscord></FooterDiscord>
            <FooterZapper></FooterZapper>
            <FooterFaq>FAQ</FooterFaq>
            <FooterDocs>Docs</FooterDocs>
            <FooterContact>Contact Support</FooterContact>
            <FooterPlatform>Supported Platforms</FooterPlatform>
            <FooterPolicy>Privacy Policy</FooterPolicy>
            <FooterCookie>Cookie Notice</FooterCookie>
            <FooterLanguage></FooterLanguage>
            <FooterSpace></FooterSpace>
            <FooterCopyright>© Zapper 2021</FooterCopyright>
        </FooterContainer>
    );
};

// Footer Container
const FooterContainer = styled.div`
	display: flex;
	background: #141a1e;;
	flex: 1;
	flex-direction: row;
	height: 80px;
	align-items: center;
    padding: 1%;
`;

// Twitter Icon
const FooterTwitter = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;
/* href="https://twitter.com/zapper_f" */

// Discord Icon
const FooterDiscord = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Zapper Icon
const FooterZapper = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// FAQ
const FooterFaq = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Docs
const FooterDocs = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Contact
const FooterContact = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Platforms
const FooterPlatform = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Policy
const FooterPolicy = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Cookie
const FooterCookie = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Language
const FooterLanguage = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// BigSpace
const FooterSpace = styled.div`
	display: flex;
	background:  #fff;;
	flex: 45;
	/* border: 5px solid purple; */
`;

// Copyright
const FooterCopyright = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;



export default Footer;