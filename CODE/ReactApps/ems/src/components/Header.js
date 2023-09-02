import { Link, useNavigate, NavLink, Outlet } from "react-router-dom";
// import './css/Header.css'
import React, { useState } from 'react';
import Person from './images/person.svg'
import navbarlogo from './images/navbarlogo.png'

const Header = ({ isLoggedIn }) => {

    const email_id = sessionStorage.getItem('email_id'); // Assuming you retrieve the email from SessionStorage

    const navigate = useNavigate();


    const handleLogout = () => {
        console.log("logged out")
        // Clear sessionStorage and navigate to the home page
        sessionStorage.clear();
        console.log(isLoggedIn);
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Use className instead of class */}
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> 4S Events{" "}
                    <img src={navbarlogo} alt="4S-Events Logo" width="30" height="30" className="d-inline-block align-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            {/* <a class="nav-link" href="#">Login</a> */}
                            <Link to="/aboutus" className="nav-link">About Us</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link to="/service" className="nav-link">Services</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Weddings</a></li>
                                <li><a class="dropdown-item" href="#">Birthday Parties</a></li>
                                {/* <li><hr class="dropdown-divider" /></li> */}
                                <li><a class="dropdown-item" href="#">Corporate Events</a></li>
                            </ul>
                        </li>


                        <li class="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>

                        {/* {isLoggedIn ? (
                            <li class="nav-item">
                                <button className="nav-link" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li class="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                            </>
                        )} */}



                        {/* <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <Link to={email_id === '4seventmgmtservices@gmail.com' ? "/adminprofile" : "/profile"} className="nav-link">
                        <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;