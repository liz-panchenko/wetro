import logo from "../images/pebbleColour.svg";
import "../App.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="page-wrapper">
      <div style={{ display: "flex", width: "100%", justify: "start" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/eng-prod">Engineering & Product</Link>
          </li>
          <li>
            <Link to="/sales">Sales</Link>
          </li>
          <li>
            <Link to="/cs">Customer Success</Link>
          </li>
          <li>
            <Link to="/design-growth">Design & Growth</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
