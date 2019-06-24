import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './lib/requestAnim'

import Main from './Main'
import 'react-tippy/dist/tippy.css';

function App() {

  return <Router><Route component={Main} /></Router>;
}

export default App;
