import React from 'react';
import venue1 from './images/venue1.jpg';
import venue2 from './images/venue_1.jpg';
import venue3 from './images/venue_3.jpg';



const venuesData = [
    {
        name: "Mahalakshmi Lawns",
        address: "Karve Nagar, Pune",
        description: "A spacious and elegant venue for weddings and events.",
        image: venue2,
    },
    {
        name: "Hotel Sadanand Regency",
        address: "Balewadi, Pune",
        description: "A luxurious hotel with excellent event facilities.",
        image: venue3,
    },
    {
        name: "Grand Tamanna Hotel",
        address: "Hinjewadi, Pune",
        description: "A contemporary hotel with versatile event spaces.",
        image: venue1,
    },
];






const VenuesAvailable = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">Venues</h1>
            <div className="row">
                {venuesData.map((venue, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={venue.image}
                                alt={`${venue.name} Image`}
                                style={{ height: '200px', objectFit: 'cover' }} // Adjust image size as needed
                            />
                            <div className="card-body">
                                <h5 className="card-title">{venue.name}</h5>
                                <p className="card-text">{venue.address}</p>
                                <p className="card-text">{venue.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default VenuesAvailable;
