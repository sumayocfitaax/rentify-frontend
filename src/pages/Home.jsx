import FeaturedProperties from "../components/FeatureProperties"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import PropertyCategories from "../components/PropertyCategories"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <PropertyCategories/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home