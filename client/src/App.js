import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Index from './pages/index'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
        <Index/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
