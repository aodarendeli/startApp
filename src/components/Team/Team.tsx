// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import { Box, Typography } from "@mui/material";

// Images
import team1 from "../../assets/images/team-5.jpg";
import team2 from "../../assets/images/bruce-mars.jpg";
import team3 from "../../assets/images/ivana-squares.jpg";
import team4 from "../../assets/images/ivana-square.jpg";
import HorizontalTeamCard from "./HorizontalTeamCard";

function Team() {
  return (
    <Box
      component="section"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <Typography variant="h3" >
              The Executive Team
            </Typography>
            <Typography variant="body2" >
              Typography&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Emma Roberts"
                position={{ color: "info", label: "UI Designer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="William Pearce"
                position={{ color: "info", label: "Boss" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Ivana Flow"
                position={{ color: "info", label: "Athlete" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Marquez Garcia"
                position={{ color: "info", label: "JS Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;