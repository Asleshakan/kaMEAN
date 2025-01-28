import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Investments from "./components/Investments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Users />} />
        <Route path="/investment" element={<Investments />} />
      </Routes>
    </Router>
  );
}

export default App;
