import React from "react";
import './card.css';

import img1 from './assets/booking.png'
import img2 from './assets/planning.png'
import img3 from './assets/management.png'


const Card = () =>{
    return(
        <div className="cards">
            <div className="card">
                <div className="logo">
                    <img src={img1} alt="image1"/>
                </div>
                <h3 className="header">Bookings</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu.</p>
            </div>
            <div className="card">
                <div className="logo">
                    <img src={img2} alt="image1"/>
                </div>
                <h3 className="header">Planning</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu.</p>
            </div>
            <div className="card">
                <div className="logo">
                    <img src={img3} alt="image1"/>
                </div>
                <h3 className="header">Management</h3>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu.</p>
            </div>
        </div>
    )
}

export default Card