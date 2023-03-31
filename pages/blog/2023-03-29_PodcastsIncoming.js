import React from 'react'
import Navbar from '@/components/CybersecurityServices/Navbar'
import Footer from '@/components/CybersecurityServices/Footer'
import Link from 'next/link'

export default function OriginStoryPartTwo() {
    return (
        <>
            <Navbar />

            <>
                <div className="blog-details-area ptb-100">
                    <div className="container">
                        <div className="blog-details-header row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h1>Announcing <em>Quantum Tech</em> by SuperSafe</h1>
                                    {/* <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </p> */}
                                    <div className="post-author-meta">
                                        <div className="d-flex align-items-center">
                                            {/* <img src="/images/user/user1.jpg" alt="image" /> */}
                                            <img src="/images/supersafe/suitPicZoom.jpeg" alt="image" />
                                            <div className="title">
                                                <span className="name">
                                                    By <a href="#">Ryan</a>
                                                </span>
                                                <span className="date">March 29, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image">
                                    {/* <img src="/images/blog/blog9.jpg" alt="image" /> */}
                                    <img src="/images/supersafe/cover_transparent.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="blog-details-desc">
                            <div className="article-content">
                                {/* <ul className="social-links">
                                    <li>
                                        <a href="#" target="_blank" className="facebook">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="twitter">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="linkedin">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" className="instagram">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul> */}
                                <h3>Disclaimer</h3>
                                <p>
                                    None of the companies, organizations, nor people referenced herein should be implied to endorse SuperSafe and neither does SuperSafe endorse or take any commision from any references I make herein. 
                                    Neither are any thoughts below investment nor legal advice. 
                                    The below contains purely my honest thoughts and recollections and is for educational and/or entertainment purposes only.

                                </p>
                                <h3>Quantum Tech Podcast</h3>
                                <p>
                                    I am pleased to announce Ben and I have recorded our very first podcast episode! 
                                    <em>Quantum Tech</em> is an education-focused podcast on quantum technology broadly speaking.
                                    I founded SuperSafe because I was fascinated by the promise quantum information holds in revolutionizing humanity.
                                    From provably secure special relativistic quantum communication to quantum annealers, a lot of fascinating technology
                                    is being developed now. While SuperSafe's aim is to protect against threats to data privacy and security that quantum
                                    computers will bring about, we believe educating people on quantum technology will help elucidate the problems,
                                    and moreover the gifts quantum technology will lend us. Stay tuned for our first episode dropping on spotify towards the end of the month.
                                    If you're interested in a guest appearance, email ryan@supersafelabs.com {":)"}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </>
    )
}
