import React from 'react'
import Navbar from '../Components/Navbar'
import NotifyHome from '../Components/NotifyHome'
import LatestCourse from '../Components/LatestCourse'
import Premium from '../Components/Premium'
import Freelans from '../Components/Freelans'
import Onyoutube from '../Components/Onyoutube'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <section className='Home'>
        <div className="container d-flex justify-content-center align-item-center">


          <div className="content">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <h5>Traversy Media</h5>
              <h1>Web Development Courses <span style={{ color: 'rgb(30, 101, 254)' }}>ForEveryone</span></h1>
              <p>Practical project-based courses that are easy to understand and
                straight to the point with NO FLUFF</p>
              <button>Start LEarning</button>
            </div>
            <div data-aos="fade-up"data-aos-duration="1000">
            <div className="course-hours-student">
              <div className="course-item">
                <i class="fa-solid fa-graduation-cap"></i>
                <h2>15+</h2>
                <h4>Course</h4>
              </div>
              <div className="course-item">
                <i class="fa-solid fa-clock"></i>
                <h2>250+</h2>
                <h4>Hours of content</h4>
              </div>
              <div className="course-item">
                <i class="fa-solid fa-users"></i>
                <h2>500K</h2>
                <h4>Students</h4>
              </div>
            </div>
            </div>
          
          </div>


        </div>
      </section>
      <NotifyHome />
      <LatestCourse />
      <Premium />
      <Freelans />
      <Onyoutube />
      <Footer />
    </>
  )
}

export default Home