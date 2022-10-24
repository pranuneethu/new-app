import React from 'react'
import { Link } from 'react-router-dom'




function Nav() {

    return (
        <div >
            <div id="navbar">
                <nav className="navbar-container nav-con">
                    {/* <a href="" className="home-link"> */}
                    <ul className="navbar-links">
                        <li></li>
                        <li className="navbar-item navbar-link">  Website Name</li>

                    </ul>
                    {/* //</nav></a> */}
                    <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu"
                        aria-expanded="false">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div id="navbar-menu" aria-labelledby="navbar-toggle">
                        <ul className="navbar-links">
                            <li></li>
                            <Link to='/'>
                                <li className="navbar-item navbar-link">Home</li></Link>
                            <Link to='/aboutus'>
                                <li className="navbar-item navbar-link">About</li></Link>
                            <Link to='/services'>
                                <li className="navbar-item navbar-link">Services</li></Link>
                            <Link to='/contactus'>
                                <li className="navbar-item navbar-link">Contact</li></Link>
                            <Link to='/loginOrSingup'>
                                <li className="navbar-item navbar-link">Login/SignUp</li></Link>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Nav;