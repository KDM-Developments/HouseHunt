import mainhome from "./content/homepage/mainhome.svg";
import stars1 from "./content/homepage/stars-home.svg";
import stars2 from "./content/homepage/stars-topic.svg";
import logo from "./content/homepage/househuntlogo-small.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header background2">
        <img src={logo} className="logo-small" />
        <img src={stars1} className="stars1" />
        <img src={mainhome} alt="Home" className="home" />
        {/* <img src={background} className="background" alt="background" /> */}
        <span className="intro-text">
          Start Your House Hunt here!
          <img src={stars2} className="stars2" />
        </span>
        <p className="intro-description">
          Browes and add appartment’s listing for free
        </p>
        <button className="sign-in">Sign in</button>
        <button className="log-in">Log in</button>
      </div>
    </div>
  );
}

export default App;
