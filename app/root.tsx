import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import globalStylesUrl from "./styles/global.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    {
      href: globalStylesUrl,
      rel: "stylesheet",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <Link to="/">
            <div
              style={{
                background: "linear-gradient(#e66465, #9198e5)",
                height: "3rem",
                width: "3rem",
              }}
            />
          </Link>
          <nav>
            <Link style={{ marginRight: "0.75rem" }} to="/">
              About
            </Link>
            <Link to="/posts">Posts</Link>
          </nav>
        </header>
        <Outlet />
        <footer
          style={{
            borderTop: "1px solid #AAAAAA",
            marginTop: "2rem",
            paddingTop: "1rem",
          }}
        >
          {new Date().getFullYear()} © Théophile Avoyne
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
