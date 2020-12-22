import "./logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="ilnlogo">
        <div className="logo_square" />
        <img
          src="https://res.cloudinary.com/ilnphotography/image/upload/v1602679432/ilnweb/ilnLogo_white-rkqrkr_z7dwn7.png"
          alt="ilnweblogo"
          className="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
