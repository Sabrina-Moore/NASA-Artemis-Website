import {Box, Stack, Typography} from '@mui/material';

//analysis image import
import PISA1 from '../assets/analysis/PISA-graph-1.png';
import PISA3 from '../assets/analysis/PISA-graph-3.png';


const pisaGraphs = [
  { id: 1, src: PISA1, alt: "PISA Analysis Graph 1" },
  { id: 3, src: PISA3, alt: "PISA Analysis Graph 3" },
];


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
        <img
            src = {LandingLocations}
            alt = "Landing Locations"
            sx = {{
                width: '100%',
                height:'auto',
                display:'block',
                marginBottom:'24px',
            }}
        />
        <Box 
       sx={styles.BoxOutline}>
            <Typography sx={styles.Heading}>
                Purpose
            </Typography>
        
            <Typography
            sx={styles.Text}>
                This is an educational resource designed to provide k-12 students and teachers an easy entry point into learning about the Apollo missions from 1961 to 1972. By using this resource, we hope that it will encourage an interest in space missions and exploration.  
            </Typography>
            <Typography sx={styles.Text}>
                According to the Programme for International Student Assessment (PISA), out of 91 countries participating in its studies,
                literacy and numeracy performance in students has been dropping gradually since its peak around 2009. Science performance and spending are also linked, which higher spending improving overall science performance. Why does this matter? Lower science funding removes STEM pathways and overall disadvantages students from being able to perform, engage, and pursue science. 
                This could also change where future science talent pools are globally, moving away from the United States as a research and STEM hub.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={styles.graphRow}>
            {pisaGraphs.map((graph) => (
                <Box
                key={graph.id}
                component="img"
                src={graph.src}
                alt={graph.alt}
                sx={styles.graphItem}
                />
            ))}
            </Stack>



        </Box>
        
        <Box sx={styles.BoxOutline}>
            <Typography sx={styles.Heading}>
                Missions
            </Typography>
        
            <Typography
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
                Browse all Apollo missions from 1961 to 1972, or search for a specific one on the Apollo missions Page.
                Each mission card shows the mission name, dates, description, outcome (successful, failed, or cancelled), and key takeaways from successful missions.

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

            <Typography sx={styles.Heading}>
               Future Updates
            </Typography>
        
            <Typography  
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
                Expand the missions to include:
                Mercury missions, which were the beginning of human space travel.
                Gemini missions, which built on Mercury's lessons and developed the skills needed for Apollo.
                Artemis missions, the modern successor to Apollo and the ongoing story of space exploration.
                We would like to include an Analysis page where we explore the decline in STEM engagement 
                among K-12 students and its impact on society. Using data exploration and visualizations, 
                we examine why students are falling behind in STEM subjects and what can be done to improve 
                STEM education pathways.

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
graphItem: {
    width: 480,
    height: 320,
    objectFit: "contain", // keeps graph axes intact without cropping
    borderRadius: "2px",
    border: "1px solid #c5a880",
    flexShrink: 0, // prevents flexbox from squishing images
    transition: "transform 0.2s ease-in-out",
    "&:hover": { transform: "scale(1.04)" },
},
graphRow: {
    p: 1.5,
    overflowX: "auto",
    "&::-webkit-scrollbar": { height: "4px" },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(197, 168, 128, 0.4)",
      borderRadius: "2px",
    },
},
}