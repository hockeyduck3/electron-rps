import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import TitleBar from './components/titleBar/index';
import MainMenu from './pages/mainMenu/index';
import Game from './pages/game/index';

function App() {
  return (
    <HashRouter>
      <TitleBar />
      <Switch>
        <Route exact path={'/game'} component={Game} />
        <Route component={MainMenu} />
      </Switch>
    </HashRouter>
  );
}

export default App;
