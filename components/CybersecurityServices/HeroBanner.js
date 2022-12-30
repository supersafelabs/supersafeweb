import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="cybersecurity-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cybersecurity-banner-content" 
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="sub-title">Quantum-resistant is here</span>
                <h1>Keep Your Data Super Safe</h1>
                <p>
                  SuperSafe combines battle-tested industry-standard
                  encryption <em>together</em> with cutting-edge quantum-resistant
                  techniques, recommended by NIST and the NSA to keep your data super safe!
                </p>
                {/* <Link href="/contact">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cybersecurity-banner-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/banner/banner.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
