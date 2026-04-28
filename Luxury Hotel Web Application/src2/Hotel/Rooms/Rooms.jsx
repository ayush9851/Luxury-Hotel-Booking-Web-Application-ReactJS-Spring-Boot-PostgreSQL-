import React, { useEffect, useState } from "react";

function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8090/rooms")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);   // 👈 see data in console
                setRooms(data);
            });
    }, []);

    return (
        <div>
            <h2>Rooms List</h2>

            {rooms.map((room) => (
                <div key={room.id}>
                    <h3>Room No: {room.roomNumber}</h3>
                    <p>Type: {room.type}</p>
                    <p>Price: ₹{room.price}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Rooms;