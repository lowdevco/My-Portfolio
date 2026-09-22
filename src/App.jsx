import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import SEOUpdater from "./components/SEOUpdater";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
