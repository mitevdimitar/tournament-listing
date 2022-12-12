import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import { TournamentsContext } from '../../services/context';
import { MenuItem, Typography, Grid } from '@mui/material';

function CountriesSelect() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountrues] = useState([]);
    const { allTournaments } = useContext(TournamentsContext);
    
    useEffect(() => {
        const tournamentCountries = allTournaments.map(tournament => tournament.country);
        const uniqueCountries = Array.from(new Set(tournamentCountries.map(JSON.stringify))).map(JSON.parse);
        setCountrues(uniqueCountries);
    }, [allTournaments])

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <Box sx={{ minWidth: "30%" }}>
            <FormControl fullWidth>
                <InputLabel id="countries-select-label">Country</InputLabel>
                <Select
                    labelId="countries-select-label"
                    id="countries-select"
                    value={selectedCountry}
                    label="Country"
                    onChange={handleChange}
                >
                    {countries.map((country) => {
                        return (
                                    <MenuItem key={country.id} value={country.id}>
                                        <Grid container alignItems="center">
                                            <img height="15" alt="country-flag" src={country.url_flag} />
                                            <Typography sx={{ml: 2}}>
                                                {country.name}
                                            </Typography>
                                        </Grid>
                                    </MenuItem>
                                )
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}

export default CountriesSelect;