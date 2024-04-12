import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomerSuccess } from "./pages/CustomerSuccess";
import { EngineeringPage } from "./pages/Engineering";
import { HomePage } from "./pages/HomePage";
import { SalesPage } from "./pages/Sales";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/cs" element={<CustomerSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
