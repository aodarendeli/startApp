import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// Images
import post1 from "../../assets/images/examples/testimonial-6-2.jpg";
import post2 from "../../assets/images/examples/testimonial-6-3.jpg";
import post3 from "../../assets/images/examples/blog-9-4.jpg";
import post4 from "../../assets/images/examples/blog2.jpg";
import { Box, Typography } from "@mui/material";
import BackgroundBlogCard from "./BackgroundBlogCard";
import TransparentBlogCard from "./TransparentBlogCard";

function Posts() {
  return (
    <Box component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <Typography variant="h3" mb={6}>
            Blog Haberlerimiz
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Su Kaçağı Bulma"
              description="Modern teknolojiyle su kaçaklarının tespiti ve tamiri artık daha kolay ve zahmetsiz hale geldi. Firmamız, bilgisayarlı  cihazlarını kullanarak su kaçağının yerini hassas bir şekilde belirleyebilmektedir. ..."
              action={{
                type: "internal",
                route: "/blog/tesisat",
                color: "info",
                label: "Daha Fazla",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Tıkanıklık Açma"
              description="Tuvaletiniz tıkandı ve nasıl açacağınız konusunda endişelenmeyin. Türkiye'nin tesisat lideri olan Oktay Tesisat, kırmadan dökmeden tadilatsız bir şekilde tuvalet tıkanıklığını açma servisi sunmaktadır. ..."
              action={{
                type: "internal",
                route: "/blog/tesisat",
                color: "info",
                label: "Daha Fazla",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Tıkanıklık Açma"
              description="Modern teknolojiyle su kaçaklarının tespiti ve tamiri artık daha kolay ve zahmetsiz hale geldi. Firmamız, bilgisayarlı  cihazlarını kullanarak su kaçağının yerini hassas bir şekilde belirleyebilmektedir. ..."
              action={{
                type: "internal",
                route: "/blog/tesisat",
                color: "info",
                label: "Daha Fazla",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Tesisat"
              description="Modern teknolojiyle su kaçaklarının tespiti ve tamiri artık daha kolay ve zahmetsiz hale geldi."
              action={{
                type: "internal",
                route: "/blog/tesisat",
                label: "Daha Fazla",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Posts;