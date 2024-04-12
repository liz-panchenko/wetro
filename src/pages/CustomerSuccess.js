import logo from "../images/pebbleColour.svg";
import "../App.css";
import { Link } from "react-router-dom";

export const CustomerSuccess = () => {
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
          <Link to="/" style={{ paddingRight: "12px" }}>
            Home
          </Link>
          <Link to="/engineering" style={{ paddingRight: "12px" }}>
            Engineering
          </Link>
          <Link to="/sales" style={{ paddingRight: "12px" }}>
            Sales
          </Link>
        </div>
      </div>

      <h2>Customer Success</h2>

      <iframe
        src="https://spinthewheel.app/21vAR0mWua"
        width="520"
        height="520"
        style={{ border: "0px" }}
        title={"CS wheel selector"}
      ></iframe>
    </div>
  );
};
