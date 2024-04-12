import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomerSuccess } from "./pages/CustomerSuccess";
import { DesignPage } from "./pages/Design";
import { EngineeringPage } from "./pages/Engineering";
import { HomePage } from "./pages/HomePage";
import { SalesPage } from "./pages/Sales";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eng-prod" element={<EngineeringPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/cs" element={<CustomerSuccess />} />
          <Route path="/design-growth" element={<DesignPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
