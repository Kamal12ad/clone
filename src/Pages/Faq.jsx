import React from "react";
import faq from "../assets/faq.webp";
import Footer from "../Components/Footer";

function Faq() {
  return (
    <>
      <section className="faq">
        <div className="container d-flex justify-content-center  text-white">
          <div className="content-faq text-center mt-5">
            <h2 className="text-white mt-5">FAQ</h2>
            <h1>Frequently Asked Questions</h1>
            <img src={faq} className="img-fluid" width={300} alt="" />
            <p className="">
              If you have a question, feel free to email
              support@traversymedia.com
            </p>
          </div>
        </div>
      </section>
      <section className="accodian">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button bg-black text-white fs-4 "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How do I sign up?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-black text-white fs-4">
                      <strong>
                        Account creation happens when you purchase a course or a
                        membership. You will be prompted to create a password in
                        the process. Then you can log in with your email and
                        that password. If you bought a course and for some
                        reason, you are not asked to enter a password, be sure
                        to email support@traversymedia.com and include the email
                        address that you used to register and you will get a
                        password reset link. Sometimes this happens if the
                        payment is pending. There is no "sign up" link because
                        there is no reason to have
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button bg-black text-white fs-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do I access the premium docs?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-black text-white fs-4">
                      <strong>
                        The Modern JS course includes in-depth written
                        documentation for each video. You can find them in the
                        lesson labeled "Premium Docs", There is a download link
                        below the video.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button bg-black text-white fs-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I access the Discord server?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-black text-white fs-4">
                      <strong>
                        f you purchase a course or a membership, you will get an
                        email with the invite link. If you purchase a monthly or
                        yearly membership, be sure to DM me and let me know so
                        that I can add you to the VIP role.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button bg-black text-white fs-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Do you offer support?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-black text-white fs-4">
                      <strong>
                        Yes, we have q/a helpers like Will and Prateek who check
                        Discord to help with any problems. We also check
                        comments within the video lessons. We will try to get to
                        your question in a timely manner, but please be patient.
                        The Discord community was also created to have a place
                        where students can help one another, so don't be shy
                        when it comes to helping other people.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button bg-black text-white fs-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Will courses stay up to date?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-black text-white fs-4">
                      <strong>
                        Yes, I try and keep courses up to date, but please
                        understand that it takes a lot of work and I don't just
                        throw in a couple of videos and call it an update.
                        Sometimes I will create a new course with new projects
                        and retire the old one. If you purchased a retired
                        course within six months of the new course being
                        released, email support@traversymedia.com, and we would
                        send you a free code for the new course.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button bg-black text-white fs-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Where do I access my courses?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body bg-black text-white fs-4">
                      <strong>
                        When you purchase a course, you will be asked to create
                        a password. You should automatically be logged in, but
                        if you are not, log in via the form. Once you are logged
                        in, click on the icon on the top right and click on "My
                        Library". Any course that you purchase will show up
                        here. If you are a Pro or VIP member, you will see all
                        courses here.
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Faq;
