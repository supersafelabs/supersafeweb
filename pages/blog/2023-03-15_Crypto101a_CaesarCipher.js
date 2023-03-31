import React from 'react'
import Navbar from '@/components/CybersecurityServices/Navbar'
import Footer from '@/components/CybersecurityServices/Footer'
import Link from 'next/link'

export default function Crypto101a_CaesarCipher() {
    return (
        <>
            <Navbar />

            <>
                <div className="blog-details-area ptb-100">
                    <div className="container">
                        <div className="blog-details-header row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h1>Crypto 101 Module A: Encryption Hello World</h1>
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
                                                <span className="date">March 15, 2023</span>
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
                                    The below is for educational and/or entertainment purposes only.

                                </p>
                                <h3>Caesar Cipher</h3>
                                <p>
                                    Google suggests people, maybe hungry waiting for lunch, are more typically after Caesar's salad.
                                    This post however will discuss the legendary Roman general's cipher, which means encrypted text.
                                </p>
                                <p>
                                    The Caesar cipher of the Latin alphabet is one of the simplest methods to encrypt and decrypt data -
                                    it's also one of the easiest to crack.
                                </p>
                                <p>
                                    Note however that it required about 800 years for Arab mathematicians to develop frequency analysis to crack Caesar ciphers,
                                    which is nevertheless difficult to perform before the advent of modern computers, 
                                    especially if one uses multiple language sets (such as Greek, Cyrillic, Arabic, Chinese, etc.)
                                    </p>
                               <p>
                                    Sticking with the Latin alphabet for simplicity, 
                                    one can map each letter to a number, such as a: 1, b: 2, ... z: 26.
                                    </p>
                                <p>
                                    Then, to encrypt one chooses a secret key from 1 to 25 and adds the key to the message.
                                    For a key of 3, "cat" becomes "fcw." One then subtracts the key to decrypt.
                                    </p>
                                <p>
                                    This is known as a symmetric key cryptographic method, since the same key is used for
                                    encryption and decryption (one just uses addition to encrypt and subtraction to decrypt,
                                    which requires the operator to be commutative, 
                                    which can be proved from the Peano axioms since we're discussing natural numbers).
                                    </p>
                                <p>                                    
                                    To get a hands on feel give it a try in our 
                                    <Link href="/demo/caesar"><a>Caesar cipher demo!</a></Link>
                                    </p>
                                <p>
                                    Of course, the Caesar cipher on just the Latin alphabet is extremely weak, as only 26 keys
                                    exist so computers can figure out the key by brute force pretty quickly.
                                    </p>
                                <p>
                                    If you have any questions feel free to contact us via ryan@supersafelabs.com
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
