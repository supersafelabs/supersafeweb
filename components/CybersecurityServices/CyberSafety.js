import React from 'react'

const CyberSafety = () => {
  return (
    <>
      <div className="cyber-safety-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cyber-safety-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/cyber-safety.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-safety-content">
                <span className="sub-title">Cyber Safety</span>
                <h2>Protect Your Self Against Cyberattacks</h2>
                <p>
                  Cybersafety is like ice skating. 
                  You'll fall down a few times as you learn 
                  but once you're up to speed best practices become second nature.
                  SuperSafe will post blog articles to train America's next generation cyberdefenders. Quick tips:
                </p>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Check email sender.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Check links before you click.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Download files on your burner.
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Never share passwords.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Avoid bookmarklet scams.
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Use Multifactor Authentication.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CyberSafety
