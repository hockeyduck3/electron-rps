import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import TitleBar from './components/titleBar/index'

function App() {
  return (
    <Router>
      <div>
        <TitleBar />
      </div>
    </Router>
  );
}

export default App;
