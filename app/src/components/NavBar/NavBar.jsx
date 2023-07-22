import "./NavbarStyles.css";

// I orginally did this in react native but i think we need an alternative
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={"header"}>
      <ul className={"nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/OurStory">Our Story</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/Team">Team</Link>
        </li>
      </ul>

    </div>
  );
};
