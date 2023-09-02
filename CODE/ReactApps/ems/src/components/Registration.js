import React, { useState } from 'react';
import axios from 'axios';
import registration from './images/registration.jpg';
import Swal from 'sweetalert2';

function RegistrationComponent() {

    const containerStyle = {
        backgroundImage: `url(${registration})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        mobile: '',
        terms: false
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'checkbox' ? event.target.checked : value;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: newValue,
        }));
    };

    const [confirmPassword, setConfirmPassword] = useState('');
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleRegistration = () => {

        // e.preventDefault();

        if (formValues.password !== confirmPassword) {
            // alert("Passwords do not match. Please confirm your password.");
            Swal.fire({
                icon: 'error',
                title: 'Passwords does not match.',
                text: 'Please confirm your password.'
            });
            setTimeout(() => {
            }, 2000);
            return;
        }

        // Perform form validation
        const { name, email, password, address, mobile } = formValues;
        if (!name || !email || !password || !address || !mobile) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Prepare the data object to be sent in the request
        const data = {
            email_id: formValues.email,
            name: formValues.name,
            password: formValues.password,
            address: formValues.address,
            mob_no: formValues.mobile,
            role: 'customer'
        };


        axios.get(`http://localhost:8080/accounts/`)
            .then(response => {
                console.log(response.data);

                let emailAlreadyExists = false;

                response.data.forEach((aData, index) => {
                    console.log(aData.email_id);
                    if (aData.email_id === formValues.email) {
                        // alert("This email id is already registered. Please select another email id.");
                        Swal.fire({
                            icon: 'error',
                            title: 'This email id is already registered.',
                            text: 'Please select another email id.'
                        });
                        setTimeout(() => {
                        }, 2000);
                        emailAlreadyExists = true;
                        return;
                    }
                });

                if (!emailAlreadyExists) {
                    postHandler();
                }

            })
            .catch(error => {
                console.error("Error fetching user data:", error);
                // alert(error);
            });

        function postHandler() {
            // Make the Axios POST request
            axios.post('http://localhost:8080/accounts/insert', data)
                .then(response => {
                    console.log('User created successfully:', response.data);
                    // Redirect to the desired page after successful registration
                    // alert('Registration successful!');
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registered Successfully.'
                    });
                    setTimeout(() => {
                        // window.location.href = '/login';
                    }, 2000);
                    window.location.href = '/login';
                })
                .catch(error => {
                    console.error('Error creating user:', error);
                    // Display an error message or handle the error appropriately
                });
        }



    };



    return (
        <div style={containerStyle}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="bg-white p-5 rounded shadow">
                            <div className="text-center">
                                <h3 className="text-primary"><strong>Register Now</strong></h3>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password:
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        // placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPassword}
                                    />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={formValues.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="mobile"
                                        name="mobile"
                                        value={formValues.mobile}
                                        onChange={handleChange}
                                        minLength={10} // Minimum length of 10 characters
                                        maxLength={10} // Maximum length of 10 characters
                                        required
                                    />
                                </div>

                                <div className="text-center mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-rounded w-75"
                                        onClick={handleRegistration}
                                    >
                                        Register Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationComponent;