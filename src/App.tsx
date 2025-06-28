// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectForm from "./pages/projectForm/ProjectForm";
import "./App.css"; // Import your CSS file
import ProjectList from "./pages/projectList/ProjectList";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-form" element={<ProjectForm />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
