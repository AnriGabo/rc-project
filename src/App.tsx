import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Greetings from "./Components/Greetings/Greetings";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="All">
      <div className="bg-grid" />
      <Header />
      <main>
        <Greetings />
        <AboutUs />
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
