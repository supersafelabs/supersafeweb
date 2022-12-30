import React from 'react'

const FunFacts = () => {
  return (
    <>
      <div className="funfacts-style-area">
        <div className="container">
          <div className="funfacts-style-inner-box pt-100 pb-70">
            <div className="row justify-content-center">
              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6" 
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    $150B
                  </h3>
                  <p>2022 Cybersecurity Revenue</p>
                </div>
              </div>

              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6" 
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    $2T
                  </h3>
                  <p>2022 Cybercrime Cost</p>
                </div>
              </div>

              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6" 
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    T-7Y
                  </h3>
                  <p>1M Qubit Quantum Computers</p>
                </div>
              </div>

              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    19
                  </h3>
                  <p>Interested Parties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFacts
