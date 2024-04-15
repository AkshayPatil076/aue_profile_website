import React from 'react'
import './style.css'
import icon11 from './image/f1.svg'
import icon22 from './image/features-icon-2.svg'
import icon33 from './image/features-icon-3.svg'
import icon44 from './image/features-icon-4.svg'

export default function About() {
  return (
    <>
    
    {/* <!-- 
        - #ABOUT
      --> */}

      <section className="section about" id="about">
        <div className="container">

          <h2 className="h2 section-title">What We Do</h2>

          <p className="section-text">
          We provide the different type of services acording  to needs and help the small new startup for grow in the market over the internet.
          </p>

          <ul className="about-list">

            <li>
              <div className="about-card about-card-1">

                <figure className="card-banner">
                  <img src={icon22} width="94" height="94" loading="lazy"
                    alt="Automated Ticket Routing" />
                </figure>

                <div className="card-content">

                  <h3 className="h3">
                    <a href="#" className="card-title">Website Development</a>
                  </h3>

                  <p className="card-text">
                  creating a professional Website .
                  </p>

              

                </div>

              </div>
            </li>

            <li>
              <div className="about-card about-card-2">

                <figure className="card-banner">
                  <img src={icon11} width="94" height="94" loading="lazy"
                    alt="Workflow Automation" />
                </figure>

                <div className="card-content">

                  <h3 class="h3">
                    <a href="#" className="card-title">Business Templeate</a>
                  </h3>

                  <p className="card-text">
                  Create an beautiful and attractive Business Template.
                  </p>

              

                </div>

              </div>
            </li>

            <li>
              <div className="about-card about-card-3">

                <figure className="card-banner">
                  <img src={icon33} width="94" height="94" loading="lazy"
                    alt="Automated Callback" />
                </figure>

                <div className="card-content">

                  <h3 className="h3">
                    <a href="#" className="card-title">Logo Design</a>
                  </h3>

                  <p className="card-text">
                  Create an beautiful and attractive Business Logo .
                  </p>

               

                </div>

              </div>
            </li>

            <li>
              <div className="about-card about-card-4">

                <figure className="card-banner">
                  <img src={icon44} width="94" height="94" loading="lazy"
                    alt="Customer Feedback Surveys" />
                </figure>

                <div className="card-content">

                  <h3 className="h3">
                    <a href="#" className="card-title">Digital Advertising</a>
                  </h3>

                  <p className="card-text">
                  We provide Digital Advertising to grow business and reach the target audience.
                  </p>

               

                </div>

              </div>
            </li>

          </ul>

   

        </div>
      </section>



    </>
  )
}
