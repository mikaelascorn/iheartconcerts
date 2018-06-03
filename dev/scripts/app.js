import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink, browserHistory } from "react-router-dom";
import ShowItem from './ShowItem';
import JournalItem from './JournalItem';
import Homepage from './Homepage';
import WelcomePage from './WelcomePage';

class App extends React.Component {
  
  render() {
    return(
      <Router history={browserHistory}>
        <div>
          <div>
            <Route exact path="/" render={ (props) => <WelcomePage 
            router={props}/>}>
            </Route>
            <Route path='/Homepage' component={Homepage}/>
          </div> 
        </div> 
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

