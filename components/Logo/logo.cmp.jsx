import "./logo.module.scss";
import Link from "next/link";

const Logo = ({url}) => {
  return (
    <Link href="/">
      <div className="ilnlogo">
        <div className="logo_square" />
        <img
          src={url}
          alt="ilnweblogo"
          className="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
