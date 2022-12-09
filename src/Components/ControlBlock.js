import { Grid } from '@mui/material';
import CountriesSelect from './Controls/CountriesSelect';

function ControlBlock() {
    return (
      <Grid 
        container
        sx={{
          mb: 2
        }}
      >
        <CountriesSelect />
      </Grid>
    );
  }
  
  export default ControlBlock;