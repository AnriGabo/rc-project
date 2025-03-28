import "./App.css";

// Components
import AboutUs from "./Components/AboutUs/AboutUs";
import Greetings from "./Components/Greetings/Greetings";
import Header from "./Components/Header/Header";
import Team from "./Components/Customer/Customer";
import Services from "./Components/Services/Services";
import Project from "./Components/Projects/Project";



function App() {
  return (
    <div className="All">
      <div className="bg-grid" />
      <Header />
      <main>
        <Greetings />
        <AboutUs />
        <Team />
        <Services />
        <Project />
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
