import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

function HandlerStatus() {
    const [inputData, setInputData] = useState('');
    // const [eventId, setEventId] = useState(''); // You need to set the event ID here

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const eventId = queryParams.get('eventId');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handleButtonClick = () => {
        const apiUrl = `http://localhost:8080/payment/status/${eventId}`;

        axios.put(apiUrl, inputData, {
            headers: {
                'Content-Type': 'text/plain', // Set the content type to plain text
            },
        })
            .then(response => {
                console.log('PUT request successful:', response.data);
                // Handle any success actions here
                // alert("Payment status updated.")
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Payment status updated.'
                });
                setTimeout(() => {
                    window.location.href = '/adminprofile'
                }, 2000);
            })
            .catch(error => {
                console.error('Error making PUT request:', error);
                // Handle error cases here
                alert(error)
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Update Payment Status</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter data"
                    value={inputData}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button className="btn btn-primary" onClick={handleButtonClick}>Update Status</button>
        </div>
    );
}

export default HandlerStatus;
