//Page for apollo missions
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import MissionCards from "../components/MissionCards.jsx";

//should include search bar
//supabase fetch functionaltiy


export default function Missions(){

    //states for controlling and setting missions and supabase loading and error messages
const [missions, setMissions] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

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

  return (
    <>
      {/* pulls from missionCards component*/}
      <MissionCards missions={missions} loading={loading} error={error} />
    </>
  );
}