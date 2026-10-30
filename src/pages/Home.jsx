import { Box, Typography, List, ListItem } from '@mui/material';


export default function Home() {
  return (
    <Box 
      sx={{ 
        color: '#ffffff', 
        maxWidth: '800px', 
        mx: 'auto', 
        mt: 6, 
        p: 4, 
        borderLeft: '3px solid #45f3ff', 
        background: 'rgba(31, 40, 51, 0.3)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 'bold' }}>
        Main page
      </Typography>
    </Box>
  );
}