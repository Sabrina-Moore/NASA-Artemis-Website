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
          sx={styles.Title}>
            NASA Apollo Missions
        </Typography>
        <Box 
       sx={styles.BoxOutline}>
            <Typography sx={styles.Heading}>
                Purpose
            </Typography>
        
            <Typography
            sx={styles.Text}>
                This is an educational resource designed to provide k-12 students and teachers an easy entry point into learning about the Apollo missions from 1961 to 1972. By using this resource, we hope that it will encourage an interest in space missions. 
            </Typography>
        </Box>
        
        <Box sx={styles.BoxOutline}>
            <Typography sx={styles.Heading}>
                Missions
            </Typography>
        
            <Typography sx={styles.Text}>
                Want to look at all of the Apollo missions or search for a specific one quickly?
            </Typography>
            <Typography sx={styles.Text}>
                Missions contains rows of mission cards detailing each Apollo mission from 
                The cards contain details like the description, outcome (whether the mission was considered succesful, failed, or cancelled) and the takeaways from successful missions.
            </Typography>
        </Box>


         <Box sx={styles.BoxOutline}>
            <Typography sx={styles.Heading}>
               Analysis
            </Typography>
        
            <Typography sx={styles.Text}
            >
                We explore the impact of STEM pathways in K-12 education on ... using data exploration and visualizations. 
            </Typography>
        </Box>


         <Box sx={styles.BoxOutline}>

            <Typography sx={styles.Heading}>
               Future Updates
            </Typography>
        
            <Typography sx={styles.Text}>
               ...
            </Typography>
        </Box>


    </>
    )
 }




 const styles = {
Title: {
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: "50px",
    lineHeight: 1.05,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#ffff",

},
Heading: {
    fontFamily: FONT,
    fontSize: "30px",
    fontWeight: 700,
    color: "#ffff",
    marginBottom: 2,

},
Text: {
    fontFamily: FONT,
    fontSize: "18px",
    color: "#ffff",
},
BoxOutline: {
    marginTop: 4,
    backgroundColor: INK,
    border: `1px solid ${PARCHMENT}`,
    borderRadius: "2px",
    p: 3,
    mb: 3,
    transition: "all 0.2s ease-in-out",
    "&:hover": { boxShadow: "0 0 10px rgba(197, 168, 128, 0.4)" }
},
}