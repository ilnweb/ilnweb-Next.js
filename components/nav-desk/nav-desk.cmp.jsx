import "./nav-desk.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowGoBackLine } from "react-icons/ri";

const NavDesk = ({ Scroll }) => {
  const router = useRouter();

  return (
    <div className="nav-desk">
      <ul className="nav-desk-list">
        {router.pathname === "/portfolio" ? (
          <Link href="/">
            <li className="d-flex-center">
              Back to Home &nbsp; <RiArrowGoBackLine />
            </li>
          </Link>
        ) : (
          <>
            <Scroll
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <li>Home</li>
            </Scroll>
            <Scroll
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <li>Portfolio</li>
            </Scroll>
            <Scroll
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <li>About</li>
            </Scroll>
            <Scroll
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
            >
              <li>Skills</li>
            </Scroll>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavDesk;
