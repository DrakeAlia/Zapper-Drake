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

const Splash = styled.div`
	display: flex;
	background: blue;
	flex: 8;
	flex-direction: column;
	padding: 10px;
`;

const SplashItemFirst = styled.div`
	display: flex;
	background: black;
	flex: 0.5;
	align-items: center;
	color: #fff;
	font-family: Avenir Next, Arial, sans-serif;
	margin-top: 90px;
	margin-bottom: 5px;
	font-size: 36px;
	font-weight: 600;
`;

const SplashItemSecond = styled.div`
	display: flex;
	background: black;
	align-items: center;
	color: #9cabbb;
	font-family: Avenir Next, Arial, sans-serif;
	margin-bottom: 20px;
	font-size: 24px;
`;

const SplashContainer = styled.div`
	display: flex;
	flex: 0.5;
	/* margin-top: 0px; */
	margin-bottom: 20px;
`;

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
`;

const SplashItemGo = styled.div`
	display: flex;
	background: linear-gradient(135deg,#784ffe,#a160fe);
	/* flex: 0.5; */
	align-items: center;
	color: #fff;
	font-family: Avenir Next;
	margin-top: 20px;
	margin-bottom: 80px;
`;

const SplashItemConnect = styled.div`
	display: flex;
	background: #fff;
	/* flex: 0.5; */
	align-items: center;
	color: #141a1e;
	font-family: Avenir Next;
	margin-top: 20px;
	margin-bottom: 80px;
`;

const SplashItemThird = styled.div`
	display: flex;
	background: black;
	/* flex: 0.5; */
	align-items: center;
	color: #fff;
	font-family: Avenir Next;
`;

const SplashItemFourth = styled.div`
	display: flex;
	background: black;
	/* flex: 0.5; */
	align-items: center;
	color: #fff;
	font-family: Avenir Next;
`;


export default Body;
