import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
export const metadata = {
  title: "Contact",
  description: "Contact Page is loading",
};
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            fill
            src={"/contact.png"}
            alt="contact"
            className={styles.image}
          ></Image>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textArea}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button url={"#"} text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
