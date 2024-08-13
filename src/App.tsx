// import "./assets/styles/styles.css";
import { useEffect } from "react";
import "./assets/styles/index.scss";

import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      // easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return <Home />;
}

export default App;
