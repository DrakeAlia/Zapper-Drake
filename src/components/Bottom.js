import React from 'react';
import styled from 'styled-components';

const Bottom = () => {
    return (
        <FeatureList>
				<FeatureListBox1>
					<FeatureListItemNum>$1.3B+</FeatureListItemNum>
                    <FeatureListItemTitle>Invested through our platform</FeatureListItemTitle>
                    <FeatureListItem>Since May 2020</FeatureListItem>
				</FeatureListBox1>
				<FeatureListBox2>
					<FeatureListItemNum>400K+</FeatureListItemNum>
                    <FeatureListItemTitle>Monitored their assets</FeatureListItemTitle>
                    <FeatureListItem>Since January 2020</FeatureListItem>
				</FeatureListBox2>
				<FeatureListBox3>
					<FeatureListItemNum>51</FeatureListItemNum>
                    <FeatureListItemTitle>DeFi platforms supported</FeatureListItemTitle>
                    <FeatureListItem isLink>View the full list</FeatureListItem>
				</FeatureListBox3>
			</FeatureList>
    );
};

// Bottom Container
const FeatureList = styled.div`
	display: flex;
	background: #141a1e;
	flex-direction: row;
	flex: 6;
    justify-content: space-around;
    align-items: center;
`;

const FeatureListBox1 = styled.div`
	display: flex;
	background: #21262b;
    flex-direction: column;
	border-radius: 4px;
	padding: 32px 0;
	border: 5px solid green;
`;

const FeatureListBox2 = styled.div`
	display: flex;
	background: #21262b;
    flex-direction: column;
	border-radius: 4px;
	padding: 32px 0;
	border: 5px solid teal;
`;

const FeatureListBox3 = styled.div`
	display: flex;
	background: #21262b;
    flex-direction: column;
	border-radius: 4px;
	padding: 32px 0;
	border: 5px solid coral;
`;

// Number
const FeatureListItemNum = styled.div`
	display: flex;
	color: #fff;
    flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 30px;
    font-weight: 500;
	margin-top: 20px;
`;

// Description
const FeatureListItemTitle = styled.div`
	display: flex;
	color: #fff;
	flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 20px;
	margin-top: 8px;
`;

// Date/View the full list
const FeatureListItem = styled.div`
	display: flex;
	color: #9cabbb;
	flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 16px;
	padding: 10px;
	text-decoration: ${props => props.isLink ? "underline" : "none" };
`;

export default Bottom;









// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};

// font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// render(
//   <div>
//     <Button>Normal</Button>
//     <Button primary>Primary</Button>
//   </div>
// );