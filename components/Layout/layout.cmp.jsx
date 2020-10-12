import Link from "next/link";
import Head from "next/head";
import Header from "../Header/header.cmp";
import "./layout.module.scss";
import Logo from "../Logo/logo.cmp";
import { FaGithub,FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

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
        <div>
          <Logo />
          <p>- Copyright © 2020 ilnweb ---</p>
          <p>Warsaw, Poland</p>
          <p>+48 791724341</p>
        </div>
        <div>
          <p>Email:</p>
          <p>iliyan.tsachev@ilnweb.com</p>
        </div>
        <div>
          
        </div>
      </footer>
    </div>
  );
}
