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
                                    <h1>Introducing SuperSafe's Chief Marketing Officer: Charles Murray.</h1>
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
                                                <span className="date">April 17, 2023</span>
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
                                <h3>Disclaimer</h3>
                                <p>
                                    None of the companies, organizations, nor people referenced herein should be implied to endorse SuperSafe and neither does SuperSafe endorse or take any commision from any references I make herein. 
                                    Neither are any thoughts below investment nor legal advice. 
                                    The below contains purely my honest thoughts and recollections and is for educational and/or entertainment purposes only.

                                </p>
                                <h3>Charles</h3>
                                <p>
                                    Welcome Charles to the SuperSafe family! Charles is a Bay Area native, attended UC Berkeley for college and is currently a continuing student at Stanford.
                                    </p>
                                    <p>
                                   Charles is also Assistant Clinical Research Coordinator at the Stanford Cognitive & Systems Neuroscience Laboratory, 
                                    which includes marketing, recruitment, running behavioral assessments, fMRI scans, administering STEM tutoring programs, and more.
                                    He recently led a massively successful marketing and recruitment effort for the lab.

                                    </p><p>
                                    Charles joins SuperSafe as Chief Marketing Officer and is chiefly responsible for representing SuperSafe at
                                    conferences (such as this week's HIMSS in Chicago), forging new partnerships, recruiting our budding workforce,
                                    and connecting with potential clients.
</p><p>
                                    If you're eager to connect, you can reach Charles by email:charles@supersafelabs.com
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
