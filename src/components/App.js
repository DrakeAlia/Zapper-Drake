import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Splash from "./Splash";
import Docs from "./Docs";
import Community from "./Community";
import Tutorials from "./Tutorials";


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
          <Route path="/docs" component={Docs} />
		  <Route path="/discord" component={Community} />
		  <Route path="/crunch" component={Tutorials} />
            <Box>
              <Splash />
            </Box>
          </Route>
        </Switch>
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

// 0xa9782643b047de459d37a4951a1cd7ca46aa1932
