import React from 'react'
import Link from 'next/link'

const Solutions = () => {
  return (
    <>
      <div className="cyber-security-services-area ptb-100">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>SuperSafe Solutions</h2>
            <p>
              Quantum-resistant for the future, fighting cybercrime today.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <img
                        src="/images/cybersecurity-services/services/services-1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <a>Phishing Defense</a>
                        {/* <Link href="/service-details">
                          <a>Phishing Defense</a>
                        </Link> */}
                      </h3>
                      <p>
                        SuperSafe properly permissions and archives your
                        system to minimize the danger of phishing
                        attacks.
                      </p>
                      {/* <Link href="/service-details">
                        <a className="services-btn">
                          Read More
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <img
                        src="/images/cybersecurity-services/services/services-2.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <a>Data Protection</a>
                        {/* <Link href="/service-details">
                          <a>Data Protection</a>
                        </Link> */}
                      </h3>
                      <p>
                        Quantum-resistant, multisignature multifactor authentication for state-of-the-art security today.
                      </p>
                      {/* <Link href="/service-details">
                        <a className="services-btn">
                          Read More
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <img
                        src="/images/cybersecurity-services/services/services-3.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <a>Quality Assurance</a>
                        {/* <Link href="/service-details">
                          <a>Quality Assurance</a>
                        </Link> */}
                      </h3>
                      <p>
                      NFT minting dapp and smart contract audits. SuperSafe performs 100+ tests for security, gas optimization and UX.
                      </p>
                      {/* <Link href="/service-details">
                        <a className="services-btn">
                          Read More
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <img
                        src="/images/cybersecurity-services/services/services-4.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        {/* <Link href="/service-details">
                          <a>Blockchain and Web3</a>
                        </Link> */}
                        <a>Blockchain and Web3</a>
                      </h3>
                      <p>
                        We specialize in EVM-compatible chains: Ethereum, Avalanche, Near, Polygon, and more! Solana and Cardano coming soon!
                      </p>
                      {/* <Link href="/service-details">
                        <a className="services-btn">
                          Read More
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-12 col-md-12">
              <div className="view-all-services-btn">
                <Link href="/services">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>View All
                    Services
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        <div className="cyber-security-services-shape">
          <img
            src="/images/cybersecurity-services/services/shape.png"
            alt="image"
          />
        </div>
      </div>
    </>
  )
}

export default Solutions
