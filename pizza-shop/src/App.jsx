import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import User from "./pages/User/User";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
