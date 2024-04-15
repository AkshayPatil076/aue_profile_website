import React from 'react'
import './style.css'
import img1 from './image/features-banner-2.png'
import img2 from './image/features-banner-1.gif'

export default function Feacher() {
  return (
    <>
{/* 
      <!-- 
        - #FEATURES
      --> */}

      <section className="section features" id="features">
        <div className="container">

          <div className="features-content">

            <h2 className="h2 section-title">Our Awesome Features To Serve You</h2>

            <p className="section-text">
            Unlock your business's potential with professional development services! Boost your online presence and reach new heights
            </p>

            <ul className="features-list">

              <li className="features-item">
               

                <h3 className="item-title">Website Development</h3>
              </li>

              <li className="features-item">
                

                <h3 className="item-title">Business Templeate Design</h3>
              </li>

              <li className="features-item">
              

                <h3 className="item-title">Logo Design</h3>
              </li>

              <li className="features-item">
               

                <h3 className="item-title">Digital Advertising</h3>
              </li>

            </ul>

          </div>

          <div className="banner-wrapper">

            <figure className="features-banner one">
              <img src={img2} width="600" height="500" loading="lazy"
                alt="features image" className="w-100" />
            </figure>

            <figure className="features-banner two">
              <img src={img1} width="436" height="311" loading="lazy"
                alt="features image" className="w-100" />
            </figure>

          </div>

        </div>
      </section>




    </>
  )
}
