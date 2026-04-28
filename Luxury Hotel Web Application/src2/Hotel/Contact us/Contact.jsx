import "./Contact.css";

const Contact = () => {
    return (
        <div className="contactpage-wrapper">

            <div className="contactpage-card">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you</p>

                <div className="contactpage-info">
                    <div className="contactpage-item">
                        📞 <span>+91 98765 43210</span>
                    </div>

                    <div className="contactpage-item">
                        ✉️ <span>info@oceanpearl.com</span>
                    </div>

                    <div className="contactpage-item">
                        📍 <span>Bangalore, India</span>
                    </div>
                </div>

                <button
                    className="contactpage-btn"
                    onClick={() => window.open("https://www.google.com/maps?q=12.9716,77.5946", "_blank")}
                >
                    📍 Get In Touch
                </button>
            </div>

        </div>
    );
};

export default Contact;
