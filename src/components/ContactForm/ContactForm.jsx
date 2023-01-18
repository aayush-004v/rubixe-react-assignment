import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn
} from "mdb-react-ui-kit";

export default function ContactForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <Box margin="0vw 5vw" padding="0vw 5vw">
      <Container
        style={{
          border: "1px solid #74b9ff",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
        }}
      >
        <Grid container my={6}>
          <Grid className="get-in-touch" item md={6} sm={12} padding={5}>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              mt={4}
              textAlign={"center"}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="500"
              justifyContent="center"
              alignItems="center"
              mb={2}
              textAlign={"center"}
            >
              Please complete the form and we will get back to you
            </Typography>
          </Grid>
          <Grid
            className="rubix-contact-form"
            item
            md={6}
            xs={12}
            display="flex"
            width="auto"
          >
            <MDBValidation className="row g-3">
              <MDBValidationItem
                className="col-md-8"
                feedback="Please provide your name"
                invalid
              >
                Name:- &nbsp;
                <MDBInput
                  value={formValue.name}
                  name="name"
                  onChange={onChange}
                  id="validationCustom05"
                  required
                  label="Enter Your Name"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-8"
                feedback="Please provide your Email"
                invalid
              >
                Email:- &nbsp;
                <MDBInput
                  value={formValue.city}
                  name="email"
                  onChange={onChange}
                  id="validationCustom03"
                  required
                  label="Enter your email address"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-8"
                feedback="Please proived your mobile number"
                invalid
              >
                Mobile Number:- &nbsp;
                <MDBInput
                  value={formValue.zip}
                  name="phone"
                  onChange={onChange}
                  id="validationCustom05"
                  required
                  label="Enter Mobile Number"
                />
              </MDBValidationItem>
              <div className="col-12">
                <MDBBtn type="submit">Register Now</MDBBtn>
              </div>
            </MDBValidation>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
