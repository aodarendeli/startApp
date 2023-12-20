// @mui material components
import { Box, Input, Typography, Grid, Container, Button } from "@mui/material";
import macbook from "../../assets/images/macbook.png";

function Newsletter() {
    return (
        <Box component="section" pt={6} my={6}>
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs={12} lg={8} md={6}>
                        <Typography variant="h4">Güncel Haberlerden bilgi almak için</Typography>
                        <Typography variant="body2" color="text" mb={3}>
                            Mail adresinizi bıraktığınız takdirde sizlere detaylı bir bilgi vererek gün içerinde en etkili yardımı sağlamaya hazırız.
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <Input type="email"  placeholder={"Email ..."} fullWidth />
                            </Grid>
                            <Grid item xs={4}>
                                <Button sx={{ height: "100%" }}>
                                    Gönder
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} xs={12} md={5} sx={{ ml: "auto" }}>
                        <Box position="relative">
                            <Box component="img" src={macbook} alt="macbook" width="100%" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Newsletter;