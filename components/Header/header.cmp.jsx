import "./header.module.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="ilnlogo">
        <div className="logo_square"/>
        <img
          src="https://res.cloudinary.com/ilnphotography/image/upload/v1596117875/ilnweb/ilnLogo_rkqrkr.png"
          alt="ilnweblogo"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Header;
