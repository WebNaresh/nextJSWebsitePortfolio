import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(
    `https://vercel.com/webnaresh/nextjs/9yuRiZGXanMRS3WxQ5EbB7ZQ4EUR/api/posts/${id}`,
    {
      cache: "no-store",
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate th closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  // read route params
  let post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}
const PageId = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.image} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default PageId;
