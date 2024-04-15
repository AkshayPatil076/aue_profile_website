import React from 'react'
import './style.css'
import icon1 from './image/service-1.gif'
import icon2 from './image/service-2.gif'
import icon3 from './image/service-3.gif'

export default function Service() {
  return (
    <>
              {/* <!-- 
        - #SERVICE
      --> */}

      <section className="section service" id="services">
        <div className="container">

          <h2 className="h2 section-title">Our Solutions For You</h2>

          <p className="section-text">
           We provide the different type of Solutions acording needs and help the small new startup for grow in the market over the internet.
          </p>

          <ul className="service-list">

            <li>
              <div className="service-card">

                <figure className="card-banner">
                  <img src={icon1} width="728" height="344" loading="lazy" alt="support"
                    className="w-100" />
                </figure>

                <div className="card-content">

                  <h3 className="h3">
                    <b href="#" className="card-title">Website Development</b>
                  </h3>

                  <p className="card-text">
                  Create Your own business website platform to make your business grow .
                  </p>

    

                </div>

              </div>
            </li>

            <li>
              <div className="service-card">

                <figure className="card-banner">
                  <img src={icon2} width="728" height="344" loading="lazy" alt="Engagement"
                    className="w-100" />
                </figure>

                <div className="card-content">

                  <h3 className="h3">
                    <b href="#" className="card-title">Business Templeate</b>
                  </h3>

                  <p className="card-text">
                  We are help your for design Template according your need to grow your business online and social media.
                    </p>

                 

                </div>

              </div>
            </li>

            <li>
              <div className="service-card">

                <figure className="card-banner">
                  <img src={icon3} width="728" height="344" loading="lazy" alt="Marketing"
                    className="w-100" />
                </figure>

                <div className="card-content">

                  <h3 className="h3">
                    <b className="card-title">Marketing</b>
                  </h3>

                  <p className="card-text">
                  We help for marketing in the <b>Digital Advertising </b>format to grow business and reach the target audience.
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
