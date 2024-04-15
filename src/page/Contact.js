import React from 'react'
import './style.css'
import icon12 from './image/icon/footer-img.png'


export default function Contact() {
  return (
    <>

      {/* <!-- 
        - #APP
      --> */}

      <section className="section app">
        <div className="container">

          <div className="app-content">

            <h2 className="h2 section-title">Contact Us for the services</h2>

            <p className="section-text">
            You can contact us on Social media platform we provide below.
            </p>

            <div className="btn-group">

              <a href="https://www.instagram.com/a.u.e_technology_official/" className="btn btn-primary">
                {/* <img src="./assets/images/play-store.svg" width="30" height="31" loading="lazy" alt="play store icon" /> */}

                <span className="span">
                  Contact on 
                  <strong className="strong">INSTAGRAM</strong>
                </span>
              </a>

              <a href="https://www.facebook.com/people/subhadra-technology/61553498558345/" className="btn btn-secondary">
             
                <span className="span">
                   Contact on 
                  <strong className="strong">FACEBOOK</strong>
                </span>
              </a>

            </div>

          </div>

          <figure className="app-banner">
            <img src={icon12} width="748" height="536" loading="lazy" alt="app screenshot"
              className="w-100" />
          </figure>

        </div>
      </section>




    </>
  )
}
