import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './lib/requestAnim'

import Main from './Main'
import { GlobalProvider } from './components/GlobalContext'

import 'react-tippy/dist/tippy.css';

function App() {

  return <GlobalProvider>
    <Router>
      <Route component={Main} />
    </Router>
  </GlobalProvider>
}

export default App;
