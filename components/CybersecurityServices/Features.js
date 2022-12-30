import React from 'react'

const Features = () => {
  return (
    <>
      <div className="features-style-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-sm-6 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <img
                    src="/images/cybersecurity-services/features/features-1.png"
                    alt="image"
                  />
                </div>
                <h3>Encryption</h3>
                <h5>The First & Final Defense</h5>
                <p style={{textAlign: "left"}}>
                  SuperSafe implements elliptic curve digital signature algorithm secp256k1
                  for its base layer and the NIST-approved and NSA-recommended
                  CRYSTALS-KYBER algorithm as its quantum-resistant layer.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <img
                    src="/images/cybersecurity-services/features/features-2.png"
                    alt="image"
                  />
                </div>
                <h3>Cloud Security</h3>
                <h5>Remote Work Ready</h5>
                <p style={{textAlign: "left"}}>
                  SuperSafe wraps common cloud solutions (AWS, GCP, Microsoft Azure)
                  with customizable login protection, giving you more power to protect
                  your people.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <img
                    src="/images/cybersecurity-services/features/features-3.png"
                    alt="image"
                  />
                </div>
                <h3>Zero Trust</h3>
                <h5>Permissioning Decentralized</h5>
                <p style={{textAlign: "left"}}>
                  Revolutionizing identity access management, 
                  SuperSafe adopts a multisignature administrator approach and blockchain-based 
                  system redundancy backup system to keep your data SuperSafe!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
