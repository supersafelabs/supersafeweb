import React, { useState } from 'react'
import Link from '@/utils/ActiveLink'

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)
  const toggleNavbar = () => {
    setMenu(!menu)
  }
  React.useEffect(() => {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
  })

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show'
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <div id="navbar" className="navbar-area navbar-area-with-position-relative">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <h3>SuperSafe</h3>
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Solutions
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">SuperCrypt</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">SuperSafeNotes</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">SuperSafeProductivity++</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">SuperSafeDB</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Testimonials
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link href="/team" activeClassName="active">
                      <a className="nav-link">Team</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li> */}
                </ul>
              </div>

            {/* <div className="others-option">
              <Link href="/contact">
                <a className="default-btn style-two">
                  <span className="ri-edit-2-line"></span>Get A Free Quote
                </a>
              </Link>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
