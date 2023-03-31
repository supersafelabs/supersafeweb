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
                                    <h1>Black Holes {"&"} Quantum Gravity</h1>
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
                                                <span className="date">March 30, 2023</span>
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
                                <h3>Setting</h3>
                                <p>
                                    As I discussed in <Link href="/blog/2023-01-31_OriginStory"><a>SuperSafe's Origin Story (Part 1)</a></Link>, I'm currently
                                    a postdoctoral researcher at the Max Planck Institute for Astrophysics (MPA). Today's Joint Astronomy Colloquium (JAC; which is joint
                                    with the European Southern Observatory, or ESO) was given by Raphael Bousso (UC Berkeley) 
                                    who's talk title was "From Black Holes to Quantum Computers: The Unreasonable Power of Gravity."
                                </p><p>
                                The first part of his talk was a brief history of black holes, 
                                from Karl Schwarzschild's prescient calculation in 1919 to Oppenheimer's study of stellar collapse in 1959,
                                to Roger Penrose's seminal 1965 which discussed the creation of black holes under much more general (and likely physical)
                                conditions compared to Oppenheimer.
</p><p>
                                The second part of Prof. Bousso's talk focused on John Archibald Wheeler's student Bekenstein's Bound (1972-1974),
                                which relates a blach hole's entropy to its area, the Gravitational constant G, and the Planck constant (hbar).
</p><p>
                                The fact that a black hole's entropy depends on both classical gravity (G) and quantum mechanics (hbar) is rather astonishing.
                                Somehow classical gravity "knows" about the configurations available quantum mechanically to get the entroy just "right."
                                </p><p>
                                Prof. Bousso went on to discuss how Bokenstein's Bound was later proven by Rossini in 2008 by Quantum Field Theory (QFT), and
                                how other classical results in black hole thermodynamics can be similarly proven by QFT: largely in the non-gravitating limit however,
                                and most significantly, only in the quantum gravity theory of AdS/CFT (Anti-de Sitter, Conformal Field Theory), which has a negative
                                cosmological constant. Unfortunately, that is not the universe we live in! The observed accelerated expansion of the universe
                                indicates a positive cosmological constant (dark energy). It was still a fascinating part of the lecture, as much
                                can be proven in AdS/CFT.
                                </p><p>
                                Sadly, the quantum computing part of the lecture was basically just a footnote towards the very end! 
                                The main takeaway (which I obtained) from questions at the end and after is that 
                                Prof. Bousso has just started working with a student on quantum error correcting codes to explore tensor networks to study AdS.
                                This is a fascinating topic I'm thinking of exploring in the near future.
                                </p><p> 
                                    If you have any questions, feel free to reach me by email: ryan@supersafelabs.com {":)"}
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
