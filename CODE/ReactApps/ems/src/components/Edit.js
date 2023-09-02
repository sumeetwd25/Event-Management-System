import React, { useState, useEffect } from "react";
import axios from "axios";


function EditComponent() {


    const [bookingData, setBookingData] = useState([]);
    const [newData, setNewData] = useState({});

    const [userData, setUserData] = useState({});

    const email_id = "abc@ems";


    const [event_name, setevent_name] = useState('');
    const [date, setDate] = useState('');
    const [start_time, setstart_time] = useState('');
    const [end_time, setend_time] = useState('');
    const [exp_attendee, setexp_attendee] = useState('');

    const [selectedVenue, setSelectedVenue] = useState('');
    const [customVenue, setCustomVenue] = useState({
        venueName: '',
        address: '',
        location: ''
    });

    const [selectedCatering, setSelectedCatering] = useState('');
    const [customCatering, setCustomCatering] = useState('');

    const [selectedDecoration, setSelectedDecoration] = useState('');
    const [customDecoration, setCustomDecoration] = useState('');

    const [selectedMedia, setSelectedMedia] = useState('');

    const venueOptions = [
        { label: 'Venue A', value: 'venue_a' },
        { label: 'Venue B', value: 'venue_b' },
        { label: 'Venue C', value: 'venue_c' },
        { label: 'Other', value: 'other' }
    ];

    const cateringOptions = [
        { label: 'Indian', value: 'indian' },
        { label: 'Continental', value: 'continental' },
        { label: 'Other', value: 'other' }
    ];

    const decorationOptions = [
        { label: 'Floral decoration', value: 'floral' },
        { label: 'Balloon decoration', value: 'balloon' },
        { label: 'Other', value: 'other' }
    ];

    const mediaOptions = [
        { label: 'Photography', value: 'photography' },
        { label: 'Videography', value: 'videography' },
        { label: 'Drone Photography', value: 'drone' }
    ];

    const handleVenueChange = (value) => {
        setSelectedVenue(value);
        if (value !== 'other') {
            setCustomVenue({
                venueName: '',
                address: '',
                location: ''
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCustomVenue((prevVenue) => ({
            ...prevVenue,
            [name]: value
        }));
    };



    const handleMediaChange = (value) => {
        if (selectedMedia.includes(value)) {
            setSelectedMedia(prevSelected => prevSelected.filter(item => item !== value));
        } else {
            setSelectedMedia(prevSelected => [...prevSelected, value]);
        }
    };

    useEffect(() => {
        // Make the Axios GET request when the component mounts
        axios.get(`http://localhost:8080/accounts/${email_id}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    useEffect(() => {
        // Make the Axios GET request when the component mounts
        axios.get(`http://localhost:8080/bookings/email/${email_id}`)
            .then(response => {
                setBookingData(response.data);
                console.log(bookingData)
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once



    const [editFormData, setEditFormData] = useState(
        {
            "event_name": "",
            "start_time": "",
            "end_time": "",
            "date": "",
            "exp_attendee": "",
            "venue": {
                "venue_id": "",
                "name": "",
                "address": "",
                "location": "",
            },
            "catering": {
                "catering_id": "",
                "menu": ""
            },
            "decoration": {
                "decoration_id": "",
                "decor_type": ""
            },
            "media": {
                "media_id": "",
                "media_type": ""
            },
            "email_id": ""
        }

    );

    const [superId, setSuperId] = useState(0);
    const selectedBooking = {}

    function handleEdit(event_id) {
        console.log(parseInt(event_id));

        setSuperId(parseInt(event_id));
        console.log(superId);




        // Find the booking data for the selected event_id
        selectedBooking = bookingData.find(booking => booking.event_id === event_id);

        console.log(selectedBooking)

        // Populate the edit form with the selected booking data




    };

    // newBooking = bookingData.find(booking => booking.event_id === superId);

    // newData = {
    //     "event_name": event_name,
    //     "start_time": start_time,
    //     "end_time": end_time,
    //     "date": date,
    //     "exp_attendee": exp_attendee,
    //     "venue": {
    //         "venue_id": newBooking.venue.venue_id,
    //         "name": selectedVenue,
    //         "address": "",
    //         "location": "",
    //     },
    //     "catering": {
    //         "catering_id": newBooking.catering.catering_id,
    //         "menu": selectedCatering
    //     },
    //     "decoration": {
    //         "decoration_id": newBooking.decoration.catering_id,
    //         "decor_type": selectedDecoration
    //     },
    //     "media": {
    //         "media_id": newBooking.media.media_id,
    //         "media_type": selectedMedia
    //     },
    //     "email_id": newBooking.email_id
    // }







    const handleSubmit = async (event) => {
        // console.log(event)
        event.preventDefault();


        console.log(bookingData);
        console.log(parseInt(bookingData[0].event_id));
        console.log(newData);
        console.log(superId);


        axios.put(`http://localhost:8080/bookings/update/${superId}`, newData)
            .then(response => {
                console.log("Booking updated", response.data);
                alert("Event updated successfully")
                console.log(newData);

            })
            .catch(error => {
                console.error("Error updating booking", error);
                alert(error)
                console.log(newData);

            });


    };

    return (
        <div className="profile">
            <h2>Profile Information</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email_id}</p>
            <p>Mobile: {userData.mob_no}</p>

            <div>
                <table class="table table-hover">


                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Booked Events</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            <th>Details</th>
                        </tr>
                    </thead>


                    <tbody>
                        {bookingData.map((bData, index) => (
                            <tr key={bData.event_id}>
                                <th scope="row">{index + 1}</th>
                                <td>{bData.event_name}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => handleEdit(bData.event_id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                                

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


            <div className="edit-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="event_name" className="form-label">Event Name:</label>
                        <input type="text" className="form-control" id="event_name" name="event_name" value={event_name} onChange={(e) => setevent_name(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]} // Set the minimum date to the current date
                            required
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="start_time" className="form-label">Start Time:</label>
                            <input type="time" className="form-control" id="start_time" name="start_time" value={start_time} onChange={(e) => setstart_time(e.target.value)} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="end_time" className="form-label">End Time:</label>
                            <input type="time" className="form-control" id="end_time" name="end_time" value={end_time} onChange={(e) => setend_time(e.target.value)} required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exp_attendee" className="form-label">Expected Attendees:</label>
                        <input type="number" className="form-control" id="exp_attendee" name="exp_attendee" value={exp_attendee} onChange={(e) => setexp_attendee(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="venue" className="form-label">Venue:</label>
                        <select className="form-select" id="venue" name="venue" value={selectedVenue} onChange={(e) => handleVenueChange(e.target.value)} required>
                            <option value="">Select a Venue</option>
                            {venueOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    {selectedVenue === 'other' && (
                        <div>
                            <h5>Custom Venue Details</h5>
                            <div className="mb-3">
                                <label htmlFor="venueName" className="form-label">Venue Name:</label>
                                <input type="text" className="form-control" id="venueName" name="venueName" value={customVenue.venueName} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address:</label>
                                <input type="text" className="form-control" id="address" name="address" value={customVenue.address} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location:</label>
                                <input type="text" className="form-control" id="location" name="location" value={customVenue.location} onChange={handleInputChange} required />
                            </div>
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="catering" className="form-label">Catering:</label>
                        <select className="form-select" id="catering" name="catering" value={selectedCatering} onChange={(e) => setSelectedCatering(e.target.value)} required>
                            <option value="">Select Catering</option>
                            {cateringOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    {selectedCatering === 'other' && (
                        <div className="mb-3">
                            <label htmlFor="customCatering" className="form-label">Your Choice:</label>
                            <input type="text" className="form-control" id="customCatering" name="customCatering" value={customCatering} onChange={(e) => setCustomCatering(e.target.value)} required />
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="decoration" className="form-label">Decoration:</label>
                        <select className="form-select" id="decoration" name="decoration" value={selectedDecoration} onChange={(e) => setSelectedDecoration(e.target.value)} required>
                            <option value="">Select Decoration</option>
                            {decorationOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    {selectedDecoration === 'other' && (
                        <div className="mb-3">
                            <label htmlFor="customDecoration" className="form-label">Your Choice:</label>
                            <input type="text" className="form-control" id="customDecoration" name="customDecoration" value={customDecoration} onChange={(e) => setCustomDecoration(e.target.value)} required />
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label">Media:</label>
                        <select className="form-select" id="media" name="media" value={selectedMedia} onChange={(e) => setSelectedMedia(e.target.value)} required>
                            <option value="">Select Media</option>
                            {mediaOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditComponent;
