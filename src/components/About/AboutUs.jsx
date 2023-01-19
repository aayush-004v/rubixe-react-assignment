import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./AboutStyle.css";

export default function AboutUs() {
  return (
    <>
      <Box component="main" md={6} sm={12}>
        <img
          src="https://cdn.wallpapersafari.com/4/97/mjLbqz.jpg"
          alt="rubix-img"
          width="100%"
          height="auto"
        />
      </Box>
      <Container>
        <Grid container my={10} spacing={2}>
          <Grid className="rubix-aboutUs" item md={6} sm={12}>
            <Typography variant="h5" fontWeight="bold" mb={1}>
              WHO WE ARE
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              justifyContent="center"
              alignItems="center"
            >
              Rubixe is a global technology company specializing in
              disruptive technologies Artificial Intelligence (AI), Machine
              Learning, Robotic Process Automation (RPA), BlockChain and
              Internet of Things (IoT). Rubixe mission to enable businesses to
              leverage the full potential of disruptive technologies to stay
              competitive in the market.
            </Typography>

            <Typography mt={2} variant="subtitle1" fontWeight="400">
              Started in 2008, providing technology solutions based in the
              Netherlands, founders of Rubixe have gained expertise in
              cutting-edge technology through delivering several smart city
              solutions for European Commission (EC) projects.
            </Typography>
          </Grid>
          <Grid
            className="rubix-about-image"
            item
            md={6}
            sm={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="auto"
          >
            <img
              src="https://rubixe.com/assets/img/aboutus/about-us.jpg"
              alt="image1"
            />
          </Grid>
        </Grid>
      </Container>
      <Box
        style={{
          backgroundColor: "#c51162",
          color: "#ffffff"
        }}
      >
        <Container max-width="fixed">
          <Grid
            item
            md={8}
            sm={12}
            display="flex"
            flexWrap="wrap"
            mt={2}
            pt={3}
            mb={2}
            pb={3}
          >
            <Grid className="where-we-started" item md={6} sm={12} m={0} p={0}>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                WHERE WE STARTED
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="500"
                justifyContent="center"
              >
                Started in 2008, providing technology solutions based in the
                Netherlands, founders of Rubixe have gained expertise in
                cutting-edge technology through delivering several smart city
                solutions for European Commission (EC) projects.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
