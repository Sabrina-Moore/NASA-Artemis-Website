
import { Stack, Box, Card, CardContent, CardMedia, Chip, CircularProgress, Container, Divider, Typography,
} from "@mui/material";

//mission_category: test flight or human space flight
//success: success, failed, cancelled


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




const getStatus = (success) => {
  if (success === "Success") return { label: "Success", color: SUCCESS_GREEN };
  if (success === "Failed") return { label: "Failure", color: FAILURE_RED };
  if (success === "Cancelled") return { label: "Cancelled", color: FAILURE_RED };
  return { label: "Cancelled", color: PARCHMENT };
};

//need to sort 


function DateCell({ label, value, pendingText = "N/A" }) {
  const formatted = formatDate(value);
  return (
    <Box>
      <Typography sx={styles.label}>{label}</Typography>
      <Typography
        sx={{
          ...styles.value,
          color: formatted ? "#ffffff" : "rgba(255,255,255,0.35)",
          fontStyle: formatted ? "normal" : "italic",
        }}
      >
        {formatted ?? pendingText}
      </Typography>
    </Box>
  );
}

function MissionCard(props = {}) {

const missionName = props.mission_name || "Untitled Mission";
  const missionCategory = props.mission_category || "General";
  const missionDescription = props.mission_description || "No description provided.";
  const expectedLaunch = props.expected_launch || null;
  const actualLaunch = props.actual_launch || null;
  const takeaway = props.takeaway;
  const image = props.mission_images || [];

  const status = getStatus(props.success);

  return (
    <Card
      sx={{
        backgroundColor: INK,
        border: `1px solid ${PARCHMENT}`,
        borderRadius: "2px",
        color: "#ffffff",
        height: "100%",
        transition: "all 0.2s ease-in-out",
        "&:hover": { boxShadow: "0 0 10px rgba(197, 168, 128, 0.4)" },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
            mb: 2,
          }} >
            {/* name */}
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontFamily: FONT,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#ffffff",
              textTransform: "uppercase",
            }}>
            {missionName}
          </Typography>

            {/* status icon on the right corner */}
          <Chip
            label={status.label}
            size="small"
            variant="outlined"
            sx={{
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: status.color,
              borderColor: status.color,
              borderRadius: "2px",
              flexShrink: 0,
            }}/>
        </Box>

            {/* category */}
        <Typography
            variant="h6"
            component="h2"
            sx={{
            fontSize: "20px",
            fontFamily: FONT,
            fontWeight: 700,
            color: PARCHMENT,
            textTransform: "uppercase",
            textAlign: "left",
            }}>
            {missionCategory}
          </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginTop: 2,
            gap: 2,
            mb: 2,
          }}>
            {/* dates */}
            <DateCell label="Expected launch" value={expectedLaunch} />
            <DateCell label="Actual launch" value={actualLaunch} />
        </Box>

        <Divider sx={{ borderColor: "rgba(197, 168, 128, 0.3)", mb: 2 }} />

          {/* description */}
        <Typography sx={{ ...styles.label, color: CYAN, mb: 0.5 }}>
          Mission Description
        </Typography>
        <Typography
          sx={{ ...styles.value, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }} >
          {missionDescription}
        </Typography>

          {/* takeaways */}
        <Typography sx={{ ...styles.label, marginTop: 4, color: CYAN, mb: 0.5 }}>
            Takeaway
        </Typography>
        <Typography
            sx={{ ...styles.value, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
            {takeaway}
        </Typography>

          {/* images */}
        <Stack 
        direction="row" 
        spacing={1} 
        sx={{ 
            p: 1, 
            overflowX: 'auto',
            '&::-webkit-scrollbar': { height: '4px' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '2px' }
        }}>
        {image.map((img) => (
        <CardMedia
            key={img.id}
            component="img"
            image={img.image_url}
            alt={img.caption || "Mission photo"}
            title={img.caption || ""}
            sx={{
            width: 500, 
            height: 500, 
            objectFit: 'cover', 
            borderRadius: 1,
            flexShrink: 0
            }}
        />
        ))}
        </Stack>

      </CardContent>
    </Card>
  );
}

//error checking for loading supabase
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
      <Typography sx={{ ...styles.value, color: FAILURE_RED, py: 4 }}>
        Could not load missions: {error}
      </Typography>
    );
  }

  if (missions.length === 0) {
    return (
      <Typography sx={{ ...styles.value, color: PARCHMENT, py: 4 }}>
        No missions found. Add rows to the missions table to see them here.
      </Typography>
    );
  }

  return (

    <>
    {/* lunar landing map here */}

    
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          py: 3,
        }}
      >
        {missions.map((m) => (
          <MissionCard key={m.id ?? m.mission_name} {...m} />
        ))}
      </Box>
    </Container>
    </>
  );
}


const styles = {
  label: {
    fontFamily: FONT,
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: PARCHMENT,
  },
  value: {
    fontFamily: FONT,
    fontSize: "0.95rem",
    color: "#ffffff",
  },
};