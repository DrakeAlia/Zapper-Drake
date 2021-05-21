import React from "react";
import styled from "styled-components";

// Bottom Portion of the Landing Page //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Bottom = () => {
  return (
    <FeatureList>
      <FeatureListBox>
        <FeatureListItemNum>$1.3B+</FeatureListItemNum>
        <FeatureListItemTitle>
          Invested through our platform
        </FeatureListItemTitle>
        <FeatureListItem>Since May 2020</FeatureListItem>
      </FeatureListBox>
      <FeatureListBox>
        <FeatureListItemNum>400K+</FeatureListItemNum>
        <FeatureListItemTitle>Monitored their assets</FeatureListItemTitle>
        <FeatureListItem>Since January 2020</FeatureListItem>
      </FeatureListBox>
      <FeatureListBox>
        <FeatureListItemNum>51</FeatureListItemNum>
        <FeatureListItemTitle>DeFi platforms supported</FeatureListItemTitle>
        <FeatureListItem isLink>View the full list</FeatureListItem>
      </FeatureListBox>
    </FeatureList>
  );
};

// Bottom Container //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FeatureList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #141a1e;
  padding: 170px 0;
  -webkit-font-smoothing: antialiased;
`;

// Container 1 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FeatureListBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #21262b;
  border-radius: 4px;
  padding: 32px 0;
  padding-left: 50px;
  padding-right: 50px;
`;

// Number //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FeatureListItemNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 21px;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Description //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FeatureListItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Avenir Next, Arial, sans-serif;
`;

// Date/View the full list //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const FeatureListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9cabbb;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 0;
  text-decoration: ${(props) => (props.isLink ? "underline" : "none")};
  font-family: Avenir Next, Arial, sans-serif;
  cursor: pointer;
`;

export default Bottom;
