import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import loginBackground from './images/loginbackground.jpeg';
import Swal from 'sweetalert2';

export default function LoginComponent() {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundImage: `url(${loginBackground})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    width: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleLogin = async (e) => {

    e.preventDefault();


    const loginData = {
      "email_id": email,        //Always use double quotes while using DTO
      "password": password,     //Keys name should always match with Bean variable names
    };
    // sessionStorage['email_id']=email;
    //sessionStorage['password']=password;

    console.log("isLoggedIn status:", isLoggedIn);

    console.log(loginData);

    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/login/`, loginData);
      if (response.data) {
        setIsLoggedIn(true);

        console.log("response.data: ", response.data);
        sessionStorage.setItem("email_id", email);
        sessionStorage.setItem("isLoggedIn", "true");
        // Handle successful login response
        console.log(loginData);
        console.log(sessionStorage);

        if (loginData.email_id === "4seventmgmtservices@gmail.com") {
          navigate('/adminprofile');
        }
        // alert('Login successful');
        else {
          navigate('/profile');
        }
      } // Navigate to the desired route after successful login
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // alert('Login failed: Wrong credentials');
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: ' Wrong credentials.'
        });
        setTimeout(() => {
        }, 2000);
        console.log(loginData);
      } else {
        // alert('Login failed. Kindly register first');
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: ' Wrong credentials.'
        });
        setTimeout(() => {
        }, 2000);
        console.log(loginData);
      }
      console.error(error);
    }
  };


  useEffect(() => {
    console.log(sessionStorage);
  }, [isLoggedIn]);



  const handleLogout = () => {
    sessionStorage.removeItem('email_id'); // Remove email from session storage
    // sessionStorage.removeItem('password'); // Remove password from session storage
    // setIsLoggedIn(false); // Set login status to false
    sessionStorage.setItem("isLoggedIn", "false");

    console.log(sessionStorage);

  };


  return (
    <div style={containerStyle}>
      <div className="card p-4" style={cardStyle}>
        <h2 className="card-title text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </div>



          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
        </form>
        {isLoggedIn && (
          <div className="text-center mt-3">
            <p>
              Welcome! You are logged in.
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </p>
            <p>
              <Link to="/profile">Profile</Link>
            </p>
          </div>
        )}
        {!isLoggedIn && (
          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <p>
              <Link to="/forgetpassword">Forgot Password</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}