import { Container } from "@mui/material"
import Features from "../../components/Features/Features"
import Posts from "../../components/Posts/Posts"
import Contact from "../../components/Contact/Contact"
import Featuring from "../../components/Featuring/Featuring"
import Newsletter from "../../components/Newsletter/Newsletter"
import Team from "../../components/Team/Team"
import Cart from "../../components/Card/Cart"
import Carousel from "../../components/Carousel/Carousel"
import ImageGallery from "../../components/ImageGallery/ImageGallery"
import Pricing from "../../components/Pricing/Pricing"
import Information from "../../components/Information/Information"

function HomePage() {
  return (
    <Container>
      <Carousel />
      <Cart />
      <ImageGallery />
      <Cart />
      <ImageGallery />
      <Information />
      <Team />
      <Featuring />
      <Newsletter />
      <Features />
      <Posts />
      <Contact />
      <Pricing />


    </Container>
  )
}

export default HomePage