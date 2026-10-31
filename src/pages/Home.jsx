import {Box, Typography} from '@mui/material';

const FONT = "'Space Grotesk', sans-serif";
const PARCHMENT = "#c5a880";
const CYAN = "#45f3ff";
const INK = "#0b0c10";


export default function HomePage() {

    return(
        <>
        <Typography
        component="h1"
          sx={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: 1.05,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#ffff",
          }}>
            NASA Apollo Missions
        </Typography>
        <Box 
        sx={{
        marginTop: 4,
        backgroundColor: INK,
        border: `1px solid ${PARCHMENT}`,
        borderRadius: "2px",
        p: 3,
        mb: 3,
        transition: "all 0.2s ease-in-out",
        "&:hover": { boxShadow: "0 0 10px rgba(197, 168, 128, 0.4)" }}}>
            <Typography
             sx={{ fontFamily: FONT,
            fontWeight: 700,
            fontSize: "30px",
            color: "#ffff",
            marginBottom: 2,
            }}>
                Purpose
            </Typography>
        
            <Typography
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
                This is an educational resource designed to provide k-12 students and teachers an easy entry point into learning about the Apollo missions from 1961 to 1972. By using this resource, we hope that it will encourage an interest in space missions. 
            </Typography>
        </Box>
        
        <Box
        sx={{
        marginTop: 4,
        backgroundColor: INK,
        border: `1px solid ${PARCHMENT}`,
        borderRadius: "2px",
        p: 3,
        mb: 3,
        transition: "all 0.2s ease-in-out",
        "&:hover": { boxShadow: "0 0 10px rgba(197, 168, 128, 0.4)" }}}>

            <Typography
             sx={{ fontFamily: FONT,
            fontWeight: 700,
            fontSize: "30px",
            color: "#ffff",
            marginBottom: 2,
            }}>
                Missions
            </Typography>
        
            <Typography  
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            marginBottom: 2,
            }}>
                Want to look at all of the Apollo missions or search for a specific one quickly?
            </Typography>
            <Typography
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
                Missions contains rows of mission cards detailing each Apollo mission from 
                The cards contain details like the description, outcome (whether the mission was considered succesful, failed, or cancelled) and the takeaways from successful missions.
            </Typography>
        </Box>


         <Box
        sx={{
        marginTop: 4,
        backgroundColor: INK,
        border: `1px solid ${PARCHMENT}`,
        borderRadius: "2px",
        p: 3,
        mb: 3,
        transition: "all 0.2s ease-in-out",
        "&:hover": { boxShadow: "0 0 10px rgba(197, 168, 128, 0.4)" }}}>

            <Typography
             sx={{ fontFamily: FONT,
            fontWeight: 700,
            fontSize: "30px",
            color: "#ffff",
            marginBottom: 2,
            }}>
               Analysis
            </Typography>
        
            <Typography  
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
                We explore the impact of STEM pathways in K-12 education on ... using data exploration and visualizations. 
            </Typography>
        </Box>


         <Box
        sx={{
        marginTop: 4,
        backgroundColor: INK,
        border: `1px solid ${PARCHMENT}`,
        borderRadius: "2px",
        p: 3,
        mb: 3,
        transition: "all 0.2s ease-in-out",
        "&:hover": { boxShadow: "0 0 10px rgba(197, 168, 128, 0.4)" }}}>

            <Typography
             sx={{ fontFamily: FONT,
            fontWeight: 700,
            fontSize: "30px",
            color: "#ffff",
            marginBottom: 2,
            }}>
               Future Updates
            </Typography>
        
            <Typography  
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
               ...
            </Typography>
        </Box>


    </>
    )
 }
