import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Index from './pages/index'
import Share from './pages/share'
import Navbar from './components/navbar'

function App() {
  return (
    <Router>

      <Navbar/>

      <Switch>
        <Route exact path="/">
        <Index/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/share/:id">
        <Share/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
