import logo from "../images/pebbleColour.svg";
import "../App.css";
import { Link } from "react-router-dom";

export const DesignPage = () => {
  return (
    <div className="page-wrapper">
      <div style={{ display: "flex", width: "100%", justify: "space-between" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="navLinks">
          <Link to="/" style={{ paddingRight: "12px" }}>
            Home
          </Link>
          <Link to="/eng-prod" style={{ paddingRight: "12px" }}>
            Eng&Prod
          </Link>
          <Link to="/sales" style={{ paddingRight: "12px" }}>
            Sales
          </Link>
          <Link to="/cs" style={{ paddingRight: "12px" }}>
            Customer Success
          </Link>
        </div>
      </div>

      <h2>✨ Design & Growth ✨</h2>

      <iframe
        src="https://spinthewheel.app/3l6ustOSgq"
        width="100%"
        height="520"
        style={{ border: "0px" }}
        title={"Design&Growth wheel selector"}
      ></iframe>
    </div>
  );
};
