import React from 'react'
import './style.css'
import Img1 from './image/hero-banner.png'

export default function Heading() {
  return (
    <>
     {/* <!-- 
        - #HERO
      --> */}
  <main>
    <article>
      <section className="section hero" id="home">
        <div className="container">

          <figure className="hero-banner">
            <img src={Img1} width="804" height="643" loading="lazy" alt="hero banner"
              className="w-100" />
          </figure>

          <div className="hero-content">

            <h2 className="h1 hero-title">Unlock Your Online Potential with Business Development Services!</h2>

            <p className="section-text">
            Unlock your business's potential with professional development services! Boost your online presence and reach new heights 
            </p>

            {/* <form action="" class="hero-form">
              <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="Enter Your Email"
                required class="input-field" />

              <button type="submit" class="btn btn-primary">Start Free Trial</button>
            </form> */}

            {/* <ul class="hero-list">

              <li class="hero-item">
                
                <span class="span">Website Development</span>
              </li>

              <li class="hero-item">
                 <span class="span">SEO</span>
              </li>

              <li class="hero-item">
               
                <span class="span">Digital Advertising</span>
              </li>

              <li class="hero-item">
               
                <span class="span">Business Templeate</span>
              </li>

              <li class="hero-item">
               
                <span class="span">Logo Design</span>
              </li>

            </ul> */}

          </div>

        </div>
      </section>

</article></main>
    </>
  )
}
