import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid } from '@mui/material';
import ControlBlock from './Components/ControlBlock';
import TournamentsList from './Components/TournamentsList';

function App() {
  return (
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
  );
}

export default App;
