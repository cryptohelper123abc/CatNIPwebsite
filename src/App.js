import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { 
  Grommet,
  ResponsiveContext,
} from 'grommet';

//components
import Information from "./views/Information";
import Buy from "./views/Buy";
import Airdrop from "./views/Airdrop";
import Socials from "./views/Socials";
import Team from "./views/Team";
import Home from "./views/Home";
import Game from './views/Game';
import Bundles from "./views/Bundles";
import DXSale from "./views/DXSale";
import Audits from "./views/Audits";
import './css/App.css';

const theme = {
  global: {
    colors: {
      text: '#ffffff',
      paragraph: '#ffffff',
      brand: '#ffccff',
      yellow: '#ffff00'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};


const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => (
          <Router>
            <Switch>
              <Route path="/" exact ><Home sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/game" exact ><Game sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/info" exact ><Information sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/buy" exact ><Buy sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/airdrop" exact ><Airdrop sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/socials" exact ><Socials sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/team" exact ><Team sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/bundles" exact ><Bundles sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/dxsale" exact ><DXSale sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
              <Route path="/audits" exact ><Audits sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/></Route>
            </Switch>
          </Router>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
