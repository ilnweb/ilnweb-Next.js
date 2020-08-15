import Link from "next/link";
import Head from "next/head";
import Header from "../Header/header.cmp";

export default function Layout({ children, title = "ilnweb" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <footer>{"I`m here to stay"}</footer>
    </div>
  );
}
