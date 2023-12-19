// @mui material components
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

function Features() {
  return (
    <Box component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <Typography variant="h3" my={1}>
              Read More About Us
            </Typography>
            <Typography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about us
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                //   width="3rem"
                //   height="3rem"
                //   variant="gradient"
                //   bgColor="info"
                //   color="white"
                //   coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">mediation</Icon>
                </Box>
                <Typography variant="body2" color="text" pl={2}>
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                //   width="3rem"
                //   height="3rem"
                //   variant="gradient"
                //   bgColor="info"
                //   color="white"
                //   coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">settings_overscan</Icon>
                </Box>
                <Typography variant="body2" color="text" pl={2}>
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                //   width="3rem"
                //   height="3rem"
                //   variant="gradient"
                //   bgColor="info"
                //   color="white"
                //   coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">token</Icon>
                </Box>
                <Typography variant="body2" color="text" pl={2}>
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;