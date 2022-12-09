import { Grid } from '@mui/material';
import { useCallback, useEffect, useContext } from 'react';
import { getTournaments } from '../services/api';
import { TournamentsContext } from '../services/context';
import TournamentRow from './TournamentRow';

function TournamentsList() {
  const { tournaments, setTournaments } = useContext(TournamentsContext);
  
  const fetchTournaments = useCallback(async () => {
    const response = await getTournaments();
    setTournaments(response);
  }, [setTournaments]);

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