import "./header.module.scss";
import Logo from "../Logo/logo.cmp";

const Header = () => {
  return (
      <div className="header">
        <Logo/>
      {
        // <button className="button-primary">Hire me now!</button>
      }
      </div>
  );
};

export default Header;
