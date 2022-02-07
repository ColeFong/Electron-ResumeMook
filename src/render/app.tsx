import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Title from './title/index';

function App() {
  return (
    <Router>
      <Route path="/">
        <div>Electron + React CLI</div>
        <Title text="Start" styles={{ color: 'blue' }} />
      </Route>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
