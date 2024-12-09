// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  // let items = ["New York", "Los Angeles", "Chicago", "Houston", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
