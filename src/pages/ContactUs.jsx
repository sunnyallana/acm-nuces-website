import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Grid, 
  Box,
  ThemeProvider,
  createTheme,
  Paper,
  Divider,
  CircularProgress
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#006b82', // Retaining original color theme
    },
  },
});

export default function ContactUs() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', minHeight: '100vh', p: 4, pl: 10 }}>
        
        {/* Get in Touch Section */}
        <Paper elevation={3} sx={{ mb: 4, p: 3, backgroundColor: 'primary.main', color: 'white' }}>
          <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Get in Touch
          </Typography>
          <Divider sx={{ backgroundColor: 'white', my: 2 }} />
          <Typography variant="h5" align="center">
            We're here to help and answer any questions you might have
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4, height: 0, paddingBottom: '56.25%', position: 'relative' }}>
              {!mapLoaded && (
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f0f0f0' }}>
                  <CircularProgress />
                </Box>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.203336047934!2d67.26210887401167!3d24.856903945402394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1727465448702!5m2!1sen!2s"
                style={{
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)} // Set loaded state when the map is ready
              ></iframe>
            </Box>
            <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, mb: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.015)', boxShadow: 6 } }}>
              <CardHeader
                title="Location Details"
                sx={{ bgcolor: 'primary.main', color: 'white' }}
              />
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    St-4, Sector 17-D, NH 5, Karachi, Karachi City, Sindh
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">(021) 111 128 128</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">info.khi@nu.edu.pk</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ mb: 4, borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.015)', boxShadow: 6 } }}>
              <CardHeader
                title="ACM NUCES Secretary"
                sx={{ bgcolor: 'primary.main', color: 'white' }}
              />
              <CardContent>
                <Typography variant="body1" gutterBottom><strong>Name:</strong> Neeraj Otwani</Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">+92 322 288 3752</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">K213223@nu.edu.pk</Typography>
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ mb: 4, borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.015)', boxShadow: 6 } }}>
              <CardHeader
                title="ACM NUCES President"
                sx={{ bgcolor: 'primary.main', color: 'white' }}
              />
              <CardContent>
                <Typography variant="body1" gutterBottom><strong>Name:</strong> Hassaan Shahid</Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">+92 311 248 7725</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">K213177@nu.edu.pk</Typography>
                </Box>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ mb: 4, borderRadius: 2, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.015)', boxShadow: 6 } }}>
              <CardHeader
                title="ACM NUCES Vice President"
                sx={{ bgcolor: 'primary.main', color: 'white' }}
              />
              <CardContent>
                <Typography variant="body1" gutterBottom><strong>Name:</strong> Rahim Khan</Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">+92 336 392 7036</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">K214536@nu.edu.pk</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}