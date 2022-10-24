import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Mainimage from "./components/Mainimage";
function App() {
  return (
    <div className="App">
      {/* naviagtion Part */}
      <Navigation />
      {/* main image part */}
      <Mainimage />
      {/* projects part */}
      <Projects />
      {/* form part */}
      <Form />
      {/* footer part  */}
      <Footer />
    </div>
  );
}

export default App;
