// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectForm from "./pages/projectForm/ProjectForm";
import "./App.css"; // Import your CSS file
import ProjectList from "./pages/projectList/ProjectList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-form" element={<ProjectForm />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </Router>
  );
}

export default App;
