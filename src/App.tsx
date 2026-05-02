import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/containers/Footer";
import Navbar from "./components/containers/Navbar";
import Home from "./pages/Home";
import CVPage from "./pages/CVPage";
import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
