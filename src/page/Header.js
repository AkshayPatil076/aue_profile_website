import React from 'react'
import './style.css'
import img from './image/icon/auetechnology2023@gmail.com(1).png'




export default function Header() {
  const onButtonClick = () => {
    const pdfUrl = img;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};




  return (
    <>
    
  <header className="header" data-header>
    <div className="container">

      <h1>
        <a href="#" className="logo"><h6>@A.U.E_Technology</h6></a>
        {/* <img src={img} className='logologo'/> */}
      </h1>

      <nav className="navbar container" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li className="navbar-item">
            <a href="#services" className="navbar-link" data-nav-link>Services</a>
          </li>

          <li className="navbar-item">
            <a href="#features" className="navbar-link" data-nav-link>Features</a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link" data-nav-link>About</a>
          </li>

          {/* <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Blog</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Contact Us</a>
          </li> */}

        </ul>
      </nav>

      <button className="btn btn-secondary" onClick={onButtonClick} >Download Card</button>

      <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggle-btn>
        {/* <ion-icon name="menu-outline" class="menu-icon"></ion-icon>
        <ion-icon name="close-outline" class="close-icon"></ion-icon> */}

      {/* <button class=" btn-k" onClick={onButtonClick} >Download Card</button> */}
      </button>

    </div>
  </header>


    </>
  )
}
