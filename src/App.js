import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import Aboutus from './Components/About/About'
import Services from './Components/Services/Services'
import Logoperations from './Components/LogOperations/Logoperations'
import Contactus from './Components/Contactus/Contactus'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">

        <Nav />
        <Switch>
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contactus' component={Contactus} />
        <Route path='/loginOrSingup' component={Logoperations} />

        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
