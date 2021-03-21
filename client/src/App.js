import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage.js'
import LoginPage from './components/views/LoginPage/LoginPage'
import Register from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'


function App() {
  return (
    <Router>
      <div> 
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
          <Route exact path="/register" component={Auth(Register, false)}/>
        </Switch>
      </div>
    </Router>
  )
}



export default App
