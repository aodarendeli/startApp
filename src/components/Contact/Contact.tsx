import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button, Input, Typography } from "@mui/material";
import './index.scss';
function ContactComp() {
    return (
        <Box component="section" py={{ xs: 0, lg: 6 }}>
            <Container>
                <Grid container item>
                    <Box
                        width="100%"
                        // bgColor="white"
                        borderRadius="xl"
                        // shadow="xl"
                        mb={6}
                        sx={{ overflow: "hidden" }}
                    >

                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                position="relative"
                                px={0}
                                className="deneme"
                            >
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                    height="100%"
                                >
                                    <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                                        <Typography variant="h3" color="white" mb={1}>
                                            Contact Information
                                        </Typography>
                                        <Typography variant="body2" mb={3}>
                                            Fill up the form and our Team will get back to you within 24 hours.
                                        </Typography>
                                        <Box display="flex" p={1}>
                                            <Typography variant="button" color="white">
                                                <i className="fas fa-phone" />
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="button"
                                                // color="white"
                                                // opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                (+40) 772 100 200
                                            </Typography>
                                        </Box>
                                        <Box display="flex" color="white" p={1}>
                                            <Typography variant="button" color="white">
                                                <i className="fas fa-envelope" />
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="button"
                                                // color="white"
                                                // opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                ozgur
                                            </Typography>
                                        </Box>
                                        <Box display="flex" color="white" p={1}>
                                            <Typography variant="button" color="white">
                                                <i className="fas fa-map-marker-alt" />
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="button"
                                                // color="white"
                                                // opacity={0.8}
                                                ml={2}
                                                fontWeight="regular"
                                            >
                                                Dyonisie Wolf Bucharest, RO 010458
                                            </Typography>
                                        </Box>
                                        <Box mt={3}>
                                            <Button variant="text" size="large" >
                                                <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                                            </Button>
                                            <Button variant="text" size="large" >
                                                <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                                            </Button>
                                            <Button variant="text">
                                                <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                                            </Button>
                                            <Button variant="text">
                                                <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <Box component="form" p={2} method="post">
                                    <Box px={3} py={{ xs: 2, sm: 6 }}>
                                        <Typography variant="h2" mb={1}>
                                            Say Hi!
                                        </Typography>
                                        <Typography variant="body1" color="text" mb={2}>
                                            We&apos;d like to talk with you.
                                        </Typography>
                                    </Box>
                                    <Box pt={0.5} pb={3} px={3}>
                                        <Grid container>
                                            <Grid item xs={12} pr={1} mb={6}>
                                                <Input
                                                    //   variant="standard"
                                                    //   label="My name is"
                                                    placeholder="Full Name"
                                                    //   InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={6}>
                                                <Input
                                                    //   variant="standard"
                                                    //   label="I'm looking for"
                                                    placeholder="What you love"

                                                    //   InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} pr={1} mb={6}>
                                                <Input
                                                    //   variant="standard"
                                                    //   label="Your message"
                                                    placeholder="I want to say that..."
                                                    //   InputLabelProps={{ shrink: true }}
                                                    fullWidth
                                                    multiline
                                                    rows={6}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            md={6}
                                            justifyContent="flex-end"
                                            textAlign="right"
                                            ml="auto"
                                        >
                                            <Button variant="contained">
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default ContactComp;