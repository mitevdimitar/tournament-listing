import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { TournamentsContext } from '../../services/context';
import { useState, useContext } from 'react';

function SearchInput() {
    const { searchValue, setSearchValue } = useContext(TournamentsContext);
    const [currentSearchValue, setCurrentSearchValue] = useState(searchValue); 

    const handleSearch = () => {
        setSearchValue(currentSearchValue);
    }

    const handleMouseDownSearch = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ width: '30%' }} variant="outlined">
          <InputLabel htmlFor="search-input">Search by name</InputLabel>
          <OutlinedInput
            id="search-input"
            type='text'
            value={currentSearchValue}
            onChange={(e)=>setCurrentSearchValue(e.target.value)}
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