import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">flipprr</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav w-100">
              <a class="nav-link " href="#">Features</a>
              <a class="nav-link" href="#">How it works</a>
              <a class="nav-link" href="#">Contact</a>


            </div>
            <div id='menu_btn_div' >
              <button className='btn' id='menu_btn_1' >Partner Login</button>
              <button id='menu_btn_2'>Get the App</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;