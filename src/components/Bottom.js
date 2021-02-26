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


const FeatureList = styled.div`
	display: flex;
	background-color: green;
	flex: 5;
    justify-content: space-around;
    align-items: center;
`;

const FeatureListBox1 = styled.div`
	display: flex;
    flex-direction: column;
	background: #21262b;
`;

const FeatureListBox2 = styled.div`
	display: flex;
    flex-direction: column;
	background: #21262b;
`;

const FeatureListBox3 = styled.div`
	display: flex;
    flex-direction: column;
	background: #21262b;
`;

const FeatureListItemNum = styled.div`
	display: flex;
	color: #fff;
    flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 30px;
    font-weight: 500;
	margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const FeatureListItemTitle = styled.div`
	display: flex;
	color: #fff;
	flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 20px;
`;

const FeatureListItem = styled.div`
	display: flex;
	color: #9cabbb;
	flex-direction: column;
	align-items: center;
	font-family: Avenir Next,Arial,sans-serif;
	font-size: 16px;
	margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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