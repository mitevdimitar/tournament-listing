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
  const value = {allTournaments, setAllTournaments, searchValue, setSearchValue, filteredTournaments, setFilteredTournaments};

  useEffect(()=> {
    console.log({searchValue})
    //change filteredTournaments
  }, [searchValue]);

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
