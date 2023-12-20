import { Link, NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoCT from "../../assets/images/logo-ct-dark.png";


const date = new Date().getFullYear();
const content = {
  brand: {
    name: "Material Kit 2",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      icon: <GitHubIcon />,
      link: "/",
    },
    {
      icon: <YouTubeIcon />,
      link: "/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/" },
        { name: "freebies", route: "/" },
        { name: "premium tools", route: "/" },
        { name: "blog", route: "/" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", route: "/" },
        { name: "bits & snippets", route: "/" },
        { name: "affiliate program", route: "/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", route: "/" },
        { name: "knowledge center", route: "/" },
        { name: "custom development", route: "/" },
        { name: "sponsorships", route: "/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: "/" },
        { name: "privacy policy", route: "/" },
        { name: "licenses (EULA)", route: "/" },
      ],
    },
  ],
  copyright: (
    <Typography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Ozgur by{" "}
      <Typography
        component={NavLink}
        to={'/'}
        // target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Yeditepe Elektrik
      </Typography>
      .
    </Typography>
  ),
}
function DefaultFooter() {
  const { brand, socials, menus, copyright } = content;

  return (
    <Box component="footer">
      <Container maxWidth="xl" sx={{mt:3,mb:3}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <Box>
              <Link to={brand.route}>
                <Box component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
              </Link>
              <Typography variant="h6">{brand.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }:any, index, key:any) => (
                <Typography
                  key={index}
                  component={NavLink}
                  to={link}
                  // target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="inherit"
                  // opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid>
          {menus.map(({ name: title, items }:any) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <Typography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </Typography>
              <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }:any) => (
                  <Box key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <Typography
                        style={{textDecoration: 'none'}}
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color={"inherit"}
                      >
                        {name}
                      </Typography>
                    ) : (
                      <Typography
                        component={NavLink}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color={"inherit"}
                        sx={{textDecoration: 'none'}}
                      >
                        {name}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}



export default DefaultFooter;