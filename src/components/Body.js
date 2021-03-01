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
	background-color: blue;
	flex: 10;
	flex-direction: column;
	padding: 10px;
`;

const SplashItemFirst = styled.div`
	display: flex;
	background-color: black;
	flex: 1;
	flex-direction: column;
	color: #fff;
	font-family: Avenir Next,Arial,sans-serif;
	margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
	font-size: 36px;
    font-weight: 600;
`;

const SplashItemSecond = styled.div`
	display: flex;
	background-color: black;
	flex: 1;
	flex-direction: column;
	color: #9cabbb;
	font-family: Avenir Next,Arial,sans-serif;
	margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const SplashItemThird = styled.div`
	display: flex;
	background-color: black;
	flex: 1;
	flex-direction: column;
	color: #fff;
	font-family: Avenir Next;
`;

const SplashItemFourth = styled.div`
	display: flex;
	background-color: cyan;
	flex: 1;
	flex-direction: column;
	color: #fff;
	font-family: Avenir Next;
`;

const SplashContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
    padding: 10px;
`;

const SplashItemSearch = styled.div`
	display: flex;
	background-color: black;
	background: #21262b;
	flex: 1;
	flex-direction: row;
	color: #fff;
	font-family: Avenir Next;
`;

const SplashItemGo = styled.div`
	display: flex;
	background-color: pink;
	flex: 1;
	flex-direction: row;
	color: #fff;
	font-family: Avenir Next;
`;

const SplashItemConnect = styled.div`
	display: flex;
	background: #fff;
	flex: 1;
	flex-direction: row;
	color: #141a1e;
	font-family: Avenir Next;
`;

export default Body;
