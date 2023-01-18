import Categories from "../../components/categories";
import Footer from "../../components/footer";
import Newsletter from "../../components/newsletter";
import Navbar from "../../components/navbar";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;
