import React from 'react'
import Footer from '../Components/Footer'

function Login() {
  return (
    <>
      <section className='login-section'>
        <div className="container">
          <div className="form ">
            <h1 className='text-white mb-4'>Login</h1>
            <input type="text" placeholder='Enter Email' />
            <input type="text" placeholder='Enter Email' />
            {/* <div className='d-flex '>
              <input type="checkbox" id='check' />
              <label htmlFor="check" className='text-white ps-2'>remember me</label>
            </div> */}

            <button className='btn btn-primary fs-4'>Login</button>
            <a href="" className='nav-link text-white mt-3 '>Forgot Password?</a>
          </div>
        </div>
      </section>
      <Footer />

    </>

  )
}

export default Login