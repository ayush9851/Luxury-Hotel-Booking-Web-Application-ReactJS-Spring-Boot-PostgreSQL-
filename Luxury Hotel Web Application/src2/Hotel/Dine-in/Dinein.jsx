import { useRef, useState } from "react";
import "./Dinein.css";

export default function Dinein() {
    const dateRef = useRef(null);
    const timeRef = useRef(null);

    // ✅ state added (no UI change)
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");

    // ✅ booking function
    const handleBook = (e) => {
        e.preventDefault(); // prevent page reload

        const email = localStorage.getItem("userEmail");

        if (!email) {
            alert("Please login first");
            return;
        }

        fetch("http://localhost:8090/users")
            .then(res => res.json())
            .then(users => {

                const currentUser = users.find(u => u.email === email);

                if (!currentUser) {
                    alert("User not found");
                    return;
                }

                const data = {
                    date: date,
                    time: time,
                    guests: guests,
                    user: { id: currentUser.id }
                };

                return fetch("http://localhost:8090/dinein", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Booking failed");
                }
                return res.json();
            })
            .then(() => {
                alert("Table booked successfully!");
            })
            .catch(err => {
                console.error(err);
                alert("Booking failed!");
            });
    };

    return (
        <div className="dine-page">

            <section
                className="hero"
                style={{
                    backgroundImage: "url('dinein.png')"
                }}
            >
                <div className="hero-overlay">
                    <h1>DINE & WINE</h1>
                    <p>Exquisite Dining Experience</p>
                </div>
            </section>

            <section className="intro">
                <p>
                    Indulge in an unforgettable culinary journey where elegance meets flavor.
                    From exquisite fine dining to breathtaking rooftop experiences and chef-crafted specialties,
                    every moment is designed to delight your senses and elevate your dining experience to pure luxury.
                </p>
            </section>

            <section className="features">

                <div className="feature-card">
                    <img src="Dinner.png" />
                    <h3>Fine Dining Restaurant</h3>
                    <p>Step into a world of sophistication where every dish tells a story of passion, precision, and global inspiration. Our fine dining restaurant offers an elegant ambiance paired with a carefully curated menu crafted by expert chefs using the finest ingredients.</p>
                </div>

                <div className="feature-card">
                    <img src="Dinein-pool.png" />
                    <h3>Rooftop Lounge</h3>
                    <p>Escape to our stunning rooftop lounge, where luxury meets breathtaking views under the night sky. Relax in a serene atmosphere while enjoying handcrafted cocktails, gourmet bites, and a panoramic skyline that sets the perfect mood..</p>
                </div>

                <div className="feature-card">
                    <img src="/Dinein-food.png" />
                    <h3>Chef’s Specials</h3>
                    <p>Discover the artistry of our chefs through a selection of signature dishes that redefine taste and creativity. Each plate is thoughtfully designed to combine rich flavors, modern techniques, and beautiful presentation..</p>
                </div>

            </section>

            <section className="reservation">
                <h2>Reserve Your Table</h2>

                {/* ✅ form submit handled */}
                <form onSubmit={handleBook}>

                    <button
                        type="button"
                        onClick={() => dateRef.current.showPicker()}
                    >
                        Select Date
                    </button>

                    <input
                        type="date"
                        ref={dateRef}
                        style={{ display: "none" }}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => timeRef.current.showPicker()}
                    >
                        Select Time
                    </button>

                    <input
                        type="time"
                        ref={timeRef}
                        style={{ display: "none" }}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <select onChange={(e) => setGuests(e.target.value)}>
                        <option>Guests</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                    <button type="submit">Book Now</button>

                </form>
            </section>
        </div>
    );
}