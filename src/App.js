import Header from "./header";
import Home from "./home";
import Info from "./info";
import Calculator from "./calculator";
import Footer from "./footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="h-full grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
