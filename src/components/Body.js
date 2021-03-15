import React from 'react';
import styled from 'styled-components';
import derek from '../media/derek.png'

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
				<br />or
				<SplashItemConnect>Connect Wallet</SplashItemConnect>
			</SplashContainer>
			<SplashItemThird>Don't have an address? View demo.</SplashItemThird>
			<SplashItemFourth>What is DeFi?</SplashItemFourth>
			<SplashImg1 src={derek}></SplashImg1>
		</Splash>
	);
};

// Body Container
const Splash = styled.div`
	display: flex;
	background: #141a1e;
	color: #fff;
	justify-content: center;
	flex: 0 0 60%;
	flex-direction: column;
	padding: 0 16px;
	width: 100%;
	/* max-width: 1200px; */
	margin: 0 auto;
	/* border: 5px solid yellow; */
	line-height: normal;
`;

const SplashImg1 = styled.img`
	width:10px;
`;

const SplashColor = styled.span`
	color: #784ffe;
	padding-right: 10px;
	padding-left: 10px;
	display: contents;
`;

// Manage your DeFi assets and liabilities in one simple interface.
const SplashItemFirst = styled.div`
	display: flex;
	background: #141a1e;
	color: #fff;
	/* flex: 0 0 10%; */
	font-family: Avenir Next, Arial, sans-serif;
	margin-top: 150px;
	margin-bottom: 8px;
	font-size: 36px;
	font-weight: 600;
	/* width: 70%; */
`;

// Get unique access to opportunities in open finance.
const SplashItemSecond = styled.div`
	display: flex;
	background: #141a1e;
	color: #9cabbb;
	font-family: Avenir Next, Arial, sans-serif;
	margin-top: 12px;
	margin-bottom: 32px;
	font-size: 24px;
	font-weight: 400;
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
	/* flex: 0.5; */
	/* flex: 0 0 30%; */
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
	cursor: pointer;
`;

// Let's Go!
const SplashItemGo = styled.div`
	display: flex;
	// background: linear-gradient(135deg, #784ffe, #a160fe);
	background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,67,9,1) 35%, rgba(0,212,255,1) 100%); 
	color: #fff;
	/* flex: 0.5; */
	align-items: center;
	justify-content: center;
	font-family: Avenir Next;
	font-size: 16px;
	font-weight: 500;
	margin-top: 20px;
	margin-bottom: 80px;
	margin-right: 16px;
	margin: 1px;
	padding: 0 32px;
	height: 54px;
	/* margin-right: 55%; */
	border-radius: 4px;
	cursor: pointer;
`;

// Connect Wallet
const SplashItemConnect = styled.div`
	display: flex;
	background: #fff;
	color: #141a1e;
	/* flex: 0.5; */
	align-items: center;
	justify-content: center;
	font-family: Avenir Next;
	font-size: 16px;
	font-weight: 500;
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
	margin-top: 32px;
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

export default Body;
