import React from 'react';
import ReactDOM from 'react-dom';
import NavbarA from './Components/Navbar'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import FetchLatestBlock from './Components/FetchLatestBlock';
import FetchSingleBlock from './Components/FetchSingleBlock';
import FetchSingleTranblock from './Components/FetchSingleTranblock';

import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
       <div>
        <NavbarA></NavbarA>
      
        <Route exact  path="/FetchLatestBlock" component={FetchLatestBlock} />
        <Route exact  path="/FetchSingleBlock" component={FetchSingleBlock} />
        <Route exact  path="/FetchSingleTranblock" component={FetchSingleTranblock} />
      </div>
          </Router>
)
ReactDOM.render(routing, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
