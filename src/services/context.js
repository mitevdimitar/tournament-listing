import React from 'react';

export const TournamentsContext = React.createContext({
    tournaments: [],
    filteredTournaments: [],
    setTournaments: () => {},
});