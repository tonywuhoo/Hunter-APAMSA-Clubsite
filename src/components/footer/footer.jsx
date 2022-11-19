import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./footer.css"
export default function FooterComponent() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className=''>
        <br></br>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Hunter APAMSA
              </h6>
              <p>
                Information pertaining site goes here blah blah blah....
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Connect with Us</h6>
              <p>
                <a href='https://www.instagram.com/apamsaxhunter/' className='text-reset'>
                  Instagram
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/groups/apamsaxhunter' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='#' className='text-reset'>
                  Twitter
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='resources' className='text-reset'>
                  Resources
                </a>
              </p>
              <p>
              <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
              <a href='/Newsletter' className='text-reset'>
                  Newsletter
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                695 Park Ave, New York, NY 10065
              </p>
              <p>
                dummyemail@gmail.com, will add redirect
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: &nbsp; 
        <a className='text-reset fw-bold' href='https://www.instagram.com/apamsaxhunter/?hl=en'>
          Hunter APAMSA
        </a>
      </div>
    </MDBFooter>
  );
}