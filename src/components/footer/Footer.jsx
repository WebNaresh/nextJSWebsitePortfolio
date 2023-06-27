"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      @2023 Naresh. All Rights Reserved.
      <div className={styles.social}>
        <Image
          src={"/1.png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Naresh Facebook"
        />
        <Image
          src={"/2.png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Naresh Instagram"
        />
        <Image
          src={"/3.png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Naresh Twitter"
        />
        <Image
          src={"/4.png"}
          width={15}
          height={15}
          className={styles.icon}
          alt="Naresh Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
