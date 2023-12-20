// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React examples
import { Box } from "@mui/material";
import DefaultInfoCard from "./DefaultInfoCard";
import CenteredBlogCard from "./CenteredBlogCard";

function Information() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <Box mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="2 YIL GARANTİLİ HİZMET"
                    description="Tamamlanan işlemlerimize tam 2 yıl garanti veriyoruz!"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="30 DAKİKADA MÜDAHALE"
                    description="İstanbul’un her yerine 30 dakika içinde ulaşıp müdahale ediyoruz!"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="PROFESYONEL CİHAZ"
                    description="Teknolojik cihazlarla kırmadan temiz hizmet veriyoruz!"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="21 YILLIK TECRÜBE"
                    description="21 yıllık geçmişimizle uygun fiyat, kaliteli hizmet sunuyoruz!"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Detaylı Bilgiler İçin"
              description="Websitemizden daha deraylı bilgi almak ve fırsatları yakalamak için daima sizlerleyiz."
              action={{
                type: "internal",
                route: "hakkımızda",
                color: "info",
                label: "Daha Fazla",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;