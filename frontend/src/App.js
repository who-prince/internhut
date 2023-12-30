import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./common/Header";
import About from "./components/About";
import Footer from "./common/Footer";
import Contact from "./components/Contact"
import Glossary from "./fragments/Glossary";
import AuthPage from "./common/AuthPage";
import { authCardContext } from "./AppContext";
import { useState } from "react";

function App() {
  const [auth , setAuth] = useState(false)

  return (
    <authCardContext.Provider value={{auth,setAuth}} >
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage  />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </authCardContext.Provider>

  );
}

export default App;
