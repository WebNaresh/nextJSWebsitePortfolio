import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
async function getData() {
  const res = await fetch(
    "https://vercel.com/webnaresh/nextjs/9yuRiZGXanMRS3WxQ5EbB7ZQ4EUR/api/posts"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data?.map((ele, i) => {
        return (
          <Link href={`/blog/${ele._id}`} className={styles.container} key={i}>
            <div className={styles.imageContainer}>
              <Image
                src={ele.image}
                alt="its"
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{ele.title} </h1>
              <p className={styles.desc}> {ele.content} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
