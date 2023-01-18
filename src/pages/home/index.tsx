import Categories from "../../components/categories";
import Footer from "../../components/footer";
import Newsletter from "../../components/newsletter";
import Navbar from "../../components/navbar";
import Slider from "../../components/slider";
import Products from "../../components/products";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;
