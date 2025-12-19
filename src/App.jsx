import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import FatwahDetailPage from "./pages/FatwahDetailPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/fatwah/:id" element={<FatwahDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
