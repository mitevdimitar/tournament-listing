import { Grid } from '@mui/material';
import { useCallback, useEffect, useContext } from 'react';
import { getTournaments } from '../services/api';
import { TournamentsContext } from '../services/context';
import TournamentRow from './TournamentRow';

function TournamentsList() {
  const { 
    filteredTournaments, 
    setAllTournaments, 
    setFilteredTournaments 
  } = useContext(TournamentsContext);
  
  const fetchTournaments = useCallback(async () => {
    const response = await getTournaments();
    setAllTournaments(response);
    setFilteredTournaments(response);
  }, [setAllTournaments, setFilteredTournaments]);

  useEffect(() => {
    fetchTournaments();
  }, [fetchTournaments]);

  console.log({filteredTournaments})


  return (
    <Grid container>
      {filteredTournaments.map((tournament) => {
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