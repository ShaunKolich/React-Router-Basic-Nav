import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to = '/'>Home</Link>
        </div>
        <div>
        <Link to = '/about'>About</Link>
        </div>
        <div>
          <Link to = '/contact'>Contact</Link>
        </div>
      </div>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        </Switch>
    </div>
  );
};

export default Navigation;
