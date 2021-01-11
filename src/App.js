import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import TitleBar from './components/titleBar/index';
import MainMenu from './pages/mainMenu/index';

function App() {
  return (
    <HashRouter>
        <TitleBar />
        <Switch>
          <Route component={MainMenu} />
        </Switch>
    </HashRouter>
  );
}

export default App;
