import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/settings.scss';

function App():ReactElement {
  return (
    <div className="App">
      <header className="header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
