import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import HobbyPage from "./components/HobbyPage";
import HobbyDetail from "./components/HobbyDetail";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/hobby">Hobby</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/hobby" element={<HobbyPage />} />
        <Route path="/hobby/:id" element={<HobbyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
