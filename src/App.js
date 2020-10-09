import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Index';
import SignInPage from './Pages/Singin';





function App() {
  return (
    <Router >
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/sign-in' component={SignInPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
