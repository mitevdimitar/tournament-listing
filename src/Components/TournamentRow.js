import { Card, Grid, Typography } from '@mui/material';

function TournamentRow({
    tournament
}) {
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
            alignItems: "center"
            }}
        >
            <Typography
                sx={{
                    fontSize: "1.1rem",
                    mr: 2
                }}
            >
                {tournament.name}
            </Typography>
            <span>
                -
            </span>
            <Grid
                sx={{
                    ml: 2
                }}  
            >
                {tournament.country && tournament.country.name}
            </Grid>
        </Card>
    )
}

export default TournamentRow;