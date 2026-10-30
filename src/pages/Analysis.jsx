import {Box, Typography} from '@mui/material';

const FONT = "'Space Grotesk', sans-serif";
const PARCHMENT = "#c5a880";
const CYAN = "#45f3ff";
const INK = "#0b0c10";


export default function Analysis() {

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
            STEM Pathways are Important to 
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
            fontSize: "40px",
            color: "#ffff",
            marginBottom: 2,
            }}>
                Hypothesis
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
            fontSize: "40px",
            color: "#ffff",
            marginBottom: 2,
            }}>
                Data
            </Typography>
        
            <Typography  
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            marginBottom: 2,
            }}>
               Datasets
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
            fontSize: "40px",
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
               Discussion
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
            fontSize: "40px",
            color: "#ffff",
            marginBottom: 2,
            }}>
               Conclusion
            </Typography>
        
            <Typography  
            sx={{ fontFamily: FONT,
            fontSize: "18px",
            color: "#ffff",
            }}>
               Discussion
            </Typography>
        </Box>



    </>
    )
 }
