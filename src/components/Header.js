import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderBox>
			<HeaderItem>Icon</HeaderItem>
			<HeaderItemZapper>Zapper</HeaderItemZapper>
			<HeaderItemBigSpace>BigSpace</HeaderItemBigSpace>
			<HeaderItemDocs>Docs</HeaderItemDocs>
			<HeaderItemTutorials>Tutorials</HeaderItemTutorials>
			<HeaderItemCommunity>Community</HeaderItemCommunity>
		</HeaderBox>
	);
};

export default Header;


const HeaderBox = styled.div`
	display: flex;
	background-color: pink;
	flex: 1;
	flex-direction: row;
	padding-top: 10px;
`;

const HeaderItem = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
    color: white;
`;
const HeaderItemZapper = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
	color: white;
`;
const HeaderItemBigSpace = styled.div`
	display: flex;
	background-color: brown;
	flex: 10;
`;
const HeaderItemDocs = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
	color: white;
`;
const HeaderItemTutorials = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
	color: white;
`;
const HeaderItemCommunity = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
	color: white;
`;


const Splash = styled.div`
	display: flex;
	background-color: blue;
	flex: 10;
`;

const FeatureList = styled.div`
	display: flex;
	background-color: green;
	flex: 10;
`;
