import "./header.module.scss";
import Logo from "../Logo/logo.cmp";
import NavDesk from "../nav-desk/nav-desk.cmp";
import { Link } from "react-scroll";

const Header = () => {

  const scroll = Link;

  return (
      <div id="header" className="header">
      <Logo />
      <NavDesk Scroll={scroll}/>
      {
        // <button className="button-primary">Hire me now!</button>
      }
      </div>
  );
};

export default Header;
