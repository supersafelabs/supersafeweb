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
                                    <h1>SuperSafe's Answer-to-Earn Web3 Knowledge Repository, Powered by Base</h1>
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
                                                <span className="date">March 28, 2023</span>
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
                                <h3>What is Base?</h3>
                                <p>
                                    Base is a new Ethereum-L2 blockchain built by Coinbase with the mission of onboarding the next billion users to web3.
                                    I understand that's a whole lot of jargon so let's break that down further before diving deeper into what's special about Base.
                                </p>
                                <h3>What is Coinbase?</h3>
                                <p>
                                    <a href="coinbase.com">Coinbase</a> is one of the largest, most popular cryptocurrency exchanges in the world. 
                                    Coinbase is also one of the oldest US-based exchanges, and its popularity is equal parts due to:
                                </p>
                                <ol>
                                    <li>Coinbase has an amazingly intuitive and user-friendly design.</li>
                                    <li>Coinbase has an impeccable reputation regarding the security of user's funds.</li>
                                </ol>
                                <p>
                                    At least, that's what my intuition says. 
                                    Those are the main reasons the very first Bitcoin (and Ethereum and Litecoin) I bought was on Coinbase back
                                    in the fall of 2017, and yup I bought Bitcoin all the way up to that $20k peak and all the way back down to $3k.
                                    Sadly I panicked about news articles discussing legislation in Congress to ban/regulate Bitcoin 
                                    (which I don't think ever made it to the floor) and stopped buying in 2019 or so. 
                                    Anywho, I can talk more about fun crypto trading / arbitrage anecdotes another day {";)"}
                                </p>
                                <h3>What's Ethereum-L2</h3>
                                <p>
                                    Ethereum is a so-called "layer one" (or L1) blockchain (similar to Bitcoin) as it's the primary chain that follows
                                    the protocol for creating new blocks (formerly mining, now related to staked ether, more on this another day),
                                    how those blocks are packed with transactions, including executable code known as "smart contracts."
                                </p>
                                <p>
                                    A "layer two" (L2) blockchain is one that inherits much of the L1's architecture but adds some nuances.
                                    For example, the Lightning Network is an L2 chain which inherits the security of Bitcoin but enables much faster
                                    transactions than would otherwise be possible with Bitcoin's 15-minute (average) block time.
                                </p>
                                <p>
                                    Ethereum has many popular L2s such as Polygon, which partnered with <a href="instagram.com">Instagram</a> (and many others)
                                    to provide digital collectibles with negligble end-user fees.
                                    In contrast, I recently paid $6 to send someone $327 on Ethereum, almost 2{"%"} in fees. 
                                    This is particularly nuts considering I originally got into crypto because Schwab was 5% per trade whereas, way back when, 
                                    Gdax (subsequently CoinbasePro, sadly shutdown) offered no maker fees
                                    and <a href="bittrex.com">Bittrex</a> was 0.1{"%"} per trade 
                                    (most stock platforms now follow Robinhood's model of saying no fees on trades, but really it's hidden in the spread...)
                                </p>
                                <p>
                                    So to accomplish Coinbase's goal of onboarding the next billion users to web3, reducing fees with an L2 are crucial.
                                    Why not just create their own chain? Prodigious efforts have already been expended to develop the Ethereum blockchain,
                                    as secure and robustly as possible. Perhaps the greatest "proof" of Ethereum's security 
                                    (so far, keep your fingers crossed with me Shapella goes well...) is the $219B marketcap of Ethereum, 
                                    according to <a href="coinmarketcap.com">CoinMarketCap</a> today, which would plummet if exploits allowed for illicit
                                    transfers or withdraws (gulp, Shapella, gulpppp - it's okay it's okay I was freaking out during the switch from POW to POS too {":O"}).
</p>
                                <h3>But what the FREAK is Web3???</h3>
<p>
                                The first iteration of the web consisted of read-only content - such as <a href="https://www.asciimation.co.nz/">Simon Jansen's fantastic ASCII rendition of Star Wars</a>,
                                or <a href="xkcd.com">xkcd</a>. While this content is awesome, similar abilities exist for traditional media, it is only really the reach that is amplified by the web.
                           </p>
                           <p>
                                In contrast, the second generation of the web allowed user's to not just consume -- but also contribute (read + write).
                                Think <a href="wikipedia.com">Wikipedia</a>, <a href="github.com">Github</a>, and <a href="stackoverflow.com">StackOverflow</a> -- 
                                in this case the content is not by the website's creator alone, but instead is produced by entire communities of users.
                                </p>
                            <p>
                                And yet despite StackOverflow's content being predominantly produced by its own community of users, and not its creators nor its employees,
                                the users producing such content don't see a dime of the roughly $124M/yr StackOverflow generates (mostly ads, the team does have total rights
                                to sales of its teams product imho).
                            </p>
                                <p>
                                In the third iteration of the web, users are empowered to (i) read, (ii) write, <em>and</em> (iii) own. 
                                You might think Uber and Medium might be included in web3 by this definition since user's could earn using the platform 
                                (i.e., driving cars or writing articles, respectively). However, Uber's early policy of pocketing tips and Medium's ability
                                to change its payout structure at the drop of a hat suggest user's don't really "own" anything still. 
                                </p>
                                <p>

                                Instead, the true promise of web3 requires blockchain technology, enabling truly decentralized ownership of digital assets.
                                SuperSafe is preparing a proposal pitching for a web3 knowledge repository powered by Base such that users are rewarded for
                                the labor they freely give to the platform. While the core reputation system requires hard work with no shortcuts,
                                the ability to interact (e.g., direct message) with top users is added by spending $AE tokens that are accrued with reputation
                                (and can of course be bought and sold on exchanges, if demand exists).
                                </p>
                                <p>
                                Moreover, SuperSafe's Answer-to-Earn platform will fix a fundamental problem with existing Q&A sites: roughly 25%
                                of StackOverflow questions go unanswered. I don't have a statistic for the wait time, but personally I've found that at
                                least half the questions I ask I don't notice an answer to until a day or two later - whereas I typically only ask questions
                                when I really can't find an answer and need one ASAP. User's can spend $AE tokens to place bounties on their questions,
                                including timers (shorter times require more $AE tokens) and they can multiply the reputation earned by spending additional
                                $AE tokens. Therefore, A2E will enable users to organically decrease time-to-solution for their high-demand problems.
                                
                                </p>
                                <p>
                                If successfully awarded funding by 
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiSAod4PAbXlvvDGtHWu-GqzGpvHYfaTQR2f77AawD7GYc4Q/viewform?pli=1&pli=1">
                                Base's Ecosystem Fund</a>
                                I'm planning on hiring a few web3 developers I've met along the way during my 2022 web3 journey, which
                                you can read more about in <a href="2023-01-31_OriginStory">SuperSafe's Origin Story</a>.
                                </p>
                                <p>
                                    If you're interested in learning more, email ryan@supersafelabs.com {":)"}

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
