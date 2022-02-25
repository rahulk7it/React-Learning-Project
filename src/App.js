import Header from "./components/UI/Header";
import Footer1 from "./components/UI/Footer1";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from "./components/Pages/About";
import Company from "./components/Pages/Company";


function App() {
  
  return (
    <><Router>
        <Header /> 
        <Routes>
          <Route path="about-SKINN-by-TITAN" element={<Company />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
       </Routes>
       <Footer1 />
       </Router>
    </>

  );
}

export default App;
