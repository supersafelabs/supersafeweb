import React from 'react'

const WhyChooseSuperSafe = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <span className="sub-title">Why Choose SuperSafe</span>
                <h2>
                  Get The Best Of Both Worlds
                </h2>
                <p>
                  SuperSafe combines battle-tested, industry-standard encryption techniques with the latest cutting-edge tools to keep your data SuperSafe!
                </p>

                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i> RSA 4096-bit asymmetric key cryptography
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Elliptic curve digital signature algorithm secp256k1 
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> CRYSTALS-KYBER: NIST-selected and NSA-approved.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Customized blockchains for privacy &amp; system redundancy.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Multisignature multifactor authentication for SuperSafe cloud security
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="why-choose-us-image" 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/choose/choose.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us-shape">
          <img src="/images/cybersecurity-services/choose/shape.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default WhyChooseSuperSafe
