import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const user=null;

  return (
    <div className="App">
      <Router>
        {/* if user is null then goto login else render the app with homescreen  */}
        {!user ?(  
          <LoginScreen/>

        ):(<Switch>
          <Route exact path="/">
          <HomeScreen/>
          </Route>
        </Switch>
        )}

        
      
    </Router>
    </div>
  );

      
}

export default App;
