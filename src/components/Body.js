import React from 'react';
import styled from 'styled-components';

const Body = () => {
	return (
		<Splash>
			<SplashItemFirst>Manage your DeFi assets and liabilities in one simple interface.</SplashItemFirst>
			<SplashItemSecond>Get unique access to opportunities in open finance.</SplashItemSecond>
			<SplashContainer>
				<SplashItemSearch>Enter ENS domain, a valid ETH, or BTC address</SplashItemSearch>
				<SplashItemGo>Let's Go!</SplashItemGo>
				<SplashItemConnect>Connect Wallet</SplashItemConnect>
			</SplashContainer>
			<SplashItemThird>Don't have an address? View demo.</SplashItemThird>
			<SplashItemFourth>What is DeFi?</SplashItemFourth>
		</Splash>
	);
};

// Body Container
const Splash = styled.div`
	display: flex;
	background: blue;
	flex: 8;
	flex-direction: column;
	padding: 10px;
`;

// Manage your DeFi assets and liabilities in one simple interface.
const SplashItemFirst = styled.div`
	display: flex;
	background: black;
	flex: 0.25;
	align-items: center;
	color: #fff;
	font-family: Avenir Next, Arial, sans-serif;
	margin-top: 150px;
	margin-bottom: 5px;
	font-size: 36px;
	font-weight: 600;
`;

// Get unique access to opportunities in open finance.
const SplashItemSecond = styled.div`
	display: flex;
	background: black;
	align-items: center;
	color: #9cabbb;
	font-family: Avenir Next, Arial, sans-serif;
	margin-bottom: 20px;
	font-size: 24px;
`;

// Mid-Body Container
const SplashContainer = styled.div`
	display: flex;
	flex: 0.5;
	/* margin-top: 0px; */
	margin-bottom: 20px;
`;

// Enter ENS domain, a valid ETH, or BTC address
const SplashItemSearch = styled.div`
	display: flex;
	background: #21262b;
	flex: 0.5;
	align-items: center;
	color: #fff;
	border: 1px solid #2d3237;
	font-family: Avenir Next;
	font-size: 16px;
	margin-top: 20px;
	margin-bottom: 80px;
	height: 54px;
	cursor: pointer;
`;

// Let's Go!
const SplashItemGo = styled.div`
	display: flex;
	background: linear-gradient(135deg,#784ffe,#a160fe);
	/* flex: 0.5; */
	align-items: center;
	color: #fff;
	font-family: Avenir Next;
	margin-top: 20px;
	margin-bottom: 80px;
	cursor: pointer;
`;

// Connect Wallet
const SplashItemConnect = styled.div`
	display: flex;
	background: #fff;
	/* flex: 0.5; */
	align-items: center;
	color: #141a1e;
	font-family: Avenir Next;
	margin-top: 20px;
	margin-bottom: 80px;
	cursor: pointer;
`;

// Don't have an address? View demo.
const SplashItemThird = styled.div`
	display: flex;
	background: transparent;
	/* flex: 0.5; */
	align-items: center;
	color: #fff;
	font-family: Avenir Next;
	font-weight: 500;
	margin-top: 32px;
	font-size: 14px;
	cursor: pointer;
`;

// What is DeFi?
const SplashItemFourth = styled.div`
	display: flex;
	background: transparent;
	/* flex: 0.5; */
	align-items: center;
	color: #fff;
	font-family: Avenir Next;
	font-weight: 500;
	margin-top: 32px;
	font-size: 14px;
	cursor: pointer;
	
`;


export default Body;
