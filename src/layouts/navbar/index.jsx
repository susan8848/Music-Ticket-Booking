import { NavbarItems } from "./NavbarItems";
import { FaSearch } from "react-icons/fa";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          {NavbarItems.map((item, index) => (
            <li key={index}>
              <a href={`/${item.toLowerCase()}.html`}>{item}</a>
            </li>
          ))}
        </ul>
        <FaSearch className="search-icon" />
      </nav>
    </>
  );
};

export default Navbar;

