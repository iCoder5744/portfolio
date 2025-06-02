'use client';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Avatar
} from '@mui/material';
import {
  LinkedIn,
  Instagram,
  Facebook,
  Telegram,
  Twitter,
  Email
} from '@mui/icons-material';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedIn />, url: '#', color: '#0077b5' },
    { name: 'Instagram', icon: <Instagram />, url: '#', color: '#E4405F' },
    { name: 'Facebook', icon: <Facebook />, url: '#', color: '#1877F2' },
    { name: 'Telegram', icon: <Telegram />, url: '#', color: '#0088cc' },
    { name: 'Twitter', icon: <Twitter />, url: '#', color: '#000000' }
  ];

  return (
    <Box component="section" id="contact" sx={{ my: 10, px: 2 }}>
      <Container maxWidth="sm" >


        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={3}>
          {socialLinks.map((link, idx) => (
            <IconButton
              key={idx}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: link.color,
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                boxShadow: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  backgroundColor: '#f9f9f9'
                }
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>

        <Box textAlign="center" mb={6}>
          <Button
            component="a"
            href="mailto:shivam.coder01@gmail.com"
            variant="outlined"
            startIcon={<Email sx={{ color: '#D44638' }} />}
            sx={{
              borderColor: '#ccc',
              backgroundColor: '#fff',
              boxShadow: 2,
              textTransform: 'none',
              ':hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            shivam.coder01@gmail.com
          </Button>
        </Box>

        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            backgroundColor: 'background.paper'
          }}
        >
          <Typography variant="h5" align="center" fontWeight="bold" mb={3}>
            Contact Me
          </Typography>

          <Grid container spacing={3} direction="column">
            <Grid item>
              <TextField label="Full Name *" fullWidth required variant="outlined" />
            </Grid>
            <Grid item>
              <TextField label="Email *" fullWidth required variant="outlined" type="email" />
            </Grid>
            <Grid item>
              <TextField label="Mobile No." fullWidth variant="outlined" type="tel" />
            </Grid>
            <Grid item>
              <TextField
                label="Message *"
                fullWidth
                required
                multiline
                rows={5}
                variant="outlined"
              />
            </Grid>
          </Grid>


        </Paper>

        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Designed by Shivam Yadav
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
