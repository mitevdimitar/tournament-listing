import { Grid } from '@mui/material';
import CountriesSelect from './Controls/CountriesSelect';
import SearchInput from './Controls/SearchInput';

function ControlBlock() {

  return (
    <Grid 
      container
      sx={{
        mb: 2
      }}
      justifyContent="space-between"
    >
      <CountriesSelect />
      <SearchInput />
    </Grid>
  );
}

export default ControlBlock;