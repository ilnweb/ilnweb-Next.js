import "./logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="ilnlogo">
        <div className="logo_square" />
        <img
          src="https://res.cloudinary.com/ilnphotography/image/upload/v1602679745/ilnweb/ilnLogo-grey-black_ee79eg.png"
          alt="ilnweblogo"
          className="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
