import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import TitleBar from './components/titleBar/index';
import MainMenu from './pages/mainMenu/index';

function App() {
  return (
    <Router>
      <div>
        <TitleBar />
        <MainMenu />
      </div>
    </Router>
  );
}

export default App;
