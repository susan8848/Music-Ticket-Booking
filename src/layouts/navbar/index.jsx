import { NavbarItems } from "../../../data/index";
import { FaSearch } from "react-icons/fa";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {NavbarItems.map((item) => (
          <li key={item.id}>
            <a href={`/${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>
      <FaSearch className="search-icon" />
    </nav>
  );
};

export default Navbar;

