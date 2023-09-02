import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import qrcode from './images/Payment.jpg'

const PaymentComponent = () => {

    // Get the email_id from SessionStorage
    const emailId = sessionStorage.getItem('email_id');

    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

        // If not logged in, redirect to login page
        if (!isLoggedIn) {
            navigate('/login'); // Replace '/login' with the actual login route
        }
    }, [navigate]);




    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const eventId = queryParams.get('eventId');

    const [paymentDetails, setPaymentDetails] = useState(null);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    // }, [isPaymentSuccessful, navigate]);

    useEffect(() => {
        // Fetch payment details based on the event_id prop
        axios.get(`http://localhost:8080/payment/${eventId}`)
            .then(response => {
                setPaymentDetails(response.data);
                console.log(paymentDetails);
            })
            .catch(error => {
                console.error('Error fetching payment details:', error);
            });
    }, [eventId]);

    const handlePayNow = () => {
        // Simulate payment processing
        setTimeout(() => {
            setIsPaymentSuccessful(true);
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <div className="payment-container border p-4 text-center">
                <h2>Payment Summary</h2>
                {paymentDetails ? (
                    <>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <caption>Payment Summary</caption>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Amount (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paymentDetails ? (
                                        <>
                                            <tr>
                                                <td>Total Venue Cost</td>
                                                <td>{paymentDetails.venue_amt}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Catering Cost</td>
                                                <td>{paymentDetails.catering_amt}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Media Cost</td>
                                                <td>{paymentDetails.media_amt}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Decoration Cost</td>
                                                <td>{paymentDetails.decoration_amt}</td>
                                            </tr>
                                            <tr>
                                                <td className="total">Total Amount</td>
                                                <td className="total">{paymentDetails.total}</td>
                                            </tr>
                                            <tr>
                                                <td>Payment Status</td>
                                                <td>{paymentDetails.status}</td>
                                            </tr>
                                        </>
                                    ) : (
                                        <tr>
                                            <td colSpan="2">Loading payment details...</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {emailId !== '4seventmgmtservices@gmail.com' && (
                                <div>
                                    <p>Make your payment here</p>
                                    <img src={qrcode} alt="QR Code" />
                                </div>
                            )}
                        </div>

                    </>
                ) : (
                    <p>Loading payment details...</p>
                )}
                {/* {!isPaymentSuccessful ? (
                    <button className="btn btn-primary pay-button" onClick={handlePayNow}>
                        Pay Now
                    </button>
                ) : (
                    <p className="payment-success text-success font-weight-bold">Payment Successful!</p>
                )} */}
            </div>
        </div>
    );
};

export default PaymentComponent;
