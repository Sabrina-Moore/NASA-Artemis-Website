
import {Box, CircularProgress, Container, Typography} from "@mui/material";



const FONT = "'Space Grotesk', sans-serif";
const PARCHMENT = "#c5a880";
const CYAN = "#45f3ff";
const INK = "#0b0c10";
const SUCCESS_GREEN = "#6fdc8c";
const FAILURE_RED = "#ff6b6b";

const formatDate = (value) => {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};

const labelSx = {
  fontFamily: FONT,
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: PARCHMENT,
};

const valueSx = {
  fontFamily: FONT,
  fontSize: "0.95rem",
  color: "#ffffff",
};

export default function MissionCards({ missions = [], loading = false, error = null }) {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress sx={{ color: PARCHMENT }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography sx={{ ...valueSx, color: FAILURE_RED, py: 4 }}>
        Could not load missions: {error}
      </Typography>
    );
  }

  if (missions.length === 0) {
    return (
      <Typography sx={{ ...valueSx, color: PARCHMENT, py: 4 }}>
        No missions found. Add rows to the missions table to see them here.
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
          py: 3,
        }}
      >
        {missions.map((m) => (
          <MissionCard key={m.id ?? m.mission_name} {...m} />
        ))}
      </Box>
    </Container>
  );
}
