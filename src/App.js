import React from "react";
import { Routes, Route} from 'react-router-dom'
/* Components */
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from "./Components/Experience";
import Project from "./Components/Project";

const App = () => {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
