import "./nav-desk.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowGoBackLine } from "react-icons/ri";

const NavDesk = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="nav-desk">
      <ul className="nav-desk-list">
        {router.pathname === "/portfolio" ? (
          <Link href="/">
            <li className="d-flex-center">
              Back to Home 	&nbsp; <RiArrowGoBackLine />
            </li>
          </Link>
        ) : (
          <>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="#portfolio">
              <li>Portfolio</li>
            </Link>
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
