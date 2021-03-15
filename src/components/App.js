import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Bottom from './Bottom';
import Footer from './Footer';

const App = () => {
	return (
		<Box>
			<Header />
			<Body />
            <Bottom />
			<Footer />
		</Box>
	);
};

export default App;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;




// 0xa9782643b047de459d37a4951a1cd7ca46aa1932