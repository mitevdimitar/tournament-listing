import { Card, Grid, Typography, useMediaQuery } from '@mui/material';

function TournamentRow({
    tournament
}) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Card 
            variant="outlined"
            sx={{
            width: "100%",
            background: "#2F4F4F",
            color: "white",
            display: "flex",
            mb: 1,
            pl: 2,
            height: 40,
            alignItems: isSmallScreen ? "start" : "center",
            flexDirection: isSmallScreen ? "column" : "row"
            }}
        >
            <Typography
                sx={{
                    fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                    mr: isSmallScreen ? 0 : 2
                }}
            >
                {tournament.name}
            </Typography>
            {!isSmallScreen && (
                <span>
                    -
                </span>
            )}
            <Grid
                sx={{
                    ml: isSmallScreen ? 0 : 2,
                    fontSize: isSmallScreen && "0.8rem",
                }}  
            >
                {tournament.country && tournament.country.name}
            </Grid>
        </Card>
    )
}

export default TournamentRow;