import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Technologies from './Components/Technologies';
import NavItem from './Interfaces/INav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/index.scss';



export const navItems: NavItem[] = [
  {name:"Home", link:"/"}, 
  {name:"Informations",link:"/informations"},
  {name:"Technologies", link:"/competences"}, 
  {name:"CV",link:"/CV"}, 
  {name:"A Propos", link:"/about"}
];

function App():ReactElement {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/competences" component={Technologies}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
