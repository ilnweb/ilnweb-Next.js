import "./nav-desk.module.scss";
import Link from "next/link";

const NavDesk = () => {
  return (
    <div className="nav-desk">
      <ul className="nav-desk-list">
        <Link href="#header">
          <li>Home</li>
        </Link>
        <Link href="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link href="#about">
          <li>About</li>
        </Link>
        <Link href="#skills">
          <li>Skills</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavDesk;
