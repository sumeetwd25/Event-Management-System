import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import weddingImage from './images/wedding.jpg';
import birthdayImage from './images/birthday.jpg';
import corporateImage from './images/corporate.jpg';
import VenuesAvailable from './Venue';
import CateringServices from './Catering';

export default function ServiceComponent() {
    const isLoggedIn = true; // Replace with your authentication logic

    const servicesData = [
        {
            title: "Wedding",
            description: "Exquisite arrangements for your special day. Our team will create a magical atmosphere that reflects your love story.",
            details: "From enchanting decor to personalized touches, we weave your dreams into reality. Walk down the aisle surrounded by elegance and romance, while we handle every detail with meticulous care. Let us craft the perfect ambiance that mirrors your unique journey and transforms your wedding day into an unforgettable tale of love and celebration.",
            image: weddingImage
        },
        {
            title: "Birthday",
            description: "Celebrate with style and fun. Whether it's a kids' party or an adult celebration, we have creative ideas to make it memorable.",
            details: "Celebrate your special day with our creative birthday party planning services.",
            image: birthdayImage
        },
        {
            title: "Corporate Event",
            description: "Professional events tailored to your needs. From seminars and conferences to team-building activities, we ensure a seamless experience.",
            details: "Host successful corporate events with our comprehensive event management solutions.",
            image: corporateImage
        }
    ];
    const { serviceIndex } = useParams();
    const [selectedService, setSelectedService] = useState(null);

    const handleReadMore = (index) => {
        setSelectedService(index);
    };

    const handleReadLess = () => {
        setSelectedService(null);
    };

    return (
        <div className="container">
            <h1 className="text-center my-5">Services</h1>
            <div className="row">
                {servicesData.map((service, index) => (
                    <div key={index} className={`col-md-12 mb-4 ${selectedService !== null && selectedService !== index ? 'd-none' : ''}`}>
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={service.image} alt={service.title} className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">{service.title}</h3>
                                        <p className="card-text">{service.description}</p>
                                        {selectedService === index ? (
                                            <div>
                                                <p className="card-text">{service.details}</p>
                                                <div className="d-flex justify-content-right align-items-center">
                                                    <button className="btn btn-primary me-2" onClick={handleReadLess}>Read Less</button>
                                                    {isLoggedIn ? (
                                                        <button className="btn btn-success">
                                                            <Link to="/booking" className="nav-link">
                                                                Book Now
                                                            </Link>
                                                        </button>
                                                    ) : (
                                                        <button className="btn btn-success">
                                                            <Link to="/login" className="nav-link">
                                                                Book Now
                                                            </Link>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                        ) : (
                                            <button className="btn btn-primary me-2" onClick={() => handleReadMore(index)}>Read More</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <VenuesAvailable></VenuesAvailable>

            <CateringServices></CateringServices>
        </div>
    );
}
