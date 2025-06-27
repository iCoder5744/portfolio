'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Fab,
} from '@mui/material';
import { Download, Work } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: '#0f0f23',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: { xs: '150px', md: '200px' },
            height: { xs: '150px', md: '200px' },
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
            filter: 'blur(100px)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: { xs: '120px', md: '150px' },
            height: { xs: '120px', md: '150px' },
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3))',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />

        <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 10 }, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ mb: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                  >
                    <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
                      👋
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Typography variant="h6" sx={{ color: '#a1a1aa', mb: 1 }}>
                      Hello! I'm
                    </Typography>
                    <Typography
                      variant="h2"
                      component="h1"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2,
                      }}
                    >
                      Shivam Yadav
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#a1a1aa',
                        mb: 3,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                      }}
                    >
                      A Front End Developer | Web Designer
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 'bold',
                          mr: 1,
                        }}
                      >
                        4+ Months
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'white' }}>Experience</Typography>
                    </Box>
                  </motion.div>
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Download />}
                      href="#resume"
                      sx={{
                        borderColor: '#6366f1',
                        color: '#6366f1',
                        borderRadius: '25px',
                        px: 3,
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 600,
                        border: '2px solid',
                        borderImage: 'linear-gradient(45deg, #6366f1, #8b5cf6) 1',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                          borderColor: 'transparent',
                          color: 'white',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Resume
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        borderRadius: '25px',
                        px: 3,
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => scrollToSection('contact')}
                    >
                      Hire Me
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  {/* Glowing background */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle, rgba(255, 235, 59, 0.3) 0%, transparent 70%)',
                      borderRadius: '50%',
                      filter: 'blur(60px)',
                      zIndex: -1,
                    }}
                  />

                  <Box
                    sx={{
                      width: { xs: 250, sm: 280, md: 320 },
                      height: { xs: 250, sm: 280, md: 320 },
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      p: 0.5,
                      animation: 'pulse 2s infinite',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Image
                        src="/images/Profile.png"
                        alt="Shivam Yadav"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      </Box>
    </Box>
  );
}