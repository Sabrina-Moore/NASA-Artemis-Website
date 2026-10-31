//Page for apollo missions
import { useRef, useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import MissionCards from "../components/MissionCards.jsx";
import {Box, TextField, List, ListItem, ListItemText, Typography} from '@mui/material';
import { useMemo } from "react";

//should include search bar
//supabase fetch functionaltiy


export default function Missions(){

//state for searching through card components
const [searchQuery, setSearchQuery] = useState("");
const [showDropdown, setShowDropdown] = useState(false)
const inputRef = useRef(null);
const dropdownRef = useRef(null);

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
          `mission_id, mission_name, mission_category, expected_launch, actual_launch, mission_description, success, takeaway, mission_images (
            id,
            image_url
          )`
        )
        .order("mission_id", { ascending: true });

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
  const filteredMissions = useMemo(() => {
    if (!searchQuery.trim()) return missions;
    return missions.filter((data) => 
      data.mission_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.mission_category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, missions]);
  
  // search filter creating a copy of the list with only elements that pass the test
  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
      setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown",handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  //rendering page
  return (
    <>
      {/* Search bar */}
      <Box className="control-panel" sx={{position: "relative"}}>
        <TextField
          ref={inputRef}
          id="search"
          type="text" 
          placeholder="Search by mission name or category ..." 
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowDropdown(true);
          }}
          autoComplete="off"
          sx={{ 
          width: { xs: 180, sm: 280 },
          '& .MuiOutlinedInput-root': {
            fontFamily: "'Chivo Mono', monospace",
            fontSize: '0.65rem',
            color: '#ffffff',
            borderRadius: '3px', // Sharper industrial edges
            border: '2px solid #c5a880',
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover': { 
              borderColor: '#45f3ff', // Cyan highlight on cursor track
              '& fieldset': {
                borderColor: "transparent",
              },
            },
            '&.Mui-focused': { 
              borderColor: '#ffaa00', // Warning amber highlight on entry focus
              '& fieldset': {
                borderColor: "transparent",
              },
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

        {/* Dropdown */}
          {showDropdown && missions.length > 0 && (
            <Box
              ref={dropdownRef}
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                zIndex: 1000,
                maxHeight: '250px',
                overflowY: 'auto',
                backgroundColor: '#1a1a2e',
                border: '1px solid #45f3ff',
                borderRadius: '2px',
                boxShadow: '0 2px 8px rgba(69, 243, 255, 0.2)',
                marginTop: '4px',
              }}
            >
              <List>
                {filteredMissions.map((mission) => (
                  <ListItem
                    key={mission.mission_id}
                    onClick={() => {
                      setSearchQuery(mission.mission_name);
                      setShowDropdown(false);
                    }}
                    sx={{
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(69, 243, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: '#2a2a4a',
                      },
                    }}
                  >
                    <ListItemText
                      primary={mission.mission_name}
                      secondary={
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#95a5a6',
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '0.65rem',
                          }}
                        >
                          {mission.mission_category}
                        </Typography>
                      }
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: "'Chivo Mono', monospace",
                          fontSize: '0.8rem',
                          color: '#ffffff',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              {filteredMissions.length === 0 && (
                <Typography
                  sx={{
                    padding: '8px 16px',
                    color: '#95a5a6',
                    fontSize: '0.75rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  No missions found
                </Typography>
              )}
            </Box>
          )}
      </Box>
      {/* pulls from missionCards component*/}
      <MissionCards missions={filteredMissions} loading={loading} error={error} />
    </>
  );
}

