import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';

const App = () => {
	return (
		<Box>
			<Header />
			<Body />
			<FeatureList>
				<FeatureListBox1>
					<FeatureListItem>1</FeatureListItem>
				</FeatureListBox1>
				<FeatureListBox2>
					<FeatureListItem>2</FeatureListItem>
				</FeatureListBox2>
				<FeatureListBox3>
					<FeatureListItem>3</FeatureListItem>
				</FeatureListBox3>
			</FeatureList>
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

const FeatureListBox1 = styled.div`
	display: flex;
    flex-direction: column;
`;

const FeatureListBox2 = styled.div`
	display: flex;
`;

const FeatureListBox3 = styled.div`
	display: flex;
`;

const FeatureListItem = styled.div`
	display: flex;
	background-color: green;
	flex: 2;
	padding: 10px;
`;
