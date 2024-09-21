import React from 'react'

import nextjs from '../assets/next.png'
import phplogo from '../assets/phplogo.png'
import htmls from '../assets/html.png'

function LatestCourse() {
  return (
    <section className='course-section'>
      <div className='container p-3'>
        <div className="row">
          <h3 className='text-center text-white mt-5'><span className='text-info'>Popular</span> Courses</h3>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="fade-up" data-aos-duration="1000">

              <div className="card-course-img">
                <div className="card-body">
                  <img src={nextjs} alt="" width={70} />
                  <p className='text-info'>ALL LEVELS</p>
                  <h4 className='mb-4'>Modern HTML & CSS From The Beginning 2.0</h4>
                </div>
                <div className="card-foot">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Get It Now</a>
                </div>
              </div>
            </div>
          </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div data-aos="fade-up" data-aos-duration="1000">
              <div className="card-course-img">
                <div className="card-body">
                  <img src={htmls} alt="" width={70} />
                  <p className='text-info'>ALL LEVELS</p>
                  <h4 className='mb-4'>Modern HTML & CSS From The Beginning 2.0</h4>
                </div>
                <div className="card-foot">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Get It Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="fade-up" data-aos-duration="1000">

              <div className="card-course-img">
                <div className="card-body">
                  <img src={phplogo} alt="" width={70} />
                  <p className='text-info'>ALL LEVELS</p>
                  <h4 className='mb-4'>Modern HTML & CSS From The Beginning 2.0</h4>
                </div>
                <div className="card-foot">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Get It Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="fade-up"data-aos-duration="1000">

              <div className="card-course-img">
                <div className="card-body">
                  <img src={nextjs} alt="" width={70} />
                  <p className='text-info'>ALL LEVELS</p>
                  <h4 className='mb-4'>Modern HTML & CSS From The Beginning 2.0</h4>
                </div>
                <div className="card-foot">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Get It Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="fade-up"data-aos-duration="1000">

              <div className="card-course-img">
                <div className="card-body">
                  <img src={htmls} alt="" width={70} />
                  <p className='text-info'>ALL LEVELS</p>
                  <h4 className='mb-4'>Modern HTML & CSS From The Beginning 2.0</h4>
                </div>
                <div className="card-foot">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Get It Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="fade-up"data-aos-duration="1000">

              <div className="card-course-img">
                <div className="card-body">
                  <img src={phplogo} alt="" width={70} />
                  <p className='text-info'>ALL LEVELS</p>
                  <h4 className='mb-4'>Modern HTML & CSS From The Beginning 2.0</h4>
                </div>
                <div className="card-foot">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Get It Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className='btn btn-primary w-100  mt-4 mb-5'>Show ALL Course</button>
      </div>
    </section>

  )
}

export default LatestCourse