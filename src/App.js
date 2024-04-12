// import "./App.css";
// import logo from "./images/pebbleColour.svg";

// function App() {
//   return (
//     <div className="App">
//       <div style={{ display: "flex", width: "100%", justify: "start" }}>
//         <img src={logo} className="App-logo" alt="logo" />
//       </div>

//       <iframe
//         src="https://spinthewheel.app/ERbb1nxTMj"
//         width="520"
//         height="520"
//         style={{ border: "0px" }}
//         title={"Engineering wheel selector"}
//       ></iframe>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
