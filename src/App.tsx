import React, { FC } from "react";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import AboutMe from "./pages/AboutMe/AboutMe";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";

const App: FC = () => {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
