import { BrowserRouter as Router } from "react-router-dom";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Testimonios from "./components/Testimonios";
import Works from "./components/Works";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Hero />
          <Clients />
          <Works />
          <Reviews />
          <Testimonios />
          <Services />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
