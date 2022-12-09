import { Grid } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getTournaments } from '../services/api';
import TournamentRow from './TournamentRow';

function TournamentsList() {
  const [tournaments, setTournaments] = useState([]);
  
  const fetchTournaments = useCallback(async () => {
    const response = await getTournaments();
    setTournaments(response)
  }, []);

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);


  return (
    <Grid container>
      {tournaments.map((tournament) => {
        return (
          <TournamentRow 
            key={tournament.id} 
            tournament={tournament}
          />
        )
      })}
    </Grid>
  );
}
  
  export default TournamentsList;