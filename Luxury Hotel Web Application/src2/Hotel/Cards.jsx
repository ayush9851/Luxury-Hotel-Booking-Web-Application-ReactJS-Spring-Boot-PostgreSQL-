import React from "react";
import './Cards.css'

function Cards() {
    return (
        <div className="cards-section">

            <center><h1>-----Why Choose Us-----</h1>
                <p>Experience unmatched luxury, comfort, and world-class hospitality in every moment.
                    We deliver excellence through elegant stays, fine dining, and unforgettable experiences.</p>
            </center><br /><br />

            <div className="cards">

                <div className="card">
                    <img src="Night Room.png" />
                    <h3>LUXURY ROOMS</h3>
                    <p>Relax in beautifully designed rooms crafted for ultimate comfort and elegance.
                        </p>
                </div>

                <div className="card">
                    <img src="fine-dine.png" />
                    <h3> FINE DINE</h3>
                    <p>Savor exquisite cuisines prepared by expert chefs with the finest ingredients.
                    </p>
                </div>

                <div className="card">
                    <img src="infinity-pool.png" />
                    <h3>INFINITY POOL</h3>
                    <p>Unwind in our stunning infinity pool with breathtaking skyline views.
                    </p>
                </div>
            </div>

        </div>

    );
}

export default Cards;
