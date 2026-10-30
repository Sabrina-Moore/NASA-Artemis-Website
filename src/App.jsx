import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material'

import './App.css'

import HomePage from './pages/Home.jsx';
import Analysis from './pages/Analysis.jsx';
import Missions from './pages/Missions.jsx';


//make this page be for page navigation and nav bar

function App() {
  
  const [searchQuery, setSearchQuery] = useState(""); //search bar
  const [currentPage, setCurrentPage] = useState("dashboard"); //default to home page

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

return (
    <>
     <AppBar
     position="static"
      sx={{ 
      // Pitch-black terminal console color background
      backgroundColor: '#0b0c10', 
      // Rigid panel separation line across the bottom screen edge
      borderBottom: '2px solid #394454', 
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
      py: 0.5
      }} >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          px: { xs: 0, sm: 2 } 
          }}>

         {/*Title here inside typography */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 700, 
              letterSpacing: '2px', 
              color: '#ffffff',
              textTransform: 'uppercase',
              width: '120px',
            }}
          > 
            {currentPage === "dashboard"
              ? "HOME"
              : currentPage === "analysis"
              ? "ANALYSIS"
              : "Missions"}
             <span style={{ color: '#45f3ff', fontSize: '0.8rem' }}></span>
          </Typography>

          {/*Navigation pages */}
          <Box>
              <Button 
              variant={currentPage == "dashboard" ? "contained" : "outlined"}
              onClick={() => setCurrentPage("dashboard")}
              sx={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              color: '#c5a880', 
              borderColor: '#c5a880',
              borderRadius: '2px',
              px: 2,
              transition: 'all 0.2s ease-in-out',
              '&:hover': { 
                backgroundColor: '#c5a880', 
                color: '#0b0c10',
                borderColor: '#c5a880',
                boxShadow: '0 0 10px rgba(197, 168, 128, 0.4)'
              }
            }}> Home </Button>

            <Button 
              variant={currentPage == "missions" ? "contained" : "outlined"}
              onClick={() => setCurrentPage("missions")}
              sx={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              color: '#c5a880',
              borderColor: '#c5a880',
              borderRadius: '2px',
              px: 2,
              transition: 'all 0.2s ease-in-out',
              '&:hover': { 
                backgroundColor: '#c5a880', 
                color: '#0b0c10',
                borderColor: '#c5a880',
                boxShadow: '0 0 10px rgba(197, 168, 128, 0.4)'
              }
            }}> Apollo Missions </Button>
    

             <Button 
            variant={currentPage == "analysis" ? "contained" : "outlined"}
            onClick={() => setCurrentPage("analysis")}
              sx={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              color: '#c5a880',
              borderColor: '#c5a880',
              borderRadius: '2px',
              px: 2,
              transition: 'all 0.2s ease-in-out',
              '&:hover': { 
                backgroundColor: '#c5a880', 
                color: '#0b0c10',
                borderColor: '#c5a880',
                boxShadow: '0 0 10px rgba(197, 168, 128, 0.4)'
              }
            }}> Analysis </Button>
          </Box>
        </Toolbar>
      </Container>
     </AppBar>

     {/* page content */}
     <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {currentPage === "dashboard" && <HomePage />}
        {currentPage === "analysis" && (<Analysis />)}
        {currentPage === "missions" && (<Missions />)}

      </Container>
    </>
  )
}

export default App
