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
          sx={styles.Title}>
            STEM Pathways are Important to 
        </Typography>
        <Box 
            sx={styles.BoxOutline}>
            <Typography
             sx={styles.Heading}>
                Hypothesis
            </Typography>
        
        </Box>
        
        <Box sx={styles.BoxOutline}>

            <Typography
             sx={styles.Heading}>
                Data
            </Typography>
        
            <Typography  
            sx={styles.Text}>
               Datasets
            </Typography>
        </Box>


         <Box
            sx={styles.BoxOutline}>

            <Typography
             sx={styles.Heading}>
               Analysis
            </Typography>
        
            <Typography  sx={ styles.Text} >
               Discussion
            </Typography>
        </Box>

         <Box sx={styles.BoxOutline}>

            <Typography
             sx={styles.Heading}>
               Conclusion
            </Typography>
        
            <Typography  
            sx={styles.Text}>
               Discussion
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