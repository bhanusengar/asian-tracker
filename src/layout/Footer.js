import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer >
            <div className='footerWrapper'>
                <div className="fot-bot-bar">
                    <div className="container">
                        <div id="footerNav">
                            <div className="footerNav">
                                <ul>

                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>

                                </ul>

                                <ul>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                </ul>

                                <ul>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                    <li><Link href={'/'} >Lorem</Link></li>
                                </ul>

                            </div>
                        </div>

                        {/* <!-- footer Address area --> */}

                        <div className="footerContentArea">
                            {/* <!-- link Area --> */}
                            <div className="footerLinks">
                                <h2> About </h2>
                                <ul>
                                    <li><Link href={'/'} >About us</Link></li>
                                    <li><Link href={'/'} >Code of ethics</Link></li>
                                    <li><Link href={'/'} >Vision & Mission</Link></li>
                                    <li><Link href={'/'} >Terms of use</Link></li>
                                    <li><Link href={'/'} >Site Map</Link></li>
                                    <li><Link href={'/'} >Privacy Policy</Link></li>
                                    <li><Link href={'/'} >Cookie Policy</Link></li>
                                    <li><Link href={'/'} >Community guidelines</Link></li>
                                </ul>
                            </div>
                            <div className="footerLinks">
                                <h2> Contact Us </h2>
                                <ul>
                                    <li><Link href={'/'} >Connect with us</Link></li>
                                    <li><Link href={'/'} >Advertise with us</Link></li>
                                    <li><Link href={'/'} >Our Apps</Link></li>
                                    <li><Link href={'/'} >Podcast</Link></li>
                                    <li><Link href={'/'} >Submit a Review</Link></li>

                                </ul>
                            </div>
                            <div className="footerLinks">
                                <h2> Our Network </h2>
                                <ul>
                                    <li><Link href={'/'} >Asian Tracker Forum</Link></li>
                                    <li><Link href={'/'} >Indian Institute of Peace
                                        keeping studies</Link></li>
                                    <li><Link href={'/'} >Institute of Human Rights
                                        & Public Liberties</Link></li>

                                </ul>
                            </div>
                            <div className="footerLinks">
                                <h2> Career </h2>
                                <ul>
                                    <li><Link href={'/'} >Work for us</Link></li>
                                    <li><Link href={'/'} >Qualitative HR</Link></li>

                                </ul>
                            </div>

                            <div className="footerLinks">
                                <h2>Our network</h2>
                                <ul>
                                    <li><Link href={'/'} >About us</Link></li>
                                    <li><Link href={'/'} >Code of ethics</Link></li>
                                    <li><Link href={'/'} >Terms and conditions</Link></li>
                                    <li><Link href={'/'} >Privacy Policy</Link></li>
                                    <li><Link href={'/'} >Cookie Policy</Link></li>
                                    <li><Link href={'/'} >Site policy</Link></li>
                                    <li><Link href={'/'} >Community guidelines</Link></li>

                                </ul>
                            </div>

                        </div>
                        {/* <!-- footer Card option --> */}

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer