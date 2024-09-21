import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
function Navbar() {
  return (
    <>
    
      <nav class="navbar navbar-expand-lg bg-black text-white ps-5 pe-5">
        <div class="container-fluid">
          <a href=""><img src={logo} width={80} alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto gap-4">
              <Link class="nav-link active text-white fs-5" aria-current="page" to={'/home'}>Home</Link>
              <Link class="nav-link text-white fs-5" to={'/course'}>Course</Link>
              <Link class="nav-link text-white fs-5" to={'/faq'}>FAQ</Link>
              <Link class="nav-link text-white fs-5" to={'/login'}>Login</Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar