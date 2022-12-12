import React from 'react';

export const TournamentsContext = React.createContext({
    allTournaments: [],
    setAllTournaments: () => {},
    filteredTournaments: [],
    setFilteredTournaments: () => {},
    searchValue: "",
    setSearchValue: () => {},
    country: null,
    setCountry: () => {},
});