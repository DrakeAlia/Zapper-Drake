import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Bottom from './Bottom';

const App = () => {
	return (
		<Box>
			<Header />
			<Body />
            <Bottom />
		</Box>
	);
};

export default App;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;