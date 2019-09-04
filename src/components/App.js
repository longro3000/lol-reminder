import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import SummonerSearch from './SummonerSearch';
import LiveMatch from './LiveMatch.js';

function App() {

  return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
               <Route path='/' exact component={SummonerSearch} />
               <Route path='/livematch' exact component={LiveMatch} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
