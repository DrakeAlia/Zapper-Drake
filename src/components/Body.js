import React from 'react';
import styled from 'styled-components';

const Body = () => {
	return (
		<Splash>
			<SplashItem>Manage your DeFi assets and liabilities in one simple interface.</SplashItem>
			<SplashItem>Get unique access to opportunities in open finance.</SplashItem>
			<SplashContainer>
				<SplashItemSearch>Enter ENS domain, a valid ETH, or BTC address</SplashItemSearch>
				<SplashItemGo>Let's Go!</SplashItemGo>
				<SplashItemConnect>Connect Wallet</SplashItemConnect>
			</SplashContainer>
			<SplashItem>Don't have an address? View demo.</SplashItem>
			<SplashItem>What is DeFi?</SplashItem>
		</Splash>
	);
};

const Splash = styled.div`
	display: flex;
	background-color: blue;
	flex: 10;
	flex-direction: column;
	padding: 10px;
`;

const SplashItem = styled.div`
	display: flex;
	background-color: blue;
	flex: 1;
	flex-direction: column;
	color: white;
`;

const SplashContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
    padding: 10px;
`;

const SplashItemSearch = styled.div`
	display: flex;
	background-color: yellow;
	flex: 1;
	flex-direction: row;
	color: black;
`;

const SplashItemGo = styled.div`
	display: flex;
	background-color: pink;
	flex: 1;
	flex-direction: row;
	color: black;
`;

const SplashItemConnect = styled.div`
	display: flex;
	background-color: white;
	flex: 1;
	flex-direction: row;
	color: black;
`;

export default Body;
