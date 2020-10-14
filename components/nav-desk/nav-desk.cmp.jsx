import "./nav-desk.module.scss";
import Link from 'next/link';

const NavDesk = () => {
  return (
    <div className="nav-desk">
      <ul className="nav-desk-list">
        <li>Home</li>
        <Link href="/portfolio"><li>Portfolio</li></Link>
        <li>About</li>
        <li>Skills</li>
      </ul>
    </div>
  );
};

export default NavDesk;
