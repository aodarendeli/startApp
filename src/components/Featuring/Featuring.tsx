
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

// Images
import coinbase from "../../assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "../../assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "../../assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "../../assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "../../assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "../../assets/images/logos/gray-logos/logo-vodafone.svg";
import DefaultCounterCard from "./DefaultCounterCard";

function Featuring() {
    return (
        <Box component="section" pt={3} pb={8}>
            <Container maxWidth="xl">
                <Grid container spacing={3} sx={{ mb: 12 }}>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box component="img" src={coinbase} alt="coinbase" width="100%" />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box component="img" src={nasa} alt="nasa" width="100%" />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box component="img" src={netflix} alt="netflix" width="100%" />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box component="img" src={pinterest} alt="pinterest" width="100%" />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box component="img" src={spotify} alt="spotify" width="100%" />
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box component="img" src={vodafone} alt="vodafone" width="100%" />
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                    <Grid item xs={12} md={3}>
                        <DefaultCounterCard
                            count={5234}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            separator=","
                            title="Projelerimiz"
                            description="Eşsiz projemiz ve tamir çözümlerimiz ile hizmetinizdeyiz."
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DefaultCounterCard
                            count={3400}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            separator=","
                            suffix="+"
                            title="Saat"
                            description="Bunca yıla aşkın eşssiz bir tecrübe ile hizmetinizdeyiz."
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DefaultCounterCard
                            count={24}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            suffix="/7"
                            title="Destek"
                            description="Günün her saati sizler için sorun çözüm bulmaya hazırız."
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Featuring;