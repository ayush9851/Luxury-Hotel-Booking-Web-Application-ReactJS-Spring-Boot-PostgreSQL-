import React from "react";
import './Hero.css'
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="hero">

            <img src="Outside-View2.png" alt="" className="hotel" />
            <div className="overlay"></div>

            <div className="hero-content">
                <h1>Stay Beyond Comfort. Experience the extraordinary.</h1>
                <p>
                    From luxury rooms to unforgettable
                    dining — your perfect stay starts here.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn" onClick={() => navigate("/booking")}>Book Your Stay</button>
                    <button className="secondary-btn" onClick={() => navigate("/dinein")}>
                        Explore Dine-In
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Hero;
