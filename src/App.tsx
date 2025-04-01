import { useState } from "react";
import "./App.css";

// Components
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Customer/Customer";
import Footer from "./Components/Footer/Footer";
import Greetings from "./Components/Greetings/Greetings";
import Header from "./Components/Header/Header";
import Project from "./Components/Projects/Project";
import Services from "./Components/Services/Services";
import SideBar from "./Components/SideBar/SideBar";


function App() {
  // Global state - props in children
  const [isOpened, setIsOpened] = useState(false);

  const SidebarToggle = () => {
      setIsOpened(isOpened => !isOpened)
  }
 

  return (
    <div>
 <div className="AppWrapper ">
      <div className="bg-grid" />
      <header>
        {/* toggle ფუნქცია მიუვა burgermenu-ს */}
      <Header toggleFunction={SidebarToggle} />
      </header>
      
      <main>
        {/* აქ უკვე დამუშავებული სთეითი მივა */}
      <SideBar isOpened={isOpened} onClose={SidebarToggle} />
        <Greetings />
        <AboutUs />
        <Team />
        <Services />
        <Project />
      </main>

    </div>
    <footer>
        <Footer />
      </footer>
    </div>
   
  );
}

export default App;
