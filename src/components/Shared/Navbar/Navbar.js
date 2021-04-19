import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light ">
                
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link me-5 active" to='/home'>Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link me-5" to='/about'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link me-5" to='/addDoctor'>Dashboard</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link me-5 text-white" to='/blog'>Blog</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link me-5 text-white" to='/dashboard/appointment'>Admin</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link me-5 text-white" href="#">Contact us</a>
                    </li>
                </ul>
                </div>
            </div>    
            </nav>
    );
};

export default Navbar;