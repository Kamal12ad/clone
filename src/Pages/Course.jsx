import React from 'react'
import htmlcss from '../assets/htmlcss.webp'
import js from '../assets/js.webp'
import bootstrap from '../assets/bootstrap.webp'
import django from '../assets/django.webp'
import node from '../assets/node.webp'
import nextjs from '../assets/nextjs.webp'
import phps from '../assets/php.cor.jpg'
import react from '../assets/react.jpg'
import tail from '../assets/tail.webp'
import dsa from '../assets/dsa.jpg'
import Premium from '../Components/Premium'
import Footer from '../Components/Footer'

function Course() {
  return (
    <>
      <section className='w-100  course-section2'>
        <div className="container course-con">
          <div data-aos="zoom-out-up">
            <div className="course-sec text-center">
              <h1>Course Library</h1>
              <p>Practical project-based courses that are easy to understand and
                straight to the point with NO FLUFF</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='latest-course'>
        <div className="container ">
          <div className="row ">
            <h1 className='text-white mt-5 mb-5'>Featured Courses</h1>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="card-head">
                  <img src={htmlcss} className='w-100' alt="" />
                </div>
                <div className="card-body ">
                  <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                  <hr />
                  <h4>$25</h4>
                </div>
                <div className="card-foot ">
                  <button className='btn btn-primary'>Readmore</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="card-head">
                  <img src={dsa} className='w-100' alt="" />
                </div>
                <div className="card-body ">
                  <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                  <hr />
                  <h4>$25</h4>
                </div>
                <div className="card-foot ">
                  <button className='btn btn-primary'>Readmore</button>
                </div>
              </div>
            </div>
            <div classNamecol-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="card-head">
                  <img src={js} className='w-100w-100' alt="" />
                </div>
                <div className="card-body ">
                  <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                  <hr />
                  <h4>$25</h4>
                </div>
                <div className="card-foot ">
                  <button className='btn btn-primary'>Readmore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='latest-course'>
        <div className="container">
          <h1 className='text-white mt-5 mb-5'>Featured Courses</h1>

          <div className="row mb-5">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">

              <div className="card">

                <div className="card-head">
                  <img src={htmlcss} className='w-100' alt="" />
                </div>
                <div className="card-body ">
                  <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                  <hr />
                  <h4>$25</h4>
                </div>
                <div className="card-foot ">
                  <button className='btn btn-primary'>Readmore</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="card-head">
                  <img src={js} className='w-100' alt="" />
                </div>
                <div className="card-body ">
                  <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                  <hr />
                  <h4>$25</h4>
                </div>
                <div className="card-foot ">
                  <button className='btn btn-primary'>Readmore</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="card-head">
                  <img src={dsa} className='w-100' alt="" />
                </div>
                <div className="card-body ">
                  <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                  <hr />
                  <h4>$25</h4>
                </div>
                <div className="card-foot ">
                  <button className='btn btn-primary'>Readmore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section >
      <section className='all-course'>
        <div className="container bg-white">
          <div className="row">
            <h2 className='mt-5 mb-5 text-dark'>ALL COURSE</h2>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <div className="card">
                  <div className="card-head">
                    <img src={bootstrap} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={django} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={phps} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={nextjs} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={node} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={react} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={tail} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={htmlcss} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1000">

                <div className="card">
                  <div className="card-head">
                    <img src={js} className='w-100' alt="" />
                  </div>
                  <div className="card-body ">
                    <h2 className='text-white'>Modern HTML & CSS From The Beginning 2.0</h2>
                    <hr />
                    <h4>$25</h4>
                  </div>
                  <div className="card-foot ">
                    <button className='btn btn-primary'>Readmore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Premium />
      <Footer />
    </>


  )
}

export default Course