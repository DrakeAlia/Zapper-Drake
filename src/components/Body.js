import React from 'react';
import styled from 'styled-components';

// Middle container for Landing Page
const Body = () => {
	return (
		<Splash>
			<SplashItemFirst>
				Manage your <SplashColor> DeFi </SplashColor> assets and liabilities in one <br></br> simple interface.
			</SplashItemFirst>
			<SplashItemSecond>Get unique access to opportunities in open finance.</SplashItemSecond>
			<SplashContainer>
				<SplashItemSearch>Enter ENS domain, a valid ETH, or BTC address</SplashItemSearch>
				<button onClick></button>
				<SplashItemGo>Let's Go!</SplashItemGo>
				const 
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

export default Body;
