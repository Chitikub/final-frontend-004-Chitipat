import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} /> {}
          <Route path="/about" element={<About />} /> {}
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
