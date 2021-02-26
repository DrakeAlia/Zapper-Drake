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
	flex: 1;
	color: inherit;
	font-family: Avenir Next,Arial,sans-serif;
`;

const HeaderItemZapper = styled.div`
	display: flex;
	background: green;
	flex: 1;
	color: #fff;
	font-size: 20px;
    font-weight: 600;
    margin-top: 2px;
	font-family: Avenir Next,Arial,sans-serif;
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
	color: #fff;
	font-family: Avenir Next,Arial,sans-serif;

`;

const HeaderItemTutorials = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
	color: #fff;
	font-family: Avenir Next,Arial,sans-serif;

`;

const HeaderItemCommunity = styled.div`
	display: flex;
	background-color: brown;
	flex: 1;
	color: #fff;
	font-family: Avenir Next,Arial,sans-serif;
`;


