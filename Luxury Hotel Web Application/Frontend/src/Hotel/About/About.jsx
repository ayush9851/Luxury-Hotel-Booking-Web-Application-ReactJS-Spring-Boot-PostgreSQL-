import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="aboutpage-container">

            <section className="aboutpage-hero">
                <div className="aboutpage-overlay"></div>

                <div className="aboutpage-textbox">
                    <h1>Our Story</h1>
                    <p className="aboutpage-subtitle">
                        Founded with a passion for hospitality, our luxury hotel blends
                        timeless elegance with world-class comfort for guests around
                        the globe.
                    </p>
                </div>
            </section>


            <section className="aboutpage-storygrid">

                <div className="aboutpage-storycontent">
                    <h2>Luxury With A Legacy</h2>

                    <p>
                        For decades, we’ve welcomed travelers seeking refined
                        experiences, breathtaking views, and personalized service.
                    </p>

                    <p>
                        Every detail — from architecture to cuisine — is crafted
                        to perfection. Our mission is simple: deliver exceptional
                        stays, remarkable dining, and moments worth remembering.
                    </p>

                    <h2>Book Your Experience</h2>
                    <ul className='lists'>
                        <li>Best Price Guranties</li>
                        <li>Flexible Connection</li>
                        <li>Exclusive Offers</li>
                        <li>Priority Services</li>
                    </ul>
                </div>

                <div className="aboutpage-imageblock">
                    <img src="Day-Room.png" alt="Luxury Lobby" />
                </div>

            </section>

        </div>
    )
}

export default About