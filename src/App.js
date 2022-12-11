import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="h-full grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
