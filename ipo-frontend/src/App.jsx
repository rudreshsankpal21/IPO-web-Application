import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPODetails from "./pages/IPODetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddIPO from "./pages/AddIPO";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddIPO />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </Router>
  );
}

export default App;
