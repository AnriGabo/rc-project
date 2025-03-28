import "./App.css";

// Components
import AboutUs from "./Components/AboutUs/AboutUs";
import Greetings from "./Components/Greetings/Greetings";
import Header from "./Components/Header/Header";
import Team from "./Components/Customer/Customer";
import Services from "./Components/Services/Services";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="AppWrapper ">
      <div className="bg-grid" />
      <Header />
      <main>
        <Greetings />
        <AboutUs />
        <Team />
        <Services />
        <Project />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
