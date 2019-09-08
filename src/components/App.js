import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import SummonerSearch from './SummonerSearch';
import LiveMatch from './LiveMatch.js';
import NotesPage from './NotesPage';

function App() {

  return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
               <Route path='/' exact component={SummonerSearch} />
               <Route path='/livematch' exact component={LiveMatch} />
               <Route path='/notes/:name' exact component={NotesPage} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
