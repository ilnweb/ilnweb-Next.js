import Link from "next/link";
import Head from "next/head";
import Header from "../Header/header.cmp";
import "./layout.module.scss";

export default function Layout({ children, title = "ilnweb" }) {
  return (
    <div className="content">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <footer className="footer">
        <div className="ilnlogo">
          <div className="logo_square" />
          <img
            src="https://res.cloudinary.com/ilnphotography/image/upload/v1596117875/ilnweb/ilnLogo_rkqrkr.png"
            alt="ilnweblogo"
            className="logo"
          />
        </div>
      </footer>
    </div>
  );
}
