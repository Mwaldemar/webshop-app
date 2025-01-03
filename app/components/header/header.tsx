import Link from "next/link";
import styles from "./header.module.scss";

import { CategoryBar } from "../category/category";

export const Header = () => (
  <header className={styles.headerContainer}>
    <div className={styles.header}>
      <div className={styles.titlebox}>
        <Link className={styles.title} href="/">
          <h1>Trendhim Prototype</h1>
        </Link>
        <p>SW8</p>
      </div>
    </div>
    <CategoryBar mobile desktop />
  </header>
);
