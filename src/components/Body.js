import React from "react";
import styled from "styled-components";
// import SearchParams from './SearchParams';

// Middle container for Landing Page //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Body = () => {
  return (
    <Splash>
      <SplashItemFirst>
        Manage your <SplashColor> DeFi </SplashColor> assets and liabilities in
        one <br></br> simple interface.
      </SplashItemFirst>
      <SplashItemSecond>
        Get unique access to opportunities in open finance.
      </SplashItemSecond>
      <SplashContainer>
        {/* <SearchParams /> */}
        <SplashItemSearch>
          Enter ENS domain, a valid ETH, or BTC address
        </SplashItemSearch>
        <SplashItemGo>Let's Go!</SplashItemGo>
        <br />
        <SplashOr>or</SplashOr>
        <SplashItemConnect>Connect Wallet</SplashItemConnect>
      </SplashContainer>
      <SplashItemThird>→ Don't have an address? View demo.</SplashItemThird>
      <SplashItemFourth>→ What is DeFi?</SplashItemFourth>
    </Splash>
  );
};


// Body Container(Splash) ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Splash = styled.div`
  display: flex;
  flex-direction: column;
  background: #141a1e;
  color: #fff;
  padding-left: 20%;
  width: 100%;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
`;


// DeFi ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashColor = styled.span`
  color: #784ffe;
  padding-right: 10px;
  padding-left: 10px;
  display: contents;
  font-size: 49px;
  font-weight: 650;
`;


// Manage your DeFi assets and liabilities in one simple interface. ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemFirst = styled.div`
  display: flex;
  background: #141a1e;
  color: #fff;
  margin-top: 150px;
  margin-bottom: 8px;
  font-size: 39px;
  font-weight: 650;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Get unique access to opportunities in open finance. ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemSecond = styled.div`
  display: flex;
  background: #141a1e;
  color: #9cabbb;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 600;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Mid-Body Container //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashContainer = styled.div`
  display: flex;
  flex: 0 0 10%;
  flex-direction: row;
  margin-top: 32px;
`;


// Enter ENS domain, a valid ETH, or BTC address ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemSearch = styled.div`
  display: flex;
  align-items: center;
  background: #21262b;
  color: #fff;
  font-size: 16px;
  width: 100%;
  min-width: 500px;
  max-width: 500px;
  margin-right: 16px;
  height: 54px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #2d3237;
  font-family: Avenir Next;
  cursor: text;
`;


// Let's Go! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemGo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #784ffe, #a160fe);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 80px;
  margin-right: 16px;
  margin: 1px;
  padding: 0 32px;
  height: 54px;
  font-family: Avenir Next;
  border-radius: 4px;
  cursor: pointer;
`;


// or ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashOr = styled.span`
  color: #fff;
  margin-right: 16px;
  padding-left: 10px;
  line-height: 58px;
  font-weight: 600;
  font-family: Avenir Next, Arial, sans-serif;
`;


// Connect Wallet ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemConnect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #141a1e;
  font-size: 16px;
  font-weight: 600;
  margin-right: 16px;
  padding: 0 32px;
  height: 54px;
  font-family: Avenir Next;
  border-radius: 4px;
  cursor: pointer;
`;


// Don't have an address? View demo. ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemThird = styled.div`
  display: flex;
  background: transparent;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  margin-top: 22px;
  height: auto;
  font-family: Avenir Next;
  border-radius: 4px;
  cursor: pointer;
`;


// What is DeFi? ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SplashItemFourth = styled.div`
  display: flex;
  background: transparent;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  margin-top: 32px;
  height: auto;
  font-family: Avenir Next;
  border-radius: 4px;
  cursor: pointer;
`;


export default Body;
