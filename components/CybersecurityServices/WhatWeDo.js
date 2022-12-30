import React from 'react'

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-work-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="what-we-work-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/what-we-work/what-we-work.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                <span className="sub-title">Intended Audiences</span>
                <h2>Markets to Make SuperSafe</h2>

                <div className="we-work-inner-box">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Financial Institutions</h3>
                  <p>
                    Banks are among the leaders and the best in data security.
                    We are proud to protect US financial assets from foreign cyberthreats.
                  </p>
                </div>

                <div className="we-work-inner-box with-some-left">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>National Security Systems</h3>
                  <p>
                    Over 50 US departements and agencies
                    utilize national security systems. 
                    We are proud to help defend our country.
                  </p>
                </div>
                
                <div className="we-work-inner-box">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>Corporate Security</h3>
                  <p>
                    Cybercrime is on the rise. 
                    Avoid downtime from ransomware attacks and 
                    keep your customers satisfied with SuperSafe!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="what-we-work-shape">
          <img
            src="/images/cybersecurity-services/what-we-work/shape.png"
            alt="image"
          />
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
