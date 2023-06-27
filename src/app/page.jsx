import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          {" "}
          Turning your Idea into Reality. We bring together ther teams from the
          global tech industry{" "}
        </p>
        <Button text={"See Our Works"} url={"/portfolio"} />
      </div>
      <div className={styles.item}>
        <Image
          width={500}
          height={500}
          src={Hero}
          alt="HeroImgae"
          className={styles.img}
        ></Image>
      </div>
    </div>
  );
}
