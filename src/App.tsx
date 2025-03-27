import "./App.css";





// Components
import AboutUs from "./Components/AboutUs/AboutUs";
import Greetings from "./Components/Greetings/Greetings";
import Header from "./Components/Header/Header";
import Team from "./Components/Team/Team";

// 

function App() {
  return (
    <div className="All">
      <div className="bg-grid" />
      <Header />
      <main>
        <Greetings />
        <AboutUs />
        <Team />
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
