import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./layout.module.css";

interface Props {
  pageTitle: string;
  children: JSX.Element;
}
const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
