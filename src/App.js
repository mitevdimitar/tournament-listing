import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
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

  useEffect(()=> {
    if (allTournaments.length === 0) {
      return
    }
    console.log({searchValue, country})
    const newFiltration = allTournaments.filter((tournament) => country ? tournament.country.id === country : true);
    setFilteredTournaments(newFiltration);
  }, [searchValue, country, allTournaments]);

  return (
    <TournamentsContext.Provider value={value}>
      <Grid 
        container 
        sx={{
          p: 7,
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
