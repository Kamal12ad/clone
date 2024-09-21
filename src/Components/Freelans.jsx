import React from 'react'

import rocket from '../assets/rocket.webp'

function Freelans() {
  return (
    <section className='freelans-section'>
      <div className='container'>
        <div className="row">
          <div className="col-12 order-2 col-sm-12 col-md-6 col-lg-6">
          <div data-aos="fade-down-right" data-aos-duration="1000">
            <div className="card-free">
              <h3>New Course</h3>
              <h2>Freelance Mastery</h2>
              <p>Brad Traversy and Kyle Prinsloo have teamed up to bring you a business-based course to show you how to create a successful freelancing business from the ground up.</p>
              <button className='btn btn-primary'>FIND OUT MORE</button>
            </div>
            </div>
          </div>
          <div className=" col-12 order-md-3 col-sm-12 col-md-6 col-lg-6">
          <div data-aos="fade-down-left" data-aos-duration="1000">
            <div className="img-free text-center mt-2">
              <img src={rocket} className='img-fluid' width={300} alt="" />
            </div>
          </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Freelans