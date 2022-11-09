
import './App.scss';
import Home from './components/Home.js';
import Logging from './components/Logging';
import HomeHeader from './components/HomeHeader';
import Register from './components/Register';
import Loggedout from './components/Loggedout';
import { BrowserRouter as Router, Route, Switch, Link as Link1 } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Home /> */}
        <Switch>
          <Route exact path="/">
            <HomeHeader />
            <Home />
          </Route>
          <Route path="/logowanie">
            <HomeHeader />
            <Logging />
          </Route>
          <Route path="/rejestracja">
            <HomeHeader />
            <Register />
          </Route>
          <Route path="/wylogowano">
            <HomeHeader />
            <Loggedout />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
