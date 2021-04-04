import React from 'react';
import styled from 'styled-components';
import banner from '../media/download4.png';
import twitter from '../media/download2.png';
import discord from '../media/download.png';
import message from '../media/download3.png';


const Body = () => {
	return (
		<Splash>
			<SplashItemFirst>
				Manage your <SplashColor> DeFi </SplashColor> assets and liabilities in one <br></br> simple interface.
			</SplashItemFirst>
			<SplashItemSecond>Get unique access to opportunities in open finance.</SplashItemSecond>
			<SplashContainer>
				<SplashItemSearch>Enter ENS domain, a valid ETH, or BTC address</SplashItemSearch>
				<SplashItemGo>Let's Go!</SplashItemGo>
				<br /><SplashOr>or</SplashOr>
				<SplashItemConnect>Connect Wallet</SplashItemConnect>
			</SplashContainer>
			<SplashItemThird>→ Don't have an address? View demo.</SplashItemThird>
			<SplashItemFourth>→ What is DeFi?</SplashItemFourth>
		</Splash>
	);
};

// Body Container(Splash)
const Splash = styled.div`
	display: flex;
	background: #141a1e;
	color: #fff;
	justify-content: center;
	flex: 0 1 70%;
	/* flex: 1; */
	flex-direction: column;
	padding: 0 16px;
	width: 100%;
	margin: 0 auto;
	/* border: 5px solid yellow; */
	-webkit-font-smoothing: antialiased;
	line-height: normal;
`;


// DeFi
const SplashColor = styled.span`
	color: #784ffe;
	padding-right: 10px;
	padding-left: 10px;
	display: contents;
	font-size: 49px;
    font-weight: 650;
`;

// or
const SplashOr = styled.span`
	margin-right: 16px;
	padding-left: 10px;
	line-height: 58px;
	font-weight: 600;
	font-family: Avenir Next,Arial,sans-serif;
	color: #fff;
`;

// Manage your DeFi assets and liabilities in one simple interface.
const SplashItemFirst = styled.div`
	display: flex;
	background: #141a1e;
	color: #fff;
	font-family: Avenir Next, Arial, sans-serif;
	margin-top: 150px;
	margin-bottom: 8px;
	font-size: 39px;
	font-weight: 650;
`;

// Get unique access to opportunities in open finance.
const SplashItemSecond = styled.div`
	display: flex;
	background: #141a1e;
	color: #9cabbb;
	font-family: Avenir Next, Arial, sans-serif;
	margin-top: 5px;
	font-size: 24px;
	font-weight: 600;
`;

// Mid-Body Container
const SplashContainer = styled.div`
	display: flex;
	flex: 0 0 10%;
	flex-direction: row;
	margin-top: 32px;
	/* border: 5px dashed red; */
`;

// Enter ENS domain, a valid ETH, or BTC address
const SplashItemSearch = styled.div`
	display: flex;
	background: #21262b;
	color: #fff;
	align-items: center;
	border: 1px solid #2d3237;
	font-family: Avenir Next;
	font-size: 16px;
	width: 100%;
	min-width: 500px;
	max-width: 500px;
	margin-right: 16px;
	height: 54px;
	padding: 12px 16px;
	border-radius: 4px;
	cursor: text;
`;

// Let's Go!
const SplashItemGo = styled.div`
	display: flex;
	background: linear-gradient(135deg, #784ffe, #a160fe); 
	color: #fff;
	align-items: center;
	justify-content: center;
	font-family: Avenir Next;
	font-size: 16px;
	font-weight: 600;
	margin-top: 20px;
	margin-bottom: 80px;
	margin-right: 16px;
	margin: 1px;
	padding: 0 32px;
	height: 54px;
	/* margin-right: 55%; */
	border-radius: 4px;
	cursor: pointer;
	/* .btn:hover {
    transform: translateY(-40px);
  } */
`;

// Connect Wallet
const SplashItemConnect = styled.div`
	display: flex;
	background: #fff;
	color: #141a1e;
	align-items: center;
	justify-content: center;
	font-family: Avenir Next;
	font-size: 16px;
	font-weight: 600;
	margin-right: 16px;
	padding: 0 32px;
	height: 54px;
	border-radius: 4px;
	cursor: pointer;
`;

// Don't have an address? View demo.
const SplashItemThird = styled.div`
	display: flex;
	background: transparent;
	color: #fff;
	font-family: Avenir Next;
	font-weight: 500;
	font-size: 14px;
	margin-top: 22px;
	height: auto;
	border-radius: 4px;
	cursor: pointer;
`;

// What is DeFi?
const SplashItemFourth = styled.div`
	display: flex;
	background: transparent;
	color: #fff;
	font-family: Avenir Next;
	font-weight: 500;
	font-size: 14px;
	margin-top: 32px;
	height: auto;
	border-radius: 4px;
	cursor: pointer;
`;



const Bottom = () => {
    return (
        <FeatureList>
				<FeatureListBox1>
					<FeatureListItemNum>$1.3B+</FeatureListItemNum>
                    <FeatureListItemTitle>Invested through our platform</FeatureListItemTitle>
                    <FeatureListItem>Since May 2020</FeatureListItem>
				</FeatureListBox1>
				<FeatureListBox2>
					<FeatureListItemNum>400K+</FeatureListItemNum>
                    <FeatureListItemTitle>Monitored their assets</FeatureListItemTitle>
                    <FeatureListItem>Since January 2020</FeatureListItem>
				</FeatureListBox2>
				<FeatureListBox3>
					<FeatureListItemNum>51</FeatureListItemNum>
                    <FeatureListItemTitle>DeFi platforms supported</FeatureListItemTitle>
                    <FeatureListItem isLink>View the full list</FeatureListItem>
				</FeatureListBox3>
			</FeatureList>
    );
};

// Bottom Container
const FeatureList = styled.div`
	display: flex;
	background: #141a1e;
	flex-direction: row;
	/* flex: 1; */
    justify-content: space-around;
    /* align-items: center; */
	-webkit-font-smoothing: antialiased;
	padding: 120px 0;
`;

// Container 1
const FeatureListBox1 = styled.div`
	display: flex;
	background: #21262b;
    flex-direction: column;
	/* flex: 1; */
	/* align-items: center; */
	border-radius: 4px;
	padding: 32px 0;
	padding-left: 50px;
    padding-right: 50px;
	/* border: 5px solid green; */
`;

// Container 2
const FeatureListBox2 = styled.div`
	display: flex;
	background: #21262b;
    flex-direction: column;
	/* flex: 1; */
	/* align-items: center; */
	border-radius: 4px;
	padding: 32px 0;
	padding-left: 50px;
    padding-right: 50px;
	/* border: 5px solid teal; */
`;

// Container 3
const FeatureListBox3 = styled.div`
	display: flex;
	background: #21262b;
    flex-direction: column;
	/* flex: 1; */
	/* align-items: center; */
	border-radius: 4px;
	padding: 32px 0;
	padding-left: 50px;
    padding-right: 50px;
	/* border: 5px solid coral; */
`;

// Number
const FeatureListItemNum = styled.div`
	display: flex;
	color: #fff;
    flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 30px;
    font-weight: 600;
	/* margin-top: 20px; */
	margin-top: 0;
	margin-bottom: 21px;
`;

// Description
const FeatureListItemTitle = styled.div`
	display: flex;
	color: #fff;
	flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 20px;
	font-weight: 500;
	/* margin-top: 8px; */
	margin-top: 0;
	margin-bottom: 0;
`;

// Date/View the full list
const FeatureListItem = styled.div`
	display: flex;
	color: #9cabbb;
	flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 16px;
	padding: 10px;
	margin-top: 10px;
	margin-bottom: 0;
	text-decoration: ${props => props.isLink ? "underline" : "none" };
	cursor: pointer;
`;


const Header = () => {
	return (
		<HeaderBox>
			<HeaderImg src={banner}></HeaderImg>
			<HeaderItemZapper>Zapper</HeaderItemZapper>
			<HeaderItemBigSpace></HeaderItemBigSpace>
			<HeaderItemDocs>Docs</HeaderItemDocs>
			<HeaderItemTutorials>Tutorials</HeaderItemTutorials>
			<HeaderItemCommunity>Community</HeaderItemCommunity>
		</HeaderBox>
	);
};


// Header Container 
const HeaderBox = styled.div`
	display: flex;
	background: #141a1e;
	flex: 1;
	flex-direction: row;
	height: 80px;
	line-height: 80px;
	align-items: center;
	-webkit-font-smoothing: antialiased;
`;

// Zapper Icon
const HeaderImg = styled.img`
	display: flex;
	background: #141a1e;
	color: #fff;
	margin-inline-start: 10px;
	width: 50px;
`;

{/* <path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path> */}

// Zapper
const HeaderItemZapper = styled.div`
	display: flex;
	/* background: blueviolet; */
	color: #fff;
	font-size: 20px;
    font-weight: 650;
    margin-top: 2px;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

// BigSpace
const HeaderItemBigSpace = styled.div`
	display: flex;
	background:  #fff;
	flex: 45;
	/* border: 5px solid purple; */
`;

// Docs
const HeaderItemDocs = styled.div`
	display: flex;
	/* background: blue; */
	color: #fff;
	font-weight: 650;
	margin: 0 16px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

// Tutorials
const HeaderItemTutorials = styled.div`
	display: flex;
	/* background: turquoise; */
	color: #fff;
	font-weight: 650;
	margin: 0 16px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

// Community
const HeaderItemCommunity = styled.div`
	display: flex;
	/* background: tomato; */
	color: #fff;
	font-weight: 650;
	margin: 0 16px;
	margin-inline-end: 30px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

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
    padding: 42px 0;
    width: 100%;
    box-sizing: border-box;
    max-width: 1940px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
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

// Message Icon
const FooterImg3 = styled.img`
    display: flex;
    width: 25px;
    margin-right: 8px;
    cursor: pointer;
`; 

// FAQ
const FooterFaq = styled.div`
	display: flex;
	color: #9cabbb;
	font-size: 14px;
    margin-right: 12px;
    margin-left: 8px;
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
    margin-right: 15px;
	font-family: Avenir Next,Arial,sans-serif;
`;


export default Splash;