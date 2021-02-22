import React from 'react';
import styled from 'styled-components';
import Header from './Header';


const App = () => {
	return (
		<Box>
			<Header />
			<Splash>
                <SplashItem>Manage your DeFi assets and liabilities in one simple interface.</SplashItem>
                <SplashItem>Get unique access to opportunities in open finance.</SplashItem>
                <SplashItemSearch>3</SplashItemSearch>
                <SplashItem>4</SplashItem>
                <SplashItem>5</SplashItem>
                <SplashItem>Don't have an address? View demo.</SplashItem>
                <SplashItem>What is DeFi?</SplashItem>
            </Splash>
			<FeatureList>feature</FeatureList>
		</Box>
	);
};

export default App;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Splash = styled.div`
	display: flex;
	background-color: blue;
    flex-direction: column;
	flex: 10;
    padding: 10px;
`;

const SplashItem = styled.div`
	display: flex;
    flex-direction: column;
	background-color: blue;
	flex: 1;
    color: white;
`;

const SplashItemSearch = styled.div`
	display: flex;
    flex-direction: row;
	background-color: blue;
	flex: 1;
    color: white;
`;

const FeatureList = styled.div`
	display: flex;
	background-color: green;
	flex: 10;
`;
