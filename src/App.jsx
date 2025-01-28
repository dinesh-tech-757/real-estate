import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";
import Value from "./components/Value";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
