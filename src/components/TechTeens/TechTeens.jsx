import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardGroup,
  MDBCardImage
} from "mdb-react-ui-kit";
import { Box } from "@mui/material";

export default function CardPilot() {
  return (
    <>
      <Box
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          color: "rgba(0, 0, 0)"
        }}
      >
        <Box>
          <h3 className="m-4 p-4">TECH FOR TEENS - A RUBIXE @ TECHNOLOGY</h3>
          <MDBCardGroup className="row-cols-1 row-cols-md-3 g-4 m-4 p-4">
            <MDBCard alignment="center">
              <MDBCardHeader
                style={{
                  backgroundColor: "#1A237E",
                  color: "#ffffff",
                  borderTopLeftRadius: "2vw",
                  borderTopRightRadius: "2vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1vw"
                }}
              >
                <h5
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    height: "3.5vw",
                    width: "3.5vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1A237E",
                    fontSize: "2vw"
                  }}
                >
                  01
                </h5>
              </MDBCardHeader>
              <MDBCardBody
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.05)"
                }}
              >
                <MDBCardTitle>
                  <MDBCardImage
                    src="https://cdn-icons-png.flaticon.com/512/1766/1766430.png"
                    alt="computer-AI-image"
                    max-width="100px"
                    style={{ margin: "30px 10px" }}
                    width="100vw"
                  />
                </MDBCardTitle>
                <MDBCardFooter>
                  Introducing AI to children in an age appropriate manner.
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
            <MDBCard alignment="center">
              <MDBCardBody
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.05)"
                }}
              >
                <MDBCardText style={{ marginTop: "20px" }}>
                  Gain awareness on AI and build an interative story around it.
                </MDBCardText>
                <MDBCardImage
                  src="https://cdn.icon-icons.com/icons2/2817/PNG/512/ai_artificial_intelligence_chip_technology_cpu_icon_179503.png"
                  alt="Build-AI-image"
                  max-width="100px"
                  style={{ margin: "50px 0px" }}
                  width="100vw"
                />
              </MDBCardBody>
              <MDBCardFooter
                style={{
                  backgroundColor: "#AD1457",
                  color: "#ffffff",
                  borderBottomLeftRadius: "2vw",
                  borderBottomRightRadius: "2vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1vw"
                }}
              >
                <h5
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    height: "3.5vw",
                    width: "3.5vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#AD1457",
                    fontSize: "2vw"
                  }}
                >
                  02
                </h5>
              </MDBCardFooter>
            </MDBCard>
            <MDBCard alignment="center">
              <MDBCardHeader
                style={{
                  backgroundColor: "#FB8C00",
                  color: "#ffffff",
                  borderTopLeftRadius: "2vw",
                  borderTopRightRadius: "2vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1vw"
                }}
              >
                <h5
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    height: "3.5vw",
                    width: "3.5vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FB8C00",
                    fontSize: "2vw"
                  }}
                >
                  03
                </h5>
              </MDBCardHeader>
              <MDBCardBody
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.05)"
                }}
              >
                <MDBCardImage
                  src="https://icon-library.com/images/icon-artificial-intelligence/icon-artificial-intelligence-18.jpg"
                  alt="Human-brain"
                  max-width="100px"
                  style={{ margin: "40px 20px" }}
                  width="100vw"
                />
                <MDBCardText>
                  Acquire programming skills in a user-friendly format
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
            <MDBCard alignment="center">
              <MDBCardBody
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.05)"
                }}
              >
                <MDBCardText style={{ marginTop: "20px" }}>
                  Exposure to mini projects on diverse topics
                </MDBCardText>
                <MDBCardImage
                  src="https://cdn-icons-png.flaticon.com/512/2666/2666404.png"
                  alt="process"
                  max-width="100px"
                  style={{ margin: "50px 10px" }}
                  width="100vw"
                />
              </MDBCardBody>
              <MDBCardFooter
                style={{
                  backgroundColor: "#1B5E20",
                  color: "#ffffff",
                  borderBottomLeftRadius: "2vw",
                  borderBottomRightRadius: "2vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1vw"
                }}
              >
                <h5
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    height: "3.5vw",
                    width: "3.5vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#1B5E20",
                    fontSize: "2vw"
                  }}
                >
                  04
                </h5>
              </MDBCardFooter>
            </MDBCard>
            <MDBCard alignment="center">
              <MDBCardHeader
                style={{
                  backgroundColor: "#F9A825",
                  color: "#ffffff",
                  borderTopLeftRadius: "2vw",
                  borderTopRightRadius: "2vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "1vw"
                }}
              >
                <h5
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    height: "3.5vw",
                    width: "3.5vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#F9A825",
                    fontSize: "2vw"
                  }}
                >
                  05
                </h5>
              </MDBCardHeader>
              <MDBCardBody
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.05)"
                }}
              >
                <MDBCardImage
                  src="https://cdn-icons-png.flaticon.com/512/3684/3684019.png"
                  alt="meeting"
                  max-width="100px"
                  style={{ margin: "50px 0px" }}
                  width="100vw"
                />
                <MDBCardText>Train the teachers programme</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
        </Box>
      </Box>
    </>
  );
}
