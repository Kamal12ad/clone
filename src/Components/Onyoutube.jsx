import React from 'react'

import laptop from '../assets/laptop.webp'

function Onyoutube() {
  return (
    <section className='onyoutube-section  bg-black'>
      <div className='container'>
        <div className="row pb-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div data-aos="fade-right"

              data-aos-duration="1000">
              <div className="lap-img">
                <img src={laptop} className='img-fluid mb-3 mt-4' alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-white d-flex justify-content-center flex-column ">
            <div data-aos="fade-left"

              data-aos-duration="1000">
              <h1>Traversy Media on YouTube</h1>
              <p>Our YouTube channel has over 2 million subscribers with 1000+ free tutorials and crash courses
              </p>
              <button className='btn btn-primary w-50'>VIEW CHANNEL</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Onyoutube