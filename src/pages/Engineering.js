import logo from "../images/pebbleColour.svg";
import "../App.css";
import { Link } from "react-router-dom";

export const EngineeringPage = () => {
  return (
    <div className="page-wrapper">
      <div style={{ display: "flex", width: "100%", justify: "space-between" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <Link to="/" style={{ paddingInline: "12px" }}>
            Home
          </Link>
          <Link to="/sales">Sales</Link>
          <Link to="/cs">Customer Success</Link>
        </div>
      </div>

      <h2>Engineering</h2>

      <iframe
        src="https://spinthewheel.app/ERbb1nxTMj"
        width="520"
        height="520"
        style={{ border: "0px" }}
        title={"Engineering wheel selector"}
      ></iframe>
    </div>
  );
};
