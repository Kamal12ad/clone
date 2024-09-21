import React from 'react'

function Premium() {
  return (
    <section className='member-section '>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="zoom-out-right" data-aos-duration="1000">
              <div className="premium-member">
                <h2>Single-Course</h2>
                <h3>$25/Course</h3>
                <h4>Buy once, own it forever</h4>
                <ul>
                  <li><i class="fa-regular fa-square-check"></i>Purchase a Specific Course</li>
                  <li><i class="fa-regular fa-square-check"></i>Lifetime Course Access</li>
                  <li><i class="fa-regular fa-square-check"></i>Full HD Video & HQ Audio</li>
                  <li><i class="fa-regular fa-square-check"></i>Extra course attachments & exercises</li>
                  <li><i class="fa-regular fa-square-check"></i>Certificate of Completion</li>
                  <li><i class="fa-regular fa-square-check"></i>Access To Discord Community</li>
                  <li><i class="fa-regular fa-square-check"></i>Risk-free: 15 Days Refund Period</li>
                </ul>
                <button className='btn btn-primary w-50'>buy</button>
              </div>
            </div>

          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="zoom-out" data-aos-duration="1000">

              <div className="premium-member bg-white ">
                {/* <h2>Single-Course</h2> */}
                <h4>Single-course</h4>
                <h2>$25/Course</h2>
                <h4>Buy once, own it forever</h4>
                <ul>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Purchase a Specific Course</li>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Lifetime Course Access</li>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Full HD Video & HQ Audio</li>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Extra course attachments & exercises</li>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Certificate of Completion</li>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Access To Discord Community</li>
                  <li className='text-dark'><i class="fa-regular fa-square-check"></i>Risk-free: 15 Days Refund Period</li>
                </ul>
                <button className='btn btn-primary w-50'>buy</button>
              </div>
            </div>

          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div data-aos="zoom-out-left" data-aos-duration="1000">

              <div className="premium-member bg-dark">
                <h2>Single-Course</h2>
                <h3>$25/Course</h3>
                <h4>Buy once, own it forever</h4>
                <ul>
                  <li><i class="fa-regular fa-square-check"></i>Purchase a Specific Course</li>
                  <li><i class="fa-regular fa-square-check"></i>Lifetime Course Access</li>
                  <li><i class="fa-regular fa-square-check"></i>Full HD Video & HQ Audio</li>
                  <li><i class="fa-regular fa-square-check"></i>Extra course attachments & exercises</li>
                  <li><i class="fa-regular fa-square-check"></i>Certificate of Completion</li>
                  <li><i class="fa-regular fa-square-check"></i>Access To Discord Community</li>
                  <li><i class="fa-regular fa-square-check"></i>Risk-free: 15 Days Refund Period</li>
                </ul>
                <button className='btn btn-primary w-50'>buy</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Premium