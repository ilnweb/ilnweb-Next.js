import "./header.module.scss";
import Logo from "../Logo/logo.cmp";
import NavDesk from "../nav-desk/nav-desk.cmp";

const Header = () => {
  return (
      <div id="header" className="header">
      <Logo />
      <NavDesk/>
      {
        // <button className="button-primary">Hire me now!</button>
      }
      </div>
  );
};

export default Header;
