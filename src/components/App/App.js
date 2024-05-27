import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import CatFacts from "../CatFacts/CatFacts";
import About from "../About/About";
import CatImages from "../CatImages/CatImages";
import Footer from "../Footer/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/facts" element={<CatFacts />} />
          <Route path="/images" element={<CatImages />} />
          <Route path="/about" element={<About embedId="osY_a-Sk7Ss" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
