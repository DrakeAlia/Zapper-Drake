import React from 'react';
import styled from 'styled-components';
import banner from '../media/download4.png';

const Header = () => {
	return (
		<HeaderBox>
			<HeaderImg src={banner}></HeaderImg>
			<HeaderItemZapper>Zapper</HeaderItemZapper>
			<HeaderItemBigSpace></HeaderItemBigSpace>
			<HeaderItemDocs>Docs</HeaderItemDocs>
			<HeaderItemTutorials>Tutorials</HeaderItemTutorials>
			<HeaderItemCommunity>Community</HeaderItemCommunity>
		</HeaderBox>
	);
};

export default Header;

// Header Container 
const HeaderBox = styled.div`
	display: flex;
	background: #141a1e;
	flex: 1;
	flex-direction: row;
	height: 80px;
	line-height: 80px;
	align-items: center;
	-webkit-font-smoothing: antialiased;
`;

// Zapper Icon
const HeaderImg = styled.img`
	display: flex;
	background: #141a1e;
	color: #fff;
	margin-inline-start: 10px;
	width: 50px;
`;

{/* <path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path> */}

// Zapper
const HeaderItemZapper = styled.div`
	display: flex;
	/* background: blueviolet; */
	color: #fff;
	font-size: 20px;
    font-weight: 650;
    margin-top: 2px;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

// BigSpace
const HeaderItemBigSpace = styled.div`
	display: flex;
	background:  #fff;
	flex: 45;
	/* border: 5px solid purple; */
`;

// Docs
const HeaderItemDocs = styled.div`
	display: flex;
	/* background: blue; */
	color: #fff;
	font-weight: 650;
	margin: 0 16px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

// Tutorials
const HeaderItemTutorials = styled.div`
	display: flex;
	/* background: turquoise; */
	color: #fff;
	font-weight: 650;
	margin: 0 16px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;

// Community
const HeaderItemCommunity = styled.div`
	display: flex;
	/* background: tomato; */
	color: #fff;
	font-weight: 650;
	margin: 0 16px;
	margin-inline-end: 30px;
	font-family: Avenir Next,Arial,sans-serif;
	cursor: pointer;
`;


