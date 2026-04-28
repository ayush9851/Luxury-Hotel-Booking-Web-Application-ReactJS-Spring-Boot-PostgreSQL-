import "./Booking.css";
import React, { useEffect, useState } from "react";

const Booking = () => {

    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8090/rooms")
            .then((res) => res.json())
            .then((data) => {
                setRooms(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="bookingpage-container">

            {/* HERO SECTION */}
            <section className="bookingpage-hero">
                <div className="bookingpage-overlay">
                    <img src="booking-bg.png" alt="" className="bookimg" />
                </div>

                <center>
                    <div className="bookingpage-content">
                        <h1>Book Your Stay</h1>
                        <p>
                            Choose your dates, select guests, and experience luxury like never before.
                        </p>

                        <div className="bookingpage-card">

                            <div className="bookingpage-row">
                                <div className="bookingpage-field">
                                    <label>Check In</label>
                                    <input type="date" />
                                </div>

                                <div className="bookingpage-field">
                                    <label>Check Out</label>
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="bookingpage-row">
                                <div className="bookingpage-field full">
                                    <label>Guests</label>
                                    <select>
                                        <option>Choose Below</option>
                                        <option>1 Guest</option>
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>4 Guests</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                className="bookingpage-btn"
                                onClick={() => {

                                    if (selectedRoom === null) {
                                        alert("Please select a room first");
                                        return;
                                    }

                                    const inputs = document.querySelectorAll("input");
                                    const checkInDate = inputs[0].value;
                                    const checkOutDate = inputs[1].value;

                                    if (!checkInDate || !checkOutDate) {
                                        alert("Please select dates");
                                        return;
                                    }

                                    const bookingData = {
                                        user: { id: 1 },
                                        room: { id: selectedRoom },
                                        checkInDate: checkInDate,
                                        checkOutDate: checkOutDate
                                    };

                                    fetch("http://localhost:8090/bookings", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(bookingData)
                                    })
                                        .then(res => res.json())
                                        .then(() => alert("Booking Successful!"))
                                        .catch(() => alert("Error in booking"));
                                }}
                            >
                                Check Availability
                            </button>

                        </div>
                    </div>
                </center>
            </section>

            {/* ✅ AVAILABLE ROOMS (MOVED OUTSIDE HERO) */}
            <section className="available-rooms-section">
                <h2 className="available-rooms-title">Available Rooms</h2>

                {rooms.length === 0 ? (
                    <p>Check your internet connection 📶⚠️ <br/> 
                    reconnect to continue your luxury experience..............🛜🔁</p>
                ) : (
                    rooms.map((room) => (
                        <div key={room.id} className="room-card">

                            <h3>Room No: {room.roomNumber}</h3>
                            <p>Type: {room.type}</p>
                            <p>Price: ₹{room.price}</p>

                            <button
                                className="bookingpage-btn"
                                onClick={() => setSelectedRoom(room.id)}
                            >
                                Select
                            </button>

                        </div>
                    ))
                )}

                {selectedRoom !== null && (
                    <h3 style={{ marginTop: "20px", color: "white" }}>
                        Selected Room ID: {selectedRoom}
                    </h3>
                )}
            </section>

        </div>

    );
};

export default Booking;