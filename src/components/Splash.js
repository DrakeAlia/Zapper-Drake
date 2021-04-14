import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Bottom from './Bottom';
import Footer from './Footer';
import Body from './Body';

const Splash = () => {
    return (
            <Box>
                <Header />
                <Body />
                <Bottom />
                <Footer />
            </Box>
        );
    };

const Box = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

export default Splash; 