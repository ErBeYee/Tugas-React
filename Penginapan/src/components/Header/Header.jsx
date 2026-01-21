import "./header.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Header() {
  return (
    <>
      <ul className="hd">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default Header;
