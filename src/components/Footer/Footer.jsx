import React from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {GrFacebook, GrLinkedin} from 'react-icons/gr';

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="justify-content-center align-items-center text-lg-start text-muted"
    >
      <section
        className="mt-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
      >
        <MDBContainer className="p-3 text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="8" lg="4" className="mb-4 mb-md-0">
              <h6 className="fw-bold mb-2 mt-2">ABOUT US</h6>
              <p>
                Rubixe™ is a global technology company specializing in
                disruptive technologies – Artificial Intelligence (AI), Machine
                Learning, Robotic Process Automation (RPA), BlockChain and
                Internet of Things (IoT). Rubixe mission to enable businesses to
                leverage the full potential of disruptive technologies to stay
                competitive in the market.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mr-2 ml-4 mb-2">
              <h6 className="fw-bold mb-2 mt-2">MENUS</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://rubixe.com/"
                    target="_blank"
                    className="text-reset"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://rubixe.com/services/"
                    target="_blank"
                    className="text-reset"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://rubixe.com/products/"
                    target="_blank"
                    className="text-reset"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="https://rubixe.com/career/"
                    target="_blank"
                    className="text-reset"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mr-2 ml-4 mb-2">
              <h6 className="fw-bold mb-2 mt-2">LEARN MORE</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    Services
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-2 mt-2">Contact</h6>
              <p>
                Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
                Karnataka 560068.
              </p>
              Phone: 0804-717-8999
              <br />
              Email: hi@rubixe.com
              <p>
                Social Media Links
                <br />
                Facebook &nbsp;
                <GrFacebook /> &nbsp; Linkedin &nbsp;
                <GrLinkedin />
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{backgroundColor: 'rgba(0, 0, 0)'}}
      >
        © Copyright 2017 - 2023
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights
          Reserved
        </a>
      </div>
    </MDBFooter>
  );
}
