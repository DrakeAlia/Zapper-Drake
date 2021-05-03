import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Splash from "./Splash";
import Docs from "./Docs";
import Community from "./Community";
import Tutorials from "./Tutorials";
import Header from "./Header";
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Box>
              <Splash />
            </Box>
          </Route>
          <Route path="/docs" component={Docs} />
          <Route path="/discord" component={Community} />
          <Route path="/crunch" component={Tutorials} />
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
};

export default App;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Token:
// 0xa9782643b047de459d37a4951a1cd7ca46aa1932
