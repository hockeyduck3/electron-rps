import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import TitleBar from './components/titleBar/index';
import MainMenu from './pages/mainMenu/index';
import Selection from './pages/selection/index';

function App() {
  const [loaded, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    // eslint-disable-next-line
  }, []);

  return (
    <HashRouter>
      <TitleBar />
      <Switch>
        <Route exact path={'/selection'} component={Selection} />
        <Route render={() => (
          <MainMenu loaded={loaded} />
        )} />
      </Switch>
    </HashRouter>
  );
}

export default App;
