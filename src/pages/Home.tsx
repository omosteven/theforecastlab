import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HomeBody from "../components/home/HomeBody";

const Home = () => {
  return (
    <div className="is-boxed has-animations">
      <div className="body-wrap">
        <Header />
        <HomeBody />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
