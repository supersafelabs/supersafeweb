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
                                    <h1>Together: Social Networking Enhanced for the Digital Nomad</h1>
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
                                                <span className="date">April 1, 2023</span>
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
                                <h3>Together</h3>
                                <p>
                                    Together redefines meaningful connections by helping traveling users discover a friend or 
                                    family member happens to be nearby on their travels. This is a project by Stanford MD-to-be Joel Adu-Brimpong
                                    and my former roommate in Michigan. The website is still under development but I'll see if Joel can swing by
                                    to add some context here next time we chat, hopefully this weekend -- Joel was also the one that clued me into
                                    the <a href="/blog/2023-03-31_LKYGBPC">Lee Kuan Yew Global Business Plan Competition</a>. Joel's OneHealth+ is
                                    potentially partnering with SuperSafe -- but more on this later {";)"}
                                </p><p>
                                </p><p> 
                                    If you're eager to learn more, feel free to reach me by email: ryan@supersafelabs.com {":)"}
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
