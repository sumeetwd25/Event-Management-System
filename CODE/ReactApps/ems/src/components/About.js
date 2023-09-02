
import React from 'react';
import sumeet from './images/sumeet.jpg';
import sujit from './images/sujit.jpg';
import sumedh from './images/sumedh.jpg';
import sushant from './images/sushant.jpg';
import introbackground from './images/introbackground.jpg';

const AboutUsComponent = () => {

  return (
    <div>
      <div className="image-aboutus-banner" style={{ marginTop: '70px', backgroundImage: `url(${introbackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '100px 0', color: 'black', opacity: 1 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text" style={{ fontWeight: 'bold', color: 'black' }}>About Us</h1>
              <p className="image-aboutus-para" style={{ color: 'black', fontWeight: 'bold' }}>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bread-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-4"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="aboutus-secktion paddingTB60">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">Who we are <br /> and what we do</h1>
            </div>
            <div className="col-md-6">
              <p>
                4S Events is a dynamic and innovative Event Management Company that thrives on turning visions into extraordinary realities. With a keen eye for detail and a passion for creativity, we specialize in curating exceptional experiences that leave a lasting impact. Our dedicated team works tirelessly to exceed expectations, ensuring every event, whether it's a corporate gathering, a grand wedding, or a community celebration, is flawlessly executed.
              </p>
              <p>
                At 4S Events, we don't just organize events; we craft unforgettable memories, transforming ideas into immersive experiences that bring people together and create moments to be cherished.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mission */}
      <section className="py-5" style={{ backgroundColor: 'lightgrey' }}>
        <div className="text-center">
          <h2>Our Mission</h2>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <ul className="mission-bullet-points">
              <li>Provide innovative event solutions that exceed expectations</li>
              <li>Inspire creativity and leave a lasting impact</li>
              <li>Deliver flawless events, whether it's a corporate conference, a grand wedding, or a community celebration</li>
              <li>Utilize a dedicated team and a passion for perfection</li>
              <li>Turn your ideas into unforgettable experiences that bring people together</li>
              <li>Create memories to cherish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-5">
        <h2 className="text-center">Our Team</h2>
        <p>
          <center>Step into the world of our event management team, where dreams are woven into reality. Our dedicated professionals are the magic-makers behind every awe-inspiring occasion. With unwavering passion and tireless dedication, we bring your visions to life, turning them into unforgettable memories. From meticulous planning to flawless execution, our team works tirelessly to ensure that every detail is perfect, and every moment is extraordinary. Join us on this journey of turning your imagination into an unforgettable event that will be etched in your heart forever.</center><br></br>
        </p>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="card mb-4 d-flex flex-column text-center" style={{ border: 'none' }}>
              <img src={sumeet} className="card-img-top rounded-circle" alt="Sumeet Wadile" />
              <div className="card-body">
                <h5 className="card-title">Sumeet Wadile</h5>
                <p className="card-text">Admin</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 d-flex flex-column text-center" style={{ border: 'none' }}>
              <img src={sujit} className="card-img-top rounded-circle" alt="Sujit Pawar" />
              <div className="card-body">
                <h5 className="card-title">Sujit Pawar</h5>
                <p className="card-text">Admin</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 d-flex flex-column text-center" style={{ border: 'none' }}>
              <img src={sumedh} className="card-img-top rounded-circle" alt="Sumedh Shingade" />
              <div className="card-body">
                <h5 className="card-title">Sumedh Shingade</h5>
                <p className="card-text">Admin</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4 d-flex flex-column text-center" style={{ border: 'none' }}>
              <img src={sushant} className="card-img-top rounded-circle" alt="Sushant Pawar" />
              <div className="card-body">
                <h5 className="card-title">Sushant Pawar</h5>
                <p className="card-text">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsComponent;