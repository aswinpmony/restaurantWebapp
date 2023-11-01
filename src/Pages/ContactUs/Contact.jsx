import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';

const ContactUsPage = () => {
  const founderImage = require('../../assets/founder.jpeg');
  const cofounderImage = require('../../assets/cofounder.jpeg');

  const paperStyle = {
    padding: '20px',
    textAlign: 'center',
    background: '#FED801',
  };

  return (
    <Container>
      <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
        <Typography variant="h1" gutterBottom style={{ color: '#333' }}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={paperStyle}>
              <Typography variant="h2" style={{ color: '#007BFF' }}>
                Founder
              </Typography>
              <img src={founderImage} alt="Founder" style={{ maxWidth: '100%' }} />
              <Typography variant="h5">Richard Nei</Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={paperStyle}>
              <Typography variant="h2" style={{ color: '#007BFF' }}>
                Co-Founder
              </Typography>
              <img src={cofounderImage} alt="Co-Founder" style={{ maxWidth: '100%' }} />
              <Typography variant="h5">Antonio Ami</Typography>
              
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUsPage;
