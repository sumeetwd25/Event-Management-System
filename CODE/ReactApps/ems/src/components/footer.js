import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

export default function FooterComponent() {
  const location = useLocation();
  const allowedRoutes = ['/', '/aboutus', '/service'];

  const shouldRenderFooter = allowedRoutes.includes(location.pathname);

  if (!shouldRenderFooter) {
    return null;
  }

  return (
    <MDBFooter bgColor='dark' className='text-left text-lg-start text-white' style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px' }}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                4S Events
              </h6>
              <p>
                Craft exceptional events that exceed expectations
                Inspire creativity and leave a lasting impact
                Deliver flawless events, whether corporate or personal
                Utilize a dedicated team and a passion for perfection
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/aboutus' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/service' className='text-reset'>
                  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <div className="text-center">
                <h6 className='text-uppercase fw-bold mb-4' style={{ marginLeft: '-4rem' }}>Contact</h6>
                <div className="mb-3" >
                  <div className="d-flex align-items-center justify-content-start">
                    <MDBIcon fas icon="map-marker-alt" className="me-3" style={{ color: 'white', fontSize: '1.2rem' }} />
                    <p className="mb-0" style={{ color: 'white', marginLeft: '-3.8rem' }}>
                      4S Events, Shivajinagar, Pune,Maharashtra
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <MDBIcon icon="envelope" className="me-3" style={{ color: 'white', fontSize: '1.2rem' }} />
                    <p className="mb-0" style={{ color: 'white' }}>
                      4seventmgmtservices@gmail.com
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <MDBIcon icon="phone" className="me-3" style={{ color: 'white', fontSize: '1.2rem' }} />
                  <p className="mb-0" style={{ color: 'white', marginLeft: '0rem' }}>
                    +91 9689483207,<br></br>
                    +91 8329496964,<br></br>
                    +91 9370530085
                  </p>
                </div>
              </div>
            </MDBCol>


          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/' style={{ color: 'white' }}>
          4S Events
        </a>
      </div>
    </MDBFooter>

  );
}