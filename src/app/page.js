"use client"
import styles from "./page.module.css";
import BounceText from "./components/BounceText";
import FlipImage from "./components/FlipImage";
import React from 'react'
import Link from "next/link";


export default function Home() {
  

  return (
    <>
      <section className={styles.homeHeader}>
        <div className={styles.content}>
          <BounceText>
            <h1 className={styles.title}>Welcome to My Website</h1>
            <p>hiii</p>
          </BounceText>
        </div>
      </section>

      <section className={styles.subpage}>
        <div className={styles.content}>
          <h3>About</h3>
          <p>Learn more about me</p>
          <a href="about.html" className="nav-link">
            Go
          </a>
        </div>

        <FlipImage 
          frontImgSrc={"/assets/home-header-bg.jpg"}
          backImgSrc={"/assets/dog.jpg"} />
      </section>

      <section className={styles.subpage}>
        <div className={styles.content}>
          <h3>Portfolio</h3>
          <p>Previous work</p>
          <Link href="/about">About</Link>
        </div>

        <FlipImage 
          frontImgSrc={"/assets/home-header-bg.jpg"}
          backImgSrc={"/assets/dog.jpg"} />
      </section>

    </>
  );
}
