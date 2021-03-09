import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import { NoMatch } from './components/NoMatch'
import About from './components/About';
import { Footer, NavigationBar} from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


require('dotenv').config()

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={About}/>
          {/* <Route exact path='/signin'>
            {isLoggedIn ? <Redirect to="/"/> : <Signin/>}
          </Route>  */}
          <Route component={NoMatch} />
        </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
