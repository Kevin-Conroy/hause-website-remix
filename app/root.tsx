import { Outlet, LiveReload, Link, Links, Meta } from "remix";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

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
      <nav className="navbar">
        <Link to="/" className="logo">
          Dave Hause
        </Link>
        <ul className="nav">
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
            <Link to="/Store">Store</Link>
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
      <div className="container">{children}</div>
      <div>
        
      </div>
    </>
  );
}
