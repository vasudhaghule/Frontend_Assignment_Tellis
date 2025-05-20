import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Calculator from "./Pages/calculator";
import Start from "./Pages/Start";
import Header from "./components/Header" 
import Footer from "./components/Footer.jsx";



import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/start" element={<Start />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
  