"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const session = useSession();
  if (session.status === "loading") {
    return <p> Loading .....</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    console.log(`🚀 ~ email:`, email);
    const password = e.target[1].value;
    console.log(`🚀 ~ password:`, password);
    signIn("credentials", { email, password });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="email"
          className={styles.input}
        />
        <input
          required
          type="password"
          placeholder="password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      {err && "Something went wrong"}
      <Link href={"/dashboard/register"}>Register new User</Link>
      <button onClick={() => signIn("google")}>Login With Google</button>
    </div>
  );
};

export default Login;
