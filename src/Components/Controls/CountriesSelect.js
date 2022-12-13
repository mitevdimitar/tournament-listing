import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import { TournamentsContext } from '../../services/context';
import { MenuItem, Typography, Grid, useMediaQuery } from '@mui/material';

function CountriesSelect() {
    const [countries, setCountrues] = useState([]);
    const { 
        allTournaments,
        country,
        setCountry
     } = useContext(TournamentsContext);

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    
    useEffect(() => {
        const tournamentCountries = allTournaments.map(tournament => tournament.country);
        const uniqueCountries = Array.from(new Set(tournamentCountries.map(JSON.stringify))).map(JSON.parse);
        setCountrues(uniqueCountries);
    }, [allTournaments])

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <Box sx={{ minWidth: isSmallScreen ? "100%" : "30%" }} mb={isSmallScreen ? 1 : 0}>
            <FormControl fullWidth>
                <InputLabel id="countries-select-label">Country</InputLabel>
                <Select
                    labelId="countries-select-label"
                    id="countries-select"
                    value={country}
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