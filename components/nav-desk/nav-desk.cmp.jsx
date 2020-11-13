import "./nav-desk.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const NavDesk = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="nav-desk">
      <ul className="nav-desk-list">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/portfolio">
          <li>Portfolio</li>
        </Link>
        {router.pathname === "/portfolio" ? (
          ""
        ) : (
          <>
            <Link href="#about">
              <li>About</li>
            </Link>
            <Link href="#skills">
              <li>Skills</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavDesk;
