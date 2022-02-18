import { Outlet, LiveReload, Link, Links, Meta } from "remix";
import globalStylesUrl from "~/styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

//export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

import styles from "~/styles/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }, { rel: "stylesheet", href: globalStylesUrl}];
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
  return (
    <>
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
      </nav>
        </Navbar.Collapse>
        </Navbar>
      <div className="container">{children}</div>
      <div>
        
      </div>
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

        */