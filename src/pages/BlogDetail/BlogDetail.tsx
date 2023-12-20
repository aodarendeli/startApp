import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom'
import TransparentBlogCard from '../../components/Posts/TransparentBlogCard';
import post1 from "../../assets/images/examples/testimonial-6-2.jpg";

function BlogDetail() {
  const params = useParams();
  console.log(params);

  return (
    <Grid item xs={12} sm={6} lg={3} sx={{ mt: 4, mb: 4 }}>
      <TransparentBlogCard
        image={post1}
        title="Su Kaçağı Bulma"
        description="Modern teknolojiyle su kaçaklarının tespiti ve tamiri artık daha kolay ve zahmetsiz hale geldi. Firmamız, bilgisayarlı  cihazlarını kullanarak su kaçağının yerini hassas bir şekilde belirleyebilmektedir. ..."
        action={{
          type: "internal",
          route: "/blog/1",
          color: "info",
          label: "Daha Fazla",
        }}
      />
    </Grid>
  )
}

export default BlogDetail