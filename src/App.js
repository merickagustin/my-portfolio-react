import "./css/custom.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./css/style.css";

import About from "./components/About.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header sticky-top">
        <Navbar />
      </header>
      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
