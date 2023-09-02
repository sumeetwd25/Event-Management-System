import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function AdminProfileComponent() {

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('email_id'); // Remove email from session storage
    sessionStorage.setItem("isLoggedIn", "false");

    console.log(sessionStorage);

    // alert("Logout successfull")
    navigate('/login');


  };

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      navigate('/login'); // Replace '/login' with the actual login route
    }
  }, [navigate]);



  // Inside the ProfileComponent function
  const [selectedBookingDetails, setSelectedBookingDetails] = useState(null);


  const [bookingData, setBookingData] = useState([]);
  const [userData, setUserData] = useState({});

  const email_id = sessionStorage.getItem('email_id');
  console.log(email_id);
  console.log(sessionStorage);


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
    { label: 'Mahalakshmi Lawns,Karve Nagar,Pune', value: 'Mahalakshmi Lawns,Karve Nagar,Pune' },
    { label: 'Hotel Sadanand Regency,Balewadi,Pune', value: 'Hotel Sadanand Regency,Balewadi,Pune' },
    { label: 'Grand Tamanna Hotel,Hinjewadi,Pune', value: 'Grand Tamanna Hotel,Hinjewadi,Pune' },
    // { label: 'Other', value: 'other' }
  ];

  const cateringOptions = [
    { label: 'Indian', value: 'Indian' },
    { label: 'Continental', value: 'Continental' },
    // { label: 'Other', value: 'other' }
  ];

  const decorationOptions = [
    { label: 'Floral decoration', value: 'Floral Decoration' },
    { label: 'Balloon decoration', value: 'Balloon Decoration' },
    // { label: 'Other', value: 'other' }
  ];

  const mediaOptions = [
    { label: 'Photography', value: 'Photography' },
    { label: 'Videography', value: 'Videography' },
    { label: 'Drone Photography', value: 'Drone Photography' }
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



  // const handleMediaChange = (value) => {
  //   if (selectedMedia.includes(value)) {
  //     setSelectedMedia(prevSelected => prevSelected.filter(item => item !== value));
  //   } else {
  //     setSelectedMedia(prevSelected => [...prevSelected, value]);
  //   }
  // };

  useEffect(() => {
    // Make the Axios GET request when the component mounts
    axios.get(`http://localhost:8080/accounts/${email_id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        // alert(error)
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  useEffect(() => {
    // Make the Axios GET request when the component mounts
    axios.get(`http://localhost:8080/bookings/`)
      .then(response => {
        setBookingData(response.data);
        console.log(bookingData)
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        alert(error)
        console.log(bookingData)

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

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [superId, setSuperId] = useState(0);

  function handleEdit(event_id) {
    console.log(parseInt(event_id));

    setSuperId(parseInt(event_id));
    console.log(superId);

    setIsEditing(true); // Show the edit form when "Edit" is clicked
    // Fetch the existing booking data and populate the form


    // Find the booking data for the selected event_id
    const selectedBooking = bookingData.find(booking => booking.event_id === event_id);

    console.log(selectedBooking)


    // Set the selected booking details to display
    setSelectedBookingDetails(selectedBooking);



    // Populate the edit form with the selected booking data
    setEditFormData(
      {
        "event_name": event_name,
        "start_time": selectedBooking.start_time,
        "end_time": selectedBooking.end_time,
        "date": selectedBooking.date,
        "exp_attendee": selectedBooking.exp_attendee,
        "venue": {
          "venue_id": selectedBooking.venue.venue_id,
          "name": selectedBooking.venue,
          "address": "",
          "location": ""

        },
        "catering": {
          "catering_id": selectedBooking.catering.catering_id,
          "menu": selectedCatering
        },
        "decoration": {
          "decoration_id": selectedBooking.decoration.decoration_id,
          "decor_type": selectedDecoration
        },
        "media": {
          "media_id": selectedBooking.media.media_id,
          "media_type": selectedMedia
        },
        "email_id": selectedBooking.email_id
      }
    );





  };




  const handleEditFormChange = event => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };


  const handleSubmit = async (event) => {
    // console.log(event)
    event.preventDefault();


    console.log(bookingData);
    console.log(parseInt(bookingData[0].event_id));
    console.log(editFormData);
    console.log(superId);


    axios.put(`http://localhost:8080/bookings/update/${superId}`, editFormData)
      .then(response => {
        console.log("Booking updated", response.data);
        // alert("Event updated successfully")
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Event Updated Successfully.'
        });
        setTimeout(() => {
          // window.location.reload();
        }, 2000);
        console.log(editFormData);
        window.location.reload();

      })
      .catch(error => {
        console.error("Error updating booking", error);
        alert(error)
        console.log(editFormData);

      });


  };


  const [eventToDelete, setEventToDelete] = useState(null);
  console.log(eventToDelete);
  const handleDelete = (event_id) => {
    axios.delete(`http://localhost:8080/bookings/delete/${event_id}`)
      .then(response => {
        console.log("Event deleted", response.data);
        // After successful deletion, you might want to refresh the booking data
        // You can call the API request again to fetch the updated data

        // alert("Kindly refresh your page to view updated profile")
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Event Deleted Successfully.'
        });
        setTimeout(() => {
        }, 2000);
        window.location.reload();
      })
      .catch(error => {
        console.error("Error deleting event", error);
        // alert(error);
      });
  };



  const [custData, setCustData] = useState({});
  function custDataHandler(email_id) {
    axios.get(`http://localhost:8080/accounts/${email_id}`)
      .then(response => {
        setCustData(response.data);
        console.log(custData);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        // alert(error)
      });
  }









  return (
    <div className="profile">
      <h2>Profile Information</h2>
      <p><b>Name:</b> {userData.name}</p>
      <p><b>Email:</b> {userData.email_id}</p>
      <p><b>Mobile:</b> {userData.mob_no}</p>

      <div>



        <table class="table table-hover">


          <thead>
            <tr>
              <th scope="col">Sr No</th>
              {/* <th scope="col">Customer Name</th> */}
              <th scope="col">Booked Events</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th>Details</th>
              <th>Payment Details</th>
              <th>Payment Status</th>
            </tr>
          </thead>


          <tbody>
            {bookingData.map((bData, index) => (
              <tr key={bData.event_id}>
                <th scope="row">{index + 1}</th>
                {/* <td>{custData.name}</td> */}
                <td>{bData.event_name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleEdit(bData.event_id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        setEventToDelete(bData.event_id);
                        // handleDelete(bData.event_id);
                      }}
                    >
                      Delete
                    </button>
                  </td>

                </td>
                <td> <button type="button" className="btn btn-info" onClick={() => {
                  setSelectedBookingDetails(bData);
                  custDataHandler(bData.email_id);
                }}>
                  Show Details
                </button></td>

                <td> <button type="button" className="btn btn-primary" onClick={() => {
                  navigate(`/payment?eventId=${bData.event_id}`);
                }}>
                  Payment Details
                </button></td>

                <td> <button type="button" className="btn btn-light" onClick={() => {
                  navigate(`/paymentstatus?eventId=${bData.event_id}`);
                }}>
                  Change Status
                </button></td>

              </tr>
            ))}

          </tbody>
        </table>


        {eventToDelete && (
          <div className="delete-confirmation">
            <p>Are you sure you want to delete this event?</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                handleDelete(eventToDelete);
                setEventToDelete(null); // Clear the eventToDelete state after deletion
              }}
            >
              Confirm Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEventToDelete(null)} // Clear the eventToDelete state
            >
              Cancel
            </button>
          </div>
        )}


      </div>



      {/* Render the selected booking details */}
      {selectedBookingDetails && (
        <div className="selected-booking-details">
          <h3><center>Booking Details</center></h3>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <td><b>Event Name:</b></td>
                <td>{selectedBookingDetails.event_name}</td>
              </tr>
              <tr>
                <td><b>Date:</b></td>
                <td>{selectedBookingDetails.date}</td>
              </tr>
              <tr>
                <td><b>Start Time:</b></td>
                <td>{selectedBookingDetails.start_time}</td>
              </tr>
              <tr>
                <td><b>End Time:</b></td>
                <td>{selectedBookingDetails.end_time}</td>
              </tr>
              <tr>
                <td><b>Expected Attendees:</b></td>
                <td>{selectedBookingDetails.exp_attendee}</td>
              </tr>
              <tr>
                <td><b>Venue:</b></td>
                <td>{selectedBookingDetails.venue.name}</td>
              </tr>
              <tr>
                <td><b>Catering Services:</b></td>
                <td>{selectedBookingDetails.catering.menu}</td>
              </tr>
              <tr>
                <td><b>Decoration Services:</b></td>
                <td>{selectedBookingDetails.decoration.decor_type}</td>
              </tr>
              <tr>
                <td><b>Media Services:</b></td>
                <td>{selectedBookingDetails.media.media_type}</td>
              </tr>
              <tr>
                <td><b>Email Id:</b></td>
                <td>{selectedBookingDetails.email_id}</td>
              </tr>
              <tr>
                <td><b>Customer Name:</b></td>
                <td>{custData.name}</td>
              </tr>
              <tr>
                <td><b>Mobile number:</b></td>
                <td>{custData.mob_no}</td>
              </tr>
              {/* Add more rows for other details as needed */}
            </tbody>
          </table>
        </div>
      )}




      {isEditing && (
        <div className="edit-form" onChange={handleEditFormChange}>
          <h3>Update Booking Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="event_name" className="form-label"><b>Event Name:</b></label>
              <input type="text" className="form-control" id="event_name" name="event_name" value={event_name} onChange={(e) => setevent_name(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label"><b>Date:</b></label>
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
                <label htmlFor="start_time" className="form-label"><b>Start Time:</b></label>
                <input type="time" className="form-control" id="start_time" name="start_time" value={start_time} onChange={(e) => setstart_time(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="end_time" className="form-label"><b>End Time:</b></label>
                <input type="time" className="form-control" id="end_time" name="end_time" value={end_time} onChange={(e) => setend_time(e.target.value)} required />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exp_attendee" className="form-label"><b>Expected Attendees:</b></label>
              <input type="number" className="form-control" id="exp_attendee" name="exp_attendee" value={exp_attendee} onChange={(e) => setexp_attendee(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="venue" className="form-label">Venue:</label>
              <select className="form-select" id="venue" name="venue" value={selectedVenue} onChange={(e) => handleVenueChange(e.target.value)} required>
                <option value=""><b>Select a Venue</b></option>
                {venueOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            {/* {selectedVenue === 'other' && (
              <div>
                <h5>Custom Venue Details</h5>
                <div className="mb-3">
                  <label htmlFor="venueName" className="form-label"><b>Venue Name:</b></label>
                  <input type="text" className="form-control" id="venueName" name="venueName" value={customVenue.venueName} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label"><b>Address:</b></label>
                  <input type="text" className="form-control" id="address" name="address" value={customVenue.address} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label"><b>Location:</b></label>
                  <input type="text" className="form-control" id="location" name="location" value={customVenue.location} onChange={handleInputChange} required />
                </div>
              </div>
            )} */}

            <div className="mb-3">
              <label htmlFor="catering" className="form-label"><b>Catering:</b></label>
              <select className="form-select" id="catering" name="catering" value={selectedCatering} onChange={(e) => setSelectedCatering(e.target.value)} required>
                <option value=""><b>Select Catering</b></option>
                {cateringOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            {/* {selectedCatering === 'other' && (
              <div className="mb-3">
                <label htmlFor="customCatering" className="form-label"><b>Your Choice:</b></label>
                <input type="text" className="form-control" id="customCatering" name="customCatering" value={customCatering} onChange={(e) => setCustomCatering(e.target.value)} required />
              </div>
            )} */}

            <div className="mb-3">
              <label htmlFor="decoration" className="form-label"><b>Decoration:</b></label>
              <select className="form-select" id="decoration" name="decoration" value={selectedDecoration} onChange={(e) => setSelectedDecoration(e.target.value)} required>
                <option value=""><b>Select Decoration</b></option>
                {decorationOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            {/* {selectedDecoration === 'other' && (
              <div className="mb-3">
                <label htmlFor="customDecoration" className="form-label"><b>Your Choice:</b></label>
                <input type="text" className="form-control" id="customDecoration" name="customDecoration" value={customDecoration} onChange={(e) => setCustomDecoration(e.target.value)} required />
              </div>
            )} */}

            <div className="mb-3">
              <label className="form-label"><b>Media:</b></label>
              <select className="form-select" id="media" name="media" value={selectedMedia} onChange={(e) => setSelectedMedia(e.target.value)} required>
                <option value=""><b>Select Media</b></option>
                {mediaOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="email_id" className="form-label">Email Id:</label>
              <input type="text" className="form-control" id="email_id" name="email_id" value={email_id} onChange={(e) => setEmail_id(e.target.value)} required />
            </div> */}

            <button type="submit" className="btn btn-success">Update</button>
          </form>
        </div>
      )}


      <div className="text-center mt-3">
        <button className="btn btn-warning" onClick={handleLogout}>
          Logout
        </button>
        <span className="mx-2"></span> {/* Adding spacing */}
        <button className="btn btn-success">
          <Link to="/booking" className="nav-link">
            Book Now
          </Link>
        </button>
      </div>
    </div>

  );
}

export default AdminProfileComponent;
