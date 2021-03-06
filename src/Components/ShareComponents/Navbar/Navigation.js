import React from 'react';
// import { Link } from 'react-router-dom';
import './Navigation.css'
 import { HashLink as Link } from 'react-router-hash-link';
import useFirebase from '../../../Pages/Firbase/UseFirbase/UseFirebase';
const Navigation = () => {
  const {admin}=useFirebase();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <p class="navbar-brand w-25 text-center  " ><span>
        <img className='imagefor' src="https://i.ibb.co/M8CyvQc/b5785a0b8b6bc0426e1c7a761458c731-removebg-preview.png" alt="" /></span> <span className='travel'>Travel</span> <span className='point'>.</span></p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:"auto",}}  class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul style={{marginLeft: "auto",}} class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li class="nav-item px-2">
            
        <Link class="nav-link linkfont" to="/Home">Home</Link>
        </li>
        <li class="nav-item px-2">
        <Link smooth class="nav-link linkfont" to="/adventure">Adventure</Link>
        </li>
       
       
        <li class="nav-item dropdown px-2">
          <a class="nav-link dropdown-toggle linkfont"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li> <Link class="nav-link linkfont" to="/resister">Resister</Link></li>
            <li> <Link class="nav-link linkfont" to="/login">Log in</Link></li>
           {
             admin &&  <li> <Link class="nav-link linkfont" to="/admin">Admin</Link></li>
           }
           
           
         
          </ul>
        </li>
        <li class="nav-item px-2">
        <Link class="nav-link linkfont" to="/about">About</Link>
        </li>
        
        <li class="nav-item px-2">
        <Link class="nav-link linkfont" to="/contact">Contact</Link>
        </li>
       
        <li class="nav-item px-2">
        <Link class="nav-link linkfont" to="/hotels">Hotels</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;