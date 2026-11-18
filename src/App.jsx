import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import Terminal from "./pages/Terminal";
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
        <Route path="/terminal" element={<Terminal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
