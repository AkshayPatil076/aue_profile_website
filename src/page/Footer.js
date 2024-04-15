import React from 'react'
import './style.css'
import img11 from './image/stats-banner.png'

export default function Footer() {
  return (
    <>
{/* 
  <!-- 
    - #FOOTER
  --> */}

  <footer className="footer">

    <div className="footer-top section">
      <div className="container">

        <div className="footer-brand">
          <a href="#" className="logo">A.U.E_Technology</a>

          <figure className="footer-img">
            <img src={img11} height="226" loading="lazy" aria-hidden="true"
              className="w-100" />
          </figure>
        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Services</p>
          </li>

          <li>
            <a href="#" className="footer-link">Web Design</a>
          </li>

          <li>
            <a href="#" className="footer-link">Web Development</a>
          </li>

          <li>
            <a href="#" className="footer-link">Social Marketing</a>
          </li>

          <li>
            <a href="#" className="footer-link">WordPress</a>
          </li>

          <li>
            <a href="#" className="footer-link">Content Writing</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Quick Links</p>
          </li>

          <li>
            <a href="#" className="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" className="footer-link">Portfolio</a>
          </li>

          <li>
            <a href="#" className="footer-link">Pricing Plan</a>
          </li>

        

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Contact Us</p>
          </li>

          <li className="footer-item">
         
            <span className="span">
              E-Mail ID :
              <a href="auetechnology2023@gmail.com<" className="footer-item-link">auetechnology2023@gmail.com</a>
            </span>
          </li>

          <li className="footer-item">
           
            <span className="span">
              Address:
              <a href="#" className="footer-item-link">Sta: Maharashtra ,Dis: Sangli ,Tal: Tasgaon , Arawade</a>
            </span>
          </li>

          <li className="footer-item">
           
            <span className="span">
              Call ME :
              <a href="mailto:hello@Techx.com" className="footer-item-link">Freelancer</a>
            </span>
          </li>

        </ul>

      </div>
    </div>
  </footer>
  


    </>
  )
}
