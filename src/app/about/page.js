"use client"

import Typewriter from "../components/Typewriter";
import styles from "@/app/styles/about.module.css"
import React from 'react';

export default function About() {
  const [showDescription, setShowDescription] = React.useState(false)
  const handleToggleDescription = () => {
    setShowDescription(!showDescription)
  }
  return (
    <>
      <section className={styles.aboutHeader}>
        <div className={styles.content}>
          <Typewriter text="Janice" speed={150} />
          <button onClick={handleToggleDescription}>{showDescription ? "Hide": "Show"} Description</button>
          {showDescription && <p>
            I am currently pursuing a Master of Science in Integrated Design,
            Business, and Technology at the University of Southern California,
            building on my Bachelor of Arts in Business Management and my
            Associate of Arts in Merchandise Product Development. My academic
            and professional experiences have helped me combine creativity,
            strategy, and product development, particularly in the fashion and
            social media industries. Outside of my professional pursuits, I am a
            sports enthusiast who loves engaging in a variety of outdoor
            activities. I also enjoy spending time with my two beloved pets: a
            sweet Ragdoll cat and a lively Pomeranian dog, who bring joy and
            energy into my everyday life.
          </p>}
        </div>
      </section>

      <section className={styles.photosSection}>
        <div className={`${styles.photo} ${styles.photo1}`}></div>
        <div className={`${styles.photo} ${styles.photo2}`}></div>
        <div className={`${styles.photo} ${styles.photo3}`}></div>
      </section>
    </>
  );
}
