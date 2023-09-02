import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import birthday from './images/birthday.jpg';
import corporate from './images/corporate.jpg';
import wedding from './images/wedding.jpg';
import courousalimage11 from './images/corousalimage11.jpg';
import courousalimage2 from './images/corousalimage2.jpg';
import courousalimage3 from './images/corousalimage3.jpg';
import backgroundImage from './images/homepagebackground.jpg'; // Replace with your background image path

export default function HomeComponent() {
    const cardStyle = {
        flex: "0 0 18rem",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
    };

    const cardImageStyle = {
        width: "100%",
        height: "150px", // Adjust the height as needed for consistent alignment
        objectFit: "cover"
    };
    const blackDecorativeLine = {
        height: "2px",
        backgroundColor: "black",
        width: "100px",
        margin: "20px auto"
    };

    const carouselImages = [
        { src: courousalimage3, alt: "courousalimage3" },
        { src: courousalimage11, alt: "courousalimage11" },
        { src: courousalimage2, alt: "courousalimage2" }
    ];


    return (

        <div style={containerStyle}>
            <h1 className="display-4 my-5" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontStyle: 'italic', marginTop: '0rem', marginBottom: '2rem' }}>4S Events</h1>
            <div id="imageCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {carouselImages.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <img
                                src={image.src}
                                className="d-block w-100"
                                alt={image.alt}
                                style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "contain" }}

                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#imageCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#imageCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container text-center">

                <h3><p className="lead" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    4S Events stands as a trailblazer in the domain of event management, weaving together exceptional services that transcend conventional boundaries. Our unwavering commitment lies in sculpting experiences that etch themselves into memory, invoking emotions that resonate long after the event's conclusion. From the elegance of weddings to the exuberance of birthdays and the strategic finesse of corporate assemblies, we orchestrate a symphony of moments that linger in hearts and minds.
                </p></h3>
            </div><br></br>
            <div className="black-decorative-line" style={blackDecorativeLine}></div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="mb-4">Our Services</h2>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top" src={wedding} alt="Wedding" style={cardImageStyle} />
                            <div className="card-body">
                                <h5 className="card-title">Wedding</h5>
                                <p className="card-text">Exquisite arrangements for your special day. Our team will create a magical atmosphere that reflects your love story.</p>
                                <br></br><Link to="/service" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>

                        <div className="card" style={cardStyle}>
                            <img className="card-img-top" src={birthday} alt="Birthday" style={cardImageStyle} />
                            <div className="card-body">
                                <h5 className="card-title">Birthday</h5>
                                <p className="card-text">Celebrate with style and fun. Whether it's a kids' party or an adult celebration, we have creative ideas to make it memorable.</p>
                                <br></br><Link to="/service" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>

                        <div className="card" style={cardStyle}>
                            <img className="card-img-top" src={corporate} alt="Corporate Events" style={cardImageStyle} />
                            <div className="card-body">
                                <h5 className="card-title">Corporate Events</h5>
                                <p className="card-text">Professional events tailored to your needs. From seminars and conferences to team-building activities, we ensure a seamless experience.</p>
                                <Link to="/service" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}