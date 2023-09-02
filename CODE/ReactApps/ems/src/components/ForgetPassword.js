import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "to": email,
            "subject": "4S Events",
            "body": "This is a test email sent from the application."
        };

        try {
            const response = await axios.post('http://localhost:8080/send-email', data);

            if (response.data !== null) {
                console.log('Email sent:', response.data);
                // alert("Email Sent")
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Please check the email to get the password'
                }); setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            }
            else {
                alert("Email not found")
            }

        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Forget Password</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Send Email
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;
