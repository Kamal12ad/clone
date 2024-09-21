import React from 'react'

function NotifyHome() {
  return (

    <section className='notifyhome'>
      <div className='container'>
        <div className="row nofify-content">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2 className='text-white mb-4'>NOTIFY ME OF NEW COURSES</h2>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="notify-grp">
              <input type="text" placeholder='Email' />
              <button>NOTIFY ME</button>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}

export default NotifyHome