import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid, useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import ControlBlock from './Components/ControlBlock';
import TournamentsList from './Components/TournamentsList';
import { TournamentsContext } from './services/context'; 

function App() {
  const [allTournaments, setAllTournaments] = useState([]);
  const [filteredTournaments, setFilteredTournaments] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [country, setCountry] = useState("");
  const value = {
    allTournaments, 
    setAllTournaments, 
    searchValue, 
    setSearchValue, 
    filteredTournaments, 
    setFilteredTournaments,
    country,
    setCountry
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const filterTournaments = useCallback(() => {
    const newFiltration = allTournaments.filter((tournament) => country ? tournament.country.id === country : true);
    setFilteredTournaments(newFiltration);
  }, [/* searchValue,  */country, allTournaments]);

  useEffect(()=> {
    if (allTournaments.length === 0) {
      return
    }
    filterTournaments();
  }, [filterTournaments, allTournaments.length]);

  return (
    <TournamentsContext.Provider value={value}>
      <Grid 
        container 
        sx={{
          p: isSmallScreen ? 2 : 7,
          background: "#FFFAF0"
        }}
      >
        <ControlBlock />
        <TournamentsList />
      </Grid>
    </TournamentsContext.Provider>
  );
}

export default App;
