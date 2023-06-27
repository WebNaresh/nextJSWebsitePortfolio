import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const PortFolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectTitle}>
        <div className={styles.items}>
          <Link className={styles.item} href={"/portfolio/illustrations"}>
            <span className={styles.title}>IlluStrations</span>
          </Link>
          <Link className={styles.item} href={"/portfolio/websites"}>
            <span className={styles.title}>Websites</span>
          </Link>
          <Link className={styles.item} href={"/portfolio/application"}>
            <span className={styles.title}>Application</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
