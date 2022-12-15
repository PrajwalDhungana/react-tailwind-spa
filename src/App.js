import Header from "./components/Header/";
import Home from "./components/";
import Footer from "./components/Footer/";
import About from "./components/about";
import Contact from "./components/contact";
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
