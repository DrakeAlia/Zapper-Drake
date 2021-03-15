import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderBox>
			<HeaderItem>Icon</HeaderItem>
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
	background: #141a1e;;
	flex: 1;
	flex-direction: row;
	height: 80px;
	align-items: center;
`;

// Icon
const HeaderItem = styled.div`
	display: flex;
	background: #141a1e;;
	color: #fff;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// Zapper
const HeaderItemZapper = styled.div`
	display: flex;
	/* background: blueviolet; */
	color: #fff;
	font-size: 20px;
    font-weight: 600;
    margin-top: 2px;
	margin-inline-start: 10px;
	font-family: Avenir Next,Arial,sans-serif;
`;

// BigSpace
const HeaderItemBigSpace = styled.div`
	display: flex;
	background:  #fff;;
	flex: 45;
	/* border: 5px solid purple; */
`;

// Docs
const HeaderItemDocs = styled.div`
	display: flex;
	/* background: blue; */
	color: #fff;
	font-weight: 500;
	margin: 0 16px;
	font-family: Avenir Next,Arial,sans-serif;

`;

// Tutorials
const HeaderItemTutorials = styled.div`
	display: flex;
	/* background: turquoise; */
	color: #fff;
	font-weight: 500;
	margin: 0 16px;
	font-family: Avenir Next,Arial,sans-serif;

`;

// Community
const HeaderItemCommunity = styled.div`
	display: flex;
	/* background: tomato; */
	color: #fff;
	font-weight: 500;
	margin: 0 16px;
	margin-inline-end: 30px;
	font-family: Avenir Next,Arial,sans-serif;
`;


