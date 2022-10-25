import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'
import Aboutus from './Components/About/About'
import Services from './Components/Services/Services'
import Logoperations from './Components/LogOperations/Logoperations'
import Contactus from './Components/Contactus/Contactus'
import Allposts from './Components/Renders/Allposts'
import Allprodutcs from './Components/Renders/Allproducts'
import Allprofiles from './Components/Renders/Allprofiles'

import Addpost from './Components/Adders/Addpost'
import Addproduct from './Components/Adders/Addproduct'
import Alladvertisement from './Components/Adders/Alladvertisement'
import Businessownerprofile from './Components/Businessowner/Businessownerprofile'

import Businessdetails from './Components/Businessowner/Businessdetails'
import Manageclubs from './Components/Managables/Manageclubs'
import Manageproducts from './Components/Managables/Manageproducts'

import Schooladmin from './Components/SchoolAdmins/Schooladmin'
import Schooladminclub from './Components/SchoolAdmins/Schooladminclub'
import Schooladminprofile from './Components/SchoolAdmins/Schooladminprofile'

import Superadmindashboard from './Components/Superadmin/Superadmindashboard'
import Superadminprofile from './Components/Superadmin/Superadminprofile'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">

        <Nav />
        <Switch>
          <Route path='/allposts' component={Allposts} />
          <Route path='/Allprofiles' component={Allprofiles} />
          <Route path='/Allprodutcs' component={Allprodutcs} />
          <Route path='/addproduct' component={Addproduct} />
          <Route path='/alladvertisement' component={Alladvertisement} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/addpoast' component={Addpost} />
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contactus' component={Contactus} />
          <Route path='/loginOrSingup' component={Logoperations} />
          <Route path='/businessownerprofile' exact component={Businessownerprofile} />
          <Route path='/businessdetails' exact component={Businessdetails} />
          <Route path='/manageclubs' exact component={Manageclubs} />
          <Route path='/manageproducts' exact component={Manageproducts} />
          <Route path='/Schooladmin' exact component={Schooladmin} />
          <Route path='/Schooladminclub' exact component={Schooladminclub} />
          <Route path='/Schooladminprofile' exact component={Schooladminprofile} />
          <Route path='/Superadminprofile' exact component={Superadminprofile} />
          <Route path='/Superadmindashboard' exact component={Superadmindashboard} />
          <Route path='/' exact component={Home} />

        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
