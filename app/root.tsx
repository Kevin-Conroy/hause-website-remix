import { Outlet, LiveReload, Link, Links, Meta, Scripts } from "remix";
import globalStylesUrl from "~/styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import cx from "classnames";

//export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

import styles from "~/styles/tailwind.css";
import classNames from "classnames";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: globalStylesUrl },
  ];
}

export const meta = () => {
  const description = "Dave Hause official website";
  const keywords = "Dave Hause";
  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <div>
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </div>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        
        <Links />
        <title>{title ? title : "Dave Hause"}</title>
      </head>
      <body>
        
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        
      </body>
    </html>
  );
}



function Layout({ children }) {
  const [clicked, setClicked] = useState(false);
  console.log(clicked)
  return (
    <>
    
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div>
          <span className="text-2xl">DAVE HAUSE</span>
          <div className="w-8 h-8 block md:hidden cursor-pointer" onClick={() => setClicked(!clicked)}>X</div>
        </div>
        <ul className={cx("md:flex md:items-center z-[-1] md:z-auto md:block", {"hidden": !clicked})}>
          <li className="mx-4 my-6 md:my-0">
            <a href="/" className="text-xl hover:text-cyan-500 duration-200">
              HOME
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/news" className="text-xl hover:text-cyan-500 duration-200">
              NEWS
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/tourdates" className="text-xl hover:text-cyan-500 duration-200">
              TOUR DATES
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            {" "}
            <a href="/bio" className="text-xl hover:text-cyan-500 duration-200">
              BIO
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/" className="text-xl hover:text-cyan-500 duration-200">
              STORE
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/releases" className="text-xl hover:text-cyan-500 duration-200">
              RELEASES
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/archive" className="text-xl hover:text-cyan-500 duration-200">
              ARCHIVE
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
      <div></div>
    </>
  );
}

/*
<Link to="/" className="logo">
          Dave Hause
        </Link>
        <ul className="nav">
          <li></li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/TourDates">Tour Dates</Link>
          </li>
          <li>
            <Link to="/Bio">Bio</Link>
          </li>
          <li>
            <a href="https://store.davehause.com/">Store</a>
          </li>
          <li>
            <Link to="/Releases">Releases</Link>
          </li>
          <li>
            <Link to="/Archive">Archive</Link>
          </li>
          <li>
            <Link to="/SocialFollow">Follow</Link>
          </li>
        </ul>

//2-21 Navbar save below
<Navbar
        bg="NavBar"
        variant="dark"
        sticky="top"
        expand="lg"
      >
        <Navbar.Toggle />
        <Navbar.Collapse>
        <nav className="navbar">
        <Link to="/" className="logo">
          Dave Hause
        </Link>
        <ul className="flex">
          <li></li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/TourDates">Tour Dates</Link>
          </li>
          <li>
            <Link to="/Bio">Bio</Link>
          </li>
          <li>
            <a href="https://store.davehause.com/">Store</a>
          </li>
          <li>
            <Link to="/Releases">Releases</Link>
          </li>
          <li>
            <Link to="/Archive">Archive</Link>
          </li>
          <li>
            <Link to="/SocialFollow">Follow</Link>
          </li>
        </ul>
      </nav>
        </Navbar.Collapse>
        </Navbar>

        */
