import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
