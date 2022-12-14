import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { TournamentsContext } from '../../services/context';
import { useState, useContext } from 'react';
import { useMediaQuery } from '@mui/material';

function SearchInput() {
    const { searchValue, setSearchValue, setFilteredTournaments, allTournaments } = useContext(TournamentsContext);
    const [currentSearchValue, setCurrentSearchValue] = useState(searchValue); 
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handleSearch = () => {
      setSearchValue(currentSearchValue);
    }

    const handleMouseDownSearch = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
      setCurrentSearchValue(event.target.value)
      if (!event.target.value) {
        setSearchValue(event.target.value);
        setFilteredTournaments(allTournaments)
      }
    }

    return (
        <FormControl sx={{ width: isSmallScreen ? "100%" : "30%" }} variant="outlined">
          <InputLabel htmlFor="search-input">Search by name</InputLabel>
          <OutlinedInput
            id="search-input"
            type='text'
            value={currentSearchValue}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search icon"
                    onClick={handleSearch}
                    onMouseDown={handleMouseDownSearch}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search by name"
          />
        </FormControl>
    )
}

export default SearchInput;