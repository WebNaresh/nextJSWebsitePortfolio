"use client";
import React, { useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "@/context/ThemContext";

const DarkMode = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}> ☀️</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px " }}
      />
    </div>
  );
};

export default DarkMode;
