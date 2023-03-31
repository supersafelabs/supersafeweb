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
                                    <h1>Welcome Ben to the SuperSafe fam!</h1>
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
                                                <span className="date">March 8, 2023</span>
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
                                <h3>Ben Hogan</h3>
                                <p>
                                    Drumroll please! I am very excited to announce that Ben Hogan has just joined the SuperSafe fam!
                                    Ben is one of my forty cousins and is an overall great guy who's here to help chiefly with 
                                    <Link href="/blog/2023-03-29_PodcastsIncoming"><a>SuperSafe's podcast</a></Link>,
                                    possibly with writing blog posts, and definitely with our search for a summer intern (more on that later).
                                    Feel free to hit Ben up via ben@supersafelabs.com.
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
