import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Box, Container } from "@mui/system";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import {  useNavigate } from "react-router-dom";


const featured = [
  {
    display: "Guides",
    path: "/guides",
  },
  {
    display: "Services",
    path: "/services",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
];
const overview = [
  {
    display: "Location",
    path: "/location",
  },
  {
    display: "Partnerships ",
    path: "/partnerships",
  },
  {
    display: "Terms of use&Privacy Policies",
    path: "/terms",
  },
];

const Footer = () => {


  const navigate=useNavigate();


  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));
  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#66B2FF",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF682" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Featured
          </Typography>

          {featured.map((links, index) => (
            <FooterLink key={index} onClick={()=>navigate(links.path)}  >
              {links.display}
              <br />
            </FooterLink>
          ))}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          {overview.map((links, index) => (
            <FooterLink key={index} onClick={()=>navigate(links.path)}>
              {links.display}
              <br />
            </FooterLink>
          ))}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            {" "}
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Keep in touch with our social media pages
          </Typography>
          <IconBox>
          <a href="https://www.fb.com" target="_blank" rel="noopener noreferrer">
  <img src={fbIcon} alt="fbicon" style={{ cursor: "pointer" }} />
</a>

           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <img
              src={twitterIcon}
              alt="twitterIcon"
              style={{ cursor: "pointer" }}
            />
            </a> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.">
            <img
              src={instagramIcon}
              alt="Instaicon"
              style={{ cursor: "pointer" }}
            />
            </a>
            
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
