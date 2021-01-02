import "./header.module.scss";
import { useEffect, useState } from "react";
import Logo from "../Logo/logo.cmp";
import NavDesk from "../nav-desk/nav-desk.cmp";
import { Link } from "react-scroll";

const Header = () => {
  const scroll = Link;

  const [nav, setNav] = useState({ nav: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 600) {
        setNav({ nav: true });
      } else if (window.pageYOffset < 600) {
        setNav({ nav: false });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <div id="header" className={`header ${nav.nav ? "sticky" : ""}`}>
      <Logo
        url={
          nav.nav ?
              "https://res.cloudinary.com/ilnphotography/image/upload/v1602679745/ilnweb/ilnLogo-grey-black_ee79eg.png" : "https://res.cloudinary.com/ilnphotography/image/upload/v1602679432/ilnweb/ilnLogo_white-rkqrkr_z7dwn7.png"
        }
      />
      <NavDesk Scroll={scroll} />
      {
        // <button className="button-primary">Hire me now!</button>
      }
    </div>
  );
};

export default Header;
