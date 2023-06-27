import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill
          alt="image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            illum exercitationem suscipit animi deserunt molestias ea voluptate
            aperiam, nam quasi distinctio corporis nobis, cum, beatae dolorum
            qui officia quidem neque voluptatibus! Atque sapiente quod ab
            cupiditate modi. Earum, animi commodi? Facere eum ullam laborum illo
            incidunt eos libero mollitia exercitationem.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            minima, commodi delectus ipsam omnis veniam reiciendis officiis
            deserunt temporibus, ducimus unde! Quidem, tempore accusantium
            dolorem ea minima sint sed et ab pariatur eius officia amet qui
            deserunt quibusdam, repellendus voluptas odit quaerat rem.
            Consectetur dolor quam, quia odio quisquam iure.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            illum exercitationem suscipit animi deserunt molestias ea voluptate
            aperiam, nam quasi distinctio corporis nobis, cum, beatae dolorum
            qui officia quidem neque voluptatibus! Atque sapiente quod ab
            cupiditate modi. Earum, animi commodi? Facere eum ullam laborum illo
            incidunt eos libero mollitia exercitationem.
            <br />
            <br />
            -Dynamic Websites
            <br />
            <br />- Fast
            <br />
            <br />
            -Handy Mobile friendly websites
          </p>
          <Button text={"contact"} url={"contact "} />
        </div>
      </div>
    </div>
  );
};

export default About;
