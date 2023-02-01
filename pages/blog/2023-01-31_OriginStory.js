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
                                    <h1>The Origins of SuperSafe</h1>
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
                                                <span className="date">January 1, 2023</span>
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
                                    The below are purely my honest thoughts and recollections.

                                </p>
                                <h3>Preliminaries</h3>
                                <p>
                                    What a month January has been! From CES to Qubits after and in between, SuperSafe's first full month was jam-packed with meeting many brilliant folks.
                                </p>
                                <p>
                                    Before diving into January, I'd like to take a step back and discuss SuperSafe's origins since this post will be the first in a blog style 
                                    (my previous post <a href="/blog/2022-12-31_WhoWhatWhenWhereWhy">The Who-What-When-Where-Why Behind SuperSafe</a>)
                                    was more like the seeds of an FAQ or about page).
                                </p>
                                <p>
                                    In some ways SuperSafe's origins date back to November 2021.
                                    That month I began my postdoc at the Max Planck Institute for Astrophysics, 
                                    ~fresh out of my PhD.
                                    Honestly, I felt quite intimidated by basically everyone at the institute by how brilliant they were (particularly <a href="https://en.wikipedia.org/wiki/Simon_White">Simon White</a>).
                                    To be clear, everyone was quite nice (particularly Simon White!) yet I still felt quite out of my leage in comparison.
                                    Nevertheless, I diligently slept, ran, worked, ate, and slept and developed the mantra of "I belong here because I am here" -- and
                                    expect I worked more hours than anyone else at the institute. By the close of the year however I was rather thoroughly depressed.
                                </p>
                                <p>
                                    Whereas life felt quite "back to normal" when I departed the US, Germany was comparatively quite locked down.
                                    I substituted going to the gym with running and home workouts. 
                                    Yet, I was rather more sporadic and less motivated with bodyweight exercises than the ~full powerlifting barbell workouts I enjoyed
                                    at my apartment in Michigan even during the brunt of 2020.
                                    I've always hated running with a burning passion, but developed a daily habit of marathon training until my hockey ankle flared back up
                                    shortly after my first 10k.
                                </p>
                                <ul>
                                    <li>
                                    The relatively expensive living situtation and meager accomodations were a stark contrast to <a href="https://housing.umich.edu/residence-hall/munger/">Munger</a> in Michigan.
                                    </li>
                                    <li>
                                    I was ~unable to travel from what I recall this was due to my work visa before I was issued a residence card, although Europe in general was quite locked down from what I recall.
                                    </li>
                                    <li>
                                    I watched Squid Game, Cowboy Bebop, One Punch Man, and a few other shows in German in addition to enrolling in a German course and using Duolingo. Yet I became rather frustrated,
                                    finding I learned far less (and was able to put such to practice ~negligibly person-person) after two months in Munich compared to the amount of Spanish I learned by emersion from two weeks in Colombia.
                                    </li>
                                    <li>
                                    From the long work hours and rather terrible desk conditions I developed the first of a litany of ergonomic pains (the fault of which was rather evident when the pains ~quickly disappeared when I worked from home during the holidays).
                                    </li>
                                    <li>
                                    I quite desperately wanted to at least spend weekends with friends back in the US or even work remotely from Miami, but I certainly didn't have the income to make such dreams become a reality.
                                    </li>
                                </ul>
                                <p>
                                    About the same time, a friend mentioned he was reading "<a href="https://www.ryandanielmoran.com/book/">12 Months to $1 Million</a>" and was attempting to put the book to practice with his e-commerce side-venture 
                                    (he was simultaneously studying computer science in Montreal). The seed for SuperSafe was sown (although it would not sprout until ~December 2022): I set $1M by Thanksgiving 2022 (with end of year as a fallback) and $10M (after-taxes) by Thanksgiving 2023 as my goals. Now how to achieve them?
                                </p>
                                <p>
                                    I didn't much like the idea of selling physical products as the book preached; after all, I buy hardly any physical products  <a href="https://www.amazon.com/Plackers-Flossers-Fold-Out-Toothpick-Tuffloss/dp/B085YL4HR7/ref=sr_1_5?crid=1LPMX26WPDQ21&keywords=flossers&qid=1675239130&sprefix=flosser%2Caps%2C177&sr=8-5">aside from necessities</a>.
                                     Nevertheless, the core message from the book I took to be: build a brand on social media.
                                </p>
                                <p>
                                    So I took my first plunge into the twitterverse. My daily email newsletter from <a href="https://www.cryptocompare.com/">CryptoCompare</a> started discussing NFTs and it felt like 2017 crypto all over again.
                                    Except this time, I foolishly thought, I'd dive in pre-peak! While financially my misadventures with NFTs were rather ruinous (according to <a href="https://www.cointracker.io/">CoinTracker</a>, I could've harvested ~$30k in taxable losses at the end of 2022)
                                    and the mentral strain from attempting to become a social media "influencer" was quite abyssmal (only God knows how many nights I was unable to fall asleep for how many hours,
                                    my mind racing and anxious about notifications (particularly Discord) for no evident reason), nevertheless 2022 was a terrific year for my development as a web3 developer as well as postdoctoral researcher.
                                </p>
                                <h3>Astrophysics</h3>
                                <p>
                                    Arguably the most enjoyable time I had in all of 2022 was in the summer. 
                                    Certainly the return of sunshine,
                                    the gym,
                                    and travel played a role.
                                    But the best part was witnessing the growth of my summer undergraduate research student.
                                    From teaching him basic Linux commands and how to run Athena simulations in the first few weeks,
                                    I saw him grow into an independent researcher.
                                    In just seven weeks, he was able to set up and perform his own <a href="http://max.lyman-alpha.com/cloud-crushing/">cloud-crushing </a> 
                                     simulations and discovered an astonishing result.
                                    Dynamically relevant magnetized systems permit the survival of cold gas clouds 100x smaller than in the pure hydrodynamic case!
                                    We're still grappling with how this works in detail.
                                </p>
                                <p>
                                    While accelerated entrainment due to <a href="https://online.kitp.ucsb.edu/online/gclusters11/pfrommer/pdf/Pfrommer_GalaxyClusters_KITP.pdf">magnetic draping </a>
                                    does play a role, it doesn't appear to fully account for a two magnitude boost. 
                                    In agreement with previous work 
                                    (<a href="https://academic.oup.com/mnras/article-abstract/492/2/1970/5651168">Gronke & Oh 2020</a>; Das & Gronke, in prep.)
                                    we don't find magnetic fields significantly modify mixing [at least not in the efficient cooling limit...]
                                    Magnetic compression does shift the density PDF to higher values, including the tail, but only by a factor of a few,
                                    still apparently insufficient to fully explain our result.
                                    In any case, the paper is otherwise written up and we plan to submit it in a few weeks.
                                </p>
                                <p>
                                    Moreover, I successfully proposed to perform the highest resolution state-of-the-art galaxy simulations,
                                    to conclusively study the evolution of cold gas in galactic winds with uniform resolution to the virial radius and using Lagrangian tracer particles. 
                                    I was awarded ~40M CPU-hours (roughly $3M according to <a href="https://hec.nasa.gov/user/policies/sbus.html">NASA-Pleiades SBUs</a>)
                                    to perform these simulations.
                                    We're currently testing at lower resolution to ensure the premier run is well-spent.
                                </p>
                                <p>Additionally, I successfully completed a study of how thermal instability proceeds in the ~molecular regime 
                                (<a href="https://arxiv.org/abs/2209.13622">molecular shattering</a>), 
                                performing a thorough parameter study (~100 simulations) in high-resolution
                                hydrodynamic simulations.
                                I presented preliminary results at Ringberg in February 2022 and will present again  
                                <a href="https://sites.google.com/view/oases-in-the-cosmic-desert"> in Tempe in February 2023</a>. 
                                The paper should be published ~soon (unless there's another referee report round).
                                </p>


                                <h3>Web3</h3>
                                <p>
                                    On the web3 side, I developed and deployed about a dozen NFT smart contracts, mostly ERC721(A) with a smattering of 1155s, learning Solidity pretty solidly. 
                                    I developed the corresponding minting dapps as React apps and grew thoroughly accustomed to <a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd">CI/CD</a>, utilizing <a href="fleek.co">Fleek</a>, 
                                    <a href="netlify.com"> Netlify</a>, and <a href="vercel.com">Vercel</a> and ocassionally pure <a href="https://aws.amazon.com/">AWS</a>/<a href="https://cloud.google.com/">GCP</a>.
                                </p>
                                <p>
                                    I also built over a dozen discord bots (averaged one smart contract / discord bot every two weeks in 2022) with various functionalities; 
                                    so I feel pretty adept with Javascript and interfacing with APIs now. 
                                    However, the most rewarding part of my web3 journey has been mentoring a fresh dev the past few months; 
                                    he's now shadowed/developed his own first three minting dapps!
                                </p>
                                
                                <p>
                                    While the web3 development work I performed was interesting, 
                                    particularly witnessing the failure of dozens of NFT startups, 
                                    it clearly was not going to scale to my financial goals.
                                    That said, I hope to help the space when I'm in a better position to do so;
                                    this past week 
                                    <a href="https://cointelegraph.com/news/hackers-takeover-azuki-s-twitter-account-steal-over-750k-in-less-than-30-minutes"> a phishing tweet from a compromised NFT twitter account drained
                                    $750k in under an hour</a>.
                                    I do hope my groundbreaking (at the time), <a href="https://docs.rootroop.com/phase-three-more-perks/roo-tech/dauthy">just-in-time two-factor discord authenticator </a>
                                     removes one attack vector from NFT scams plaguing the space.
                                    However, I believe more systemic change requires education, requiring rather substantive financial incentives for adequate buy-in in the NFT space, unfortunately.
                                </p>
                                <p>
                                    At the same time I was phasing out of NFT work in mid-fall 2022, 
                                    I reconnected with my former PhD group-mate and collaborator Paco Holguin, 
                                    now a computational astrophysicist at <a href="https://www.jhuapl.edu/">APL</a>.
                                    While Paco is apparently up to a lot of interesting classified work I can only speculate at,
                                    he also wanted to continue doing astrophysics,
                                    particularly in applying AI to advance the state-of-the-art in modeling the Milky Way.
                                </p>
                                <p>
                                    We agreed he'd lead one project with my assistance, and I'd lead one project with his assistance.
                                    So I set off to thinking about what exploratory project I could lead, and found some old <a href="arxiv.org">arxiv</a> notes I had scribbled on <a href="https://arxiv.org/abs/1904.09033">Ray et al. 2019</a>.
                                </p>


                                <h3>
                                    Quantum Computing
                                </h3>
                                <p>
                                    That, I thought, might be interesting to dive deeper down. 
                                    And down I went down the rabbithole,
                                    reading <a href="https://link.springer.com/article/10.1007/BF02650179">Feynman's pioneering lecture</a>, 
                                    <a href="https://newsroom.ibm.com/2022-11-09-IBM-Unveils-400-Qubit-Plus-Quantum-Processor-and-Next-Generation-IBM-Quantum-System-Two"> IBM's rapid qubit progress 
                                    </a>, 
                                    <a href="https://en.wikipedia.org/wiki/Timeline_of_quantum_computing_and_communication"> Wikipedia's list of advancements in quantum computing 
                                    </a>. 
                                    Interestingly, the Wikipedia list includes quantum communication, 
                                    the most interesting of which is
                                    <a href="https://iopscience.iop.org/article/10.1088/1367-2630/13/11/113015/meta"> provably secure communications</a>,
                                    utilizing both special relativity and the no-cloning theorem in its bit-commitment protocol.                                    
                                </p>
                                <p>
                                    From a more practical perspective, the flooded quantum key distribution market appears to me rather inane however.
                                    No doubt, the physics is badass.
                                    Requiring a total new infrastructure and the practicality of using time-delays and secure channels,
                                    the endeavor of quantum-key-distribution seems rather science-fiction (or at least space age expensive) than science fact.
                                </p>
                                <p>
                                    From there, I read on Shor's algorithm and Grover's algorithm and the perils they play towards modern cryptography 
                                    (I expect I'll write a dedicated article on them at a later date). 
                                    <a href="https://csrc.nist.gov/Projects/post-quantum-cryptography"> NIST</a> began a standardization process for post-quantum-cryptography (PQC) way back in 2016!!
                                    However, just in July of 2022 they announced the first PQC algorithm to be standardized, 
                                    <a href="https://pq-crystals.org/kyber/"> Kyber by CRYSTALS</a>.
                                    Moreover, in just September of 2022
                                    <a href="https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/3148990/nsa-releases-future-quantum-resistant-qr-algorithm-requirements-for-national-se/"> the NSA </a>
                                    released its plan for all national security systems (utilized by 50 different departments and agencies)
                                    to upgrade to quantum-resistant cryptography (synonymous with PQC, and I prefer it)
                                    by 2035 (although 2033 in the <a href="https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/3247606/nsa-publishes-2022-cybersecurity-year-in-review/">year-end report</a>).
                                </p>
                                <p>
                                    Not only is now the first time to sensibly begin the adoption process of quantum-resistant encryption, 
                                    the Biden administration is adamant that the US stays ahead of the curve.
                                    Now is the perfect time to aid the adoption of quantum-resistant encryption 
                                    and help healthcare centers, financial institutions, and the brave red-white-and-blue prepare for tomorrow's cyberattacks, today.
                                </p>
                                <p>
                                    Today is the day for SuperSafe!
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
