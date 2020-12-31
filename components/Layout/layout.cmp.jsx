import Link from "next/link";
import Head from "next/head";
import Header from "../Header/header.cmp";
import "./layout.module.scss";
import Logo from "../Logo/logo.cmp";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      {children}
      <footer className="footer">
        <div>
          <Logo
            url={
              "https://res.cloudinary.com/ilnphotography/image/upload/v1602679745/ilnweb/ilnLogo-grey-black_ee79eg.png"
            }
          />
          <p>Copyright © 2020 ilnweb All rights reserved</p>
          <p>Warsaw, Poland</p>
          <p>+48 791724341</p>
        </div>
        <div>
          <p>
            <strong>Email:</strong>
          </p>
          <p>iliyan.tsachev@ilnweb.com</p>
        </div>
        <div>
          <p>
            <strong>Social Links:</strong>
          </p>
          <a href="https://github.com/ilnweb" target="blank">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/ilnweb" target="blank">
            <FaFacebook className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/iliyan-tsachev/" target="blank">
            <FaLinkedinIn className="footer-icon" />
          </a>
        </div>
        <div className="waves">
          <svg
            width="100%"
            height="200px"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00dcc0" />
              <stop offset="30%" stop-color="#3a86ff" />
              <stop offset="100%" stop-color="#3a86ff" />
            </linearGradient>
            <path
              fill="url(#grad1)"
              d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z"
            >
              <animate
                repeatCount="indefinite"
                fill="url(#grad1)"
                attributeName="d"
                dur="15s"
                attributeType="XML"
                values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            "
              ></animate>
            </path>
          </svg>
        </div>
      </footer>
    </div>
  );
}
