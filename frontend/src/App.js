import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./common/Header";
import About from "./components/About";
import Footer from "./common/Footer";
import Contact from "./components/Contact"
import Login from "./common/Login";
import Glossary from "./fragments/Glossary";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
