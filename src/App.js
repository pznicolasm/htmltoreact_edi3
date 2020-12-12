import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Servicio from './pages/Servicio';
import Clientes from './pages/Clientes';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div>
        <Router>

          <Header/>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/servicio' component={Servicio} />
              <Route path='/clientes' component={Clientes} />
              <Route path='/footer' component={Footer} />
            </Switch>

          <Footer/>

        </Router>
    </div>
  )
}

export default App;
