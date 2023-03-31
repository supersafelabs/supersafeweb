import React from 'react'
import Navbar from '@/components/CybersecurityServices/Navbar'
import Footer from '@/components/CybersecurityServices/Footer'

export default function WhoWhatWhenWhereWhySuperSafe() {
    return (
        <>
            <Navbar />

            <>
                <div className="blog-details-area ptb-100">
                    <div className="container">
                        <div className="blog-details-header row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h1>The Who-What-When-Where-Why Behind SuperSafe</h1>
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
                                                    By <a href="#">Ryan (Founder)</a>
                                                </span>
                                                <span className="date">December 31, 2022</span>
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
                                <h3>WHO is behind SuperSafe?</h3>
                                <p>
                                    Ryan Jeffrey Farber founded SuperSafe in December 2022. Ryan earned
                                    his <em>Magna Cum Laude</em> Bacehlor's in Physics with honors and Mathematics
                                    from Wheaton College in 2015 and his PhD from the University of Michigan in August 2021.
                                    Ryan began studying galaxy evolution as a postdoctoral researcher at the Max Planck Institute
                                    for Astrophysics in November 2021.
                                </p>
                                <h5>Professional Activities</h5>
                                <p>
                                    Ryan has co-authored seven peer-reviewed journal articles,
                                    instructed six courses at the undergraduate level,
                                    presented his scientific work at over a dozen scientific conferences,
                                    and has helped organize and participate in over two dozen outreach events.
                                </p>

                                {/* <p>
                                granted
                                    the Michigan Institute for Computational Discovery and Engineering fellowship.
                                    Ryan earned his PhD from the University of Michigan in 2021.
                                    As part of his PhD, Ryan published three first-authored papers, 
                                    assisted the development in three other projects that lead to publications, 
                                    and presented implemented the Townsend (2009) exact
                                    integration technique for radiative cooling.
                                </p> */}
                                <h3>WHAT is SuperSafe?</h3>
                                <p>
                                    SuperSafe is a software startup specializing in quantum-resistant encryption.
                                </p>
                                <h3>WHEN SuperSafe?</h3>
                                <p>
                                    SuperSafe is now! Supersafe was founded in December 2022. We launched our website last week,
                                    are attending CES next week, and Qubits in three weeks. Contact us to learn more about our
                                    quarterly goals for 2023, our 5 year plan, or our 10 year plan.
                                </p>
                                <h3>WHERE is SuperSafe?</h3>
                                <p>
                                    SuperSafe was established in Novato, California of the United States of America!
                                </p>
                                <h3>WHY SuperSafe?</h3>
                                <p>
                                    In one sentence, the National Security Administration issued a plan in September 2022
                                    for all national security systems to upgrade to quantum-resistant encryption by 2035,
                                    and SuperSafe provides maximal security in the nascent field of quantum-resistant
                                    encryption to keep your data SuperSafe!
                                </p>
                                {/* <div className="article-tags">
                                    <a href="blog.html">#Business</a>
                                    <a href="blog.html">#Startup</a>
                                    <a href="blog.html">#Agency</a>
                                </div> */}
                                {/* <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave A Reply</h3>
                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            Your email address will not be published. Required fields
                                            are marked <span className="required">*</span>
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <label>Name *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Eg: Sarah Taylor"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <label>Email *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="hello@sarah.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label>Website</label>
                                                    <input
                                                        type="text"
                                                        name="website"
                                                        className="form-control"
                                                        placeholder="Website"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label>Comment</label>
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        cols="30"
                                                        rows="5"
                                                        placeholder="Comment..."
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-5 col-sm-12">
                                                <button type="submit" className="default-btn">
                                                    <span className="ri-arrow-right-s-line"></span>Post A
                                                    Comment
                                                </button>
                                            </div>
                                            <div className="col-lg-8 col-md-7 col-sm-12">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="checkme"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkme">
                                                        Save my name, email, and website in this browser for
                                                        the next time I comment.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </>
    )
}
