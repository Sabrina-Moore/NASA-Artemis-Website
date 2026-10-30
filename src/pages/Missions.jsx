//Page for apollo missions
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import MissionCards from "../components/MissionCards.jsx";
import {Box, TextField, Typography} from '@mui/material';

//should include search bar
//supabase fetch functionaltiy


export default function Missions(){

//state for searching through card components
const [searchQuery, setSearchQuery] = useState("");

//states for controlling and setting missions and supabase loading and error messages
const [missions, setMissions] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

//fetch from supabase table Apollo-missions
  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { data, error } = await supabase
        .from("Apollo-missions")
        .select(
          "mission_id, mission_name, mission_category, expected_launch, actual_launch, mission_description, success, takeaway"
        )
        .order("expected_launch", { ascending: true });

      if (cancelled) return;
      if (error) setError(error.message);
      else setMissions(data ?? []);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);


  //search bar logic
  // search filter creating a copy of the list with only elements that pass the test
  //arrow function


  //rendering page
  return (
    <>
        {/* Search bar */}
        <Box className="control-panel">
          <TextField
            id="search"
            type="text" 
            placeholder="Search here..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            autoComplete="off"
            sx={{ 
            width: { xs: 180, sm: 280 },
            '& .MuiOutlinedInput-root': {
              fontFamily: "'Chivo Mono', monospace",
              fontSize: '0.8rem',
              color: '#ffffff',
              borderRadius: '2px', // Sharper industrial edges
              '&:hover fieldset': { 
                borderColor: '#45f3ff', // Cyan highlight on cursor track
              },
              '&.Mui-focused fieldset': { 
                borderColor: '#ffaa00', // Warning amber highlight on entry focus
              },
            },
            '& .MuiInputLabel-root': { 
              color: '#95a5a6',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '1px',
              '&.Mui-focused': {
                color: '#ffaa00' // Matches label to warning amber focus
              }
            }
          }}/>
          </Box>

      {/* pulls from missionCards component*/}
      <MissionCards missions={missions} loading={loading} error={error} />
    </>
  );
}