import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/cart/Cart';
import Products from './components/Products';
import NavComponent from './components/Navbar';
import Footer from './components/Footer';
//import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
      <Router>
        <NavComponent />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/products'>
            <Products />
          </Route>

        </Switch>
        <Footer />
      </Router>

  )
}

export default App