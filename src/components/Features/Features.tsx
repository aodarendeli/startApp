// @mui material components
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

function Features() {
  return (
    <Box component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <Typography variant="h3" my={1}>
              Yeditepe Teknik
            </Typography>
            <Typography variant="body2" color="text" mb={2}>
              Eşsiz projemiz ve tamir çözümlerimiz ile hizmetinizdeyiz.Bunca yıla aşkın eşssiz bir tecrübe ile hizmetinizdeyiz.Günün her saati sizler için sorun çözüm bulmaya hazırız.
            </Typography>
            <Typography
              component={NavLink}
              to={'/hakkımızda'}
              variant="inherit"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",
                textDecoration: 'none',

                "& .material-icons, .material-icons-round,": {
                  transform: `translateX(2px)`,
                  transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                },

                "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
                {
                  transform: `translateX(6px)`,
                },
              }}
            >
              Daha Fazla
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
                  Eşsiz projemiz ve tamir çözümlerimiz ile hizmetinizdeyiz.
                  <br />
                  Eşsiz projemiz ve tamir çözümlerimiz ile hizmetinizdeyiz.
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
                  Bunca yıla aşkın eşssiz bir tecrübe ile hizmetinizdeyiz.
                  <br />
                  Bunca yıla aşkın eşssiz bir tecrübe ile hizmetinizdeyiz.
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
                  Günün her saati sizler için sorun çözüm bulmaya hazırız.
                  <br />
                  Günün her saati sizler için sorun çözüm bulmaya hazırız.
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