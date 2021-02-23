import React from 'react';
import styled from 'styled-components';

const Bottom = () => {
    return (
        <FeatureList>
				<FeatureListBox1>
					<FeatureListItem>$1.3B+</FeatureListItem>
                    <FeatureListItem>Invested through our platform</FeatureListItem>
                    <FeatureListItem>Since May 2020</FeatureListItem>
				</FeatureListBox1>
				<FeatureListBox2>
					<FeatureListItem>400K+</FeatureListItem>
                    <FeatureListItem>Monitored their assets</FeatureListItem>
                    <FeatureListItem>Since January 2020</FeatureListItem>
				</FeatureListBox2>
				<FeatureListBox3>
					<FeatureListItem>51</FeatureListItem>
                    <FeatureListItem>DeFi platforms supported</FeatureListItem>
                    <FeatureListItem>View the full list</FeatureListItem>
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
`;

const FeatureListBox2 = styled.div`
	display: flex;
    flex-direction: column;
`;

const FeatureListBox3 = styled.div`
	display: flex;
    flex-direction: column;
`;

const FeatureListItem = styled.div`
	display: flex;
	background-color: green;
	flex: 2;
	padding: 10px;
    justify-content: center;
`;

export default Bottom;