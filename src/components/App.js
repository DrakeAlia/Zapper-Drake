import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';


const App = () => {
	return (
		<Box>
			<Header />
            <Body />
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

const FeatureList = styled.div`
	display: flex;
	background-color: green;
	flex: 10;
`;
