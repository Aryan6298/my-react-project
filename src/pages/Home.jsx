
import TopBar from "../components/TopBar";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import About from "../components/about";
import Services from "../components/services";



const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
    <>
      <TopBar />
      <NavigationBar />
      <ImageCarousel/>
      <About/>
      <Services/>
      <Footer />
    </>
  );
};

export default Home;
