"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkMode from "../DarkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const data = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "PortFolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
    { id: 6, title: "DashBoard", url: "/dashboard" },
    // Add more objects as needed
  ];
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Naresh Bhhosale
      </Link>
      <div className={styles.link}>
        <DarkMode />
        {data.map((e) => {
          return (
            <Link className={styles.link} key={e.id} href={e.url}>
              {e.title}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button
            className={styles.button}
            onClick={() => {
              console.log("Logged Oud");
              signOut();
            }}
          >
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
